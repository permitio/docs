const tenant = await permit.tenants.create({
  key: "marketing", // The unique key for the tenant
  name: "Marketing", // The display name for the tenant
});
