const user = await permit.tenants.assignUser({
  key: "user|123456789",
  email: "john@smith.com",
  first_name: "John",
  last_name: "Smith",
  role_assignments: [
    {
      role: "Manager",
      tenant: "Marketing",
    },
  ],
});
