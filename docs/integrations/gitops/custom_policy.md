---
sidebar_position: 3
title: Write Custom Policies
---

While Permit.io UI is a good fit for almost every policy configuration need, sometimes developers need to extend their policy configuration to something nonexistent.
Since Permit.io cloud configuration generates Policy as Code for each user configuration, extending it by writing custom policy code yourself is easy.

This document demonstrates an example of a use-case that is not supported via Permit.io UI but easily possible through Policy as Code extension to the Permit.io UI configuration.

## Deny All Rule
When a policy is configured in Permit.io UI, whether it’s RBAC, ABAC, or ReBAC, the policy generated is `Allow` policy. This means that if some of the rules allow the user to perform the action, the `check` function will return `true`.

In some edge cases, a developer would want to create a special `Deny` rule, which means if a user does not pass a rule, no matter what, they will get `false` due to the `check` function.
For example, we would like to restrict access to a role `tmp-admin` only to boundaries of time, so even if the configured policy returns `true`, the `Deny` rule will block the access.

## Writing Custom Policy
Permit.io is based on the open-source policy engine, OPA, and Cedar (TBA more soon) to keep the policy configuration flexible.
Each engine has a Policy language to write policies, Rego, and Cedar (respectively). This article will show an example of writing custom Rego code to extend Permit.io policy configuration.
As the first step, you should follow the following guide to enable the GitOps feature that will let you write custom code.
If you enable the GitOps feature already, continue to the next step to write the custom deny rule.

## The `custom.rego` file
Permit.io policy repository structure consists two folders, `permit` and `custom`.
As it might sound from the name, the custom folder is where developers can write the custom Rego code, if you’d look there you’ll find a file named custom.rego with a sample policy script.
Rego is a logical language (same as Prolog/Datalog), and hence, it could look unnatural for developers who code in common languages, but our rule is quite simple and we will guide step by step.

Let’s take a look at the file to understand the initial structure of our custom rule:
In the first row, you can see the `package permit.custom` declaration. Using this declaration, we can use this custom Rego configuration in other places in our project.
We will use it later to import the custom code to Permit.io centralized policy configuration, so when you use the SDK to call the PDP, the engine will calculate this policy package.

Next, we will find the basic declaration for logical policy, the default value that is equal to false.
```
default allow := false
```
Basically, this is a deny rule, which means every time this policy is calculated, the value is false.
With the default configuration of Permit.io Rego code, custom policies are calculated in an or operator, which means that if other rule return true we will ignore the false values.
Of course, to handle the deny rule, we would like to change it, and we will get to it later.

## Custom Deny Rule
With the basic understanding of default decision as false, let’s model a decision tree that could revert the false value to true
Thinking logically about our rule, we would like our decision tree to look this way:
```
false
   - true if not rbac // since our dateboundaryy rule is 
   - true if not role `tmp-admin`
   - true if role `tmp-admin` and now is in the desired date boundaries
```
Let’s create our first state, allow if the decision is not based on RBAC.
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
Continue to the next state, the role checking, Let's import the relevant data from Permit.io’s RBAC package. Add the following import:
import permit.rbac
Together with the `rbac` package, we will also get the context data from the current policy evaluation, which means we can get the allowing roles from the decision.
Let’s continue our decision state with the following section:
```
else {
   not "tmp-admin" in rbac.allowing_roles
}
```
What this section checks is if `tmp-admin` role does not exist in the allowing roles array from the evaluation context.
To use the Rego `in` keyword, we need to import it, so also make sure you add an `import` statement at the top of the file (before importing any `permit` packages.
Now, we are left with the last step of this deny rule, allowing only if there is a date between date boundaries.
Of course, in your custom Rego, you can use any context of data (such as user/resource attributes) to set the boundaries. Here, we just use hard-coded strings to simplify it.
Let’s add the following code after the previous one:
```
else {
   time.now_ns() >= time.parse_rfc3339_ns("2023-01-01T00:00:00+02:00")
   time.now_ns() <= time.parse_rfc3339_ns("2024-01-01T00:00:00+02:00")
}
```
As you can imagine, we declare a rule that returns `true` only if the `now` date is in the 2023 boundaries.

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

## Test the custom policy
With Permit.io GitOps feature, pushing your changes to the remote repository will immediately affect your tenant with the branch content.
While the built-in Permit.io configuration has detailed Audit log decision output, for the custom Rego, the audit log returns only the result.
You can use the built-in print function in Rego to debug your created custom policy.
For example, if you add the following print in the first allow section, you’ll see all the allowing policies per evaluation in the PDP logs.
```
print(policies.__allow_sources)
```

## Enfore the deny ALL policy
As we mentioned before, the current Permit.io generated policies evaluate all the `allowing_source` in an `or` operator.
In our `deny all` example, we would like to calculate the particular `custom` package as an end argument to the total policy evaluation.
This means no matter what is the total evaluation result, the final result will depend on our custom rule result.

To do so, we need to tweak our desired deny rules to the `root.rego` file in the root folder (the file that centralized the policy evaluation).
In the `root.rego` file, you’ll find two allow blocks, one for Permit.io default and the other for the default `custom`
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
Permit.io custom rules are not limited to only one `custom.rego` file.
You can add as many files and folders as you want in the `custom` folder, and there are two options to add them to the custom rule calculation:
Use the `custom.rego` as an additional root file and centralize the custom package rules into it.
Import multiple `custom` packages in the `root.rego` file and add them as (or in) `allow` blocks.

## Disclaimer
Extending custom policies with Permit.io is an advanced task, and you should do it at your own risk.
If you have any questions regarding implementing policies without extending them with custom code, you can set a meeting with our engineering team that always happy to help in modeling policies :slightly_smiling_face: .
