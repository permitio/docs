const resources = getResources();
const permitted = await permit.bulkCheck(
  resources.map((resource) => ({ user, action: "read", resource }))
);
const permittedResources = resources.filter((resource, index) => permitted[index]);
