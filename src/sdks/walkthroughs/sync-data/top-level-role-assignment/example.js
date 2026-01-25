await permit.api.roleAssignments.assign({
  role: "Marketer",
  tenant: "default",
  resource_instance: `Dashboard:${dashboard.id}`,
  user: "auth0|elon",
});
