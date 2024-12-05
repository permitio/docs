const { key, tier } = getUser(token);
const permissions = await permit.bulk([
  // Checking for relationship to the particular document
  { user: key, action: "edit", resource: `document:${document.id}` },
  // Checking for the user's tier by user attributes
  { user: { key, attributes: { tier } }, action: "edit", resource: `document:${document.id}` },
]);
const permitted = permissions[0] || permissions[1];
