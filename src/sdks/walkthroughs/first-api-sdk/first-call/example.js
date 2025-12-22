await permit.api.roles.create({
  key: "manager",
  name: "Manager",
  permissions: ["account:view", "account:delete"],
});
