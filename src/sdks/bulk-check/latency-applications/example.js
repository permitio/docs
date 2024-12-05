const permitted = await permit.bulkCheck([
  { user, action: "create", resource: "document" },
  { user, action: "edit", resource: "profile" },
]);
