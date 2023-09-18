---
sidebar_position: 3
title: Write Custom Policies
---

While the Permit.io platform offers support to the majority of policy configurations, sometimes developers are required to extend their policies with functionalities currently unsupported by Permit's UI.
Since Permit.io's cloud configuration generates Policy as Code for each user configuration, you can easily extend it by writing custom policy code.

This document demonstrates an example use-case for defining a policy not supported via Permit.io UI, but easily configurable using the Policy as Code extension to Permit.io's UI config.

##  The Deny Rule
Before diving into the custom policy example, let's give an example of a common scenario where developers would want to extend the Permit.io platform configuration with their own custom code - `Deny` rules.

Policies generated via Permit's UI, whether RBAC, ABAC or ReBAC, are based on 'Allow' rules. If a user is allowed to preformed an action based on the policy, the permit.check function will return 'Allow = True'

In some specific cases, you might want to create a special `Deny` rule that trumps other access policies. The Permit.io UI doesn't let you define a rule like "If this rule applies, deny access regardless of any other defined policies". 

For example, let's say we want to restrict access to a role `tmp-admin` only to a certain time boundary. This means that even if the configured policy returns `true`, the `Deny` rule will block access outside the allocated time.

## Writing Custom Policy
Permit.io supports two open-source policy engines: OPA, and Cedar (More coming soon) to keep policy configuration flexible.
Each engine has a Policy language to write policies: Rego and Cedar (respectively). This article will show an example of writing custom Rego code to extend Permit.io's policy configuration.

The first step to create custom policies is enabling the GitOps feature. This will allow you to create custom code.
_If you have the GitOps feature enabled already, skip to the next step - 'Custom Deny Rule'._

## The `custom.rego` file
A Permit.io policy repository structure consists of two folders, `permit` and `custom`.
Hinted by its name, the 'custom' folder is where you can add your custom Rego code. If you look there, you’ll find a file named 'custom.rego' with a sample policy script.

_Rego is a logical language (same as Prolog/Datalog). Hence, it could look unnatural for developers who code in common languages. This shouldn't worry you - the policy we want to define is simple, and we'll cover it step-by-step._

Let’s take a look at the sample policy script to understand the initial structure of our custom rule:
In the first row, you can see the `package` declaration:

```
`package permit.custom` 
```
The purpose of this declaration is to enable the use of this custom Rego configuration in other places in our project.
We will use it later to import the custom code to Permit.io's centralized policy configuration, so when you use the SDK to call the PDP, the engine will include this policy package.

Next, we will find the basic declaration for logical policy - the default value that is equal to false.
```
default allow := false
```
Basically, this is a deny rule, which means every time this policy is evaluated, the default result value is false.

The default configuration of policies in Permit states that as long as one of the policy configurations (Whether it's RBAC, ABAC, ReBAC, or a custom rule) results in 'true', access is granted. 
To add a deny rule, we would need to change Permit's default configuration. We will do that in the next steps. 

## Creating the Custom Deny Rule

Now that we understand the reasoning behind setting the default decision to 'false', let’s model a decision tree that could revert the false value to true - thus granting our user access. 
Thinking logically about our rule, we would like our decision tree to look this way:

```
false
   - true if not rbac // since our date boundary rule is 
   - true if not role `tmp-admin`
   - true if role `tmp-admin` and now is in the desired date boundaries
```

Let’s create our first state - allow if the decision is not based on RBAC.
The first step will be to import the section in Permit.io generated code that is responsible for centralizing the policies. In the top of the file, after the package declaration, insert the following section:

```
import data.permit.policies
```
Now, we can use the previously allowed policies to check if this is an RBAC decision.
Let’s do it by adding the following code after the `default allow := false` section:
```
allow {
    not "rbac" in policies.__allow_sources
}
```

Continuing to the next state, the role checking, let's import the relevant data from Permit.io’s RBAC package. Add the following import:

```
import permit.rbac
```

Together with the `rbac` package, we will also get the context data from the current policy evaluation, which means we can get the allowing roles from the decision.
Let’s continue our decision state with the following section:

```
else {
   not "tmp-admin" in rbac.allowing_roles
}
```
What this section checks is if `tmp-admin` role does not exist in the allowing roles array from the evaluation context.
To use the Rego `in` keyword, we need to import it, so also make sure you add an `import` statement at the top of the file before importing any `permit` packages.

Now, we are left with the last step of this deny rule - allow only if the date is between our set date boundaries.
Of course, in your custom Rego, you can use any context of data (such as user/resource attributes) to set such boundaries. Here, we use hard-coded strings to simplify it.
Let’s add the following code after the previous one:
```
else {
   time.now_ns() >= time.parse_rfc3339_ns("2023-01-01T00:00:00+02:00")
   time.now_ns() <= time.parse_rfc3339_ns("2024-01-01T00:00:00+02:00")
}
```
We declare a rule that returns `true` only if the `now` date is in the boundaries of 2023.

At this point, our `custom.rego` file should look like this:
```
package package permit.custom

import future.keywords.in
import data.permit.policies
import data.permit.rbac

default allow := false

allow {
    not "rbac" in policies.__allow_sources
} else {
   not "tmp-admin" in rbac.allowing_roles
} else {
   time.now_ns() >= time.parse_rfc3339_ns("2023-01-01T00:00:00+02:00")
   time.now_ns() <= time.parse_rfc3339_ns("2024-01-01T00:00:00+02:00")
}
```

## Testing the custom policy
With Permit's GitOps feature, pushing your changes to a remote repository will immediately affect your tenant.
While the built-in Permit configuration has a detailed Audit log decision output, for the custom Rego, the audit log only returns the result.
You can use the built-in print function in Rego to debug your created custom policy.
For example, if you add the following print command in the first 'allow' section, you’ll see all the allowing policies per evaluation in the PDP logs.
```
print(policies.__allow_sources)
```

## Enfore the deny policy
As mentioned, the current Permit-generated policies evaluate all the `allowing_source` in an `or` operator.
In our `deny` example, we would like to calculate the particular `custom` package as an end argument to the total policy evaluation.
This means no matter what is the total evaluation result, the final result will depend on the result of our custom rule.

To do so, we need to tweak our desired deny rules in the `root.rego` file in the root folder (the file that centralized the policy evaluation).
In the `root.rego` file, you’ll find two allow blocks - one for Permit's default and the other for the `custom` default.

```
allow {
   policies.allow
}

allow {
   custom.allow
}
```
To change this behavior, we need to unify this allow section so it will look like this:
```
allow {
    policies.allow
    custom.allow
}
```
Changing the main `allow` block this way will affect `and` operator on all the custom rules added there.

## Multiple custom rules
Permit custom rules are not limited to only one `custom.rego` file.
You can add as many files and folders as you want in the `custom` folder. There are two options to add them to the custom rule calculation:
Use the `custom.rego` as an additional root file and centralize the custom package rules into it.
Import multiple `custom` packages in the `root.rego` file and add them as (or in) `allow` blocks.

## Disclaimer
Extending custom policies with Permit.io is an advanced task, and you should do it at your own risk.
If you have any questions regarding implementing policies without extending them with custom code, you can set a meeting with our engineering team. Were always happy to help you model your policies :slightly_smiling_face: .
