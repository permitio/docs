const { Permit } = require("permitio");

const permit = new Permit({
  token: "<YOUR_API_KEY>",
});

const permitted = await permit.bulkCheck([
  { user: "anna@smith.com", action: "read", resource: "contract" },
  { user: "anna@smith.com", action: "create", resource: "document" },
  { user: "john@walker.com", action: "sign", resource: "contract" },
  { user: "jane@jarvis.com", action: "authorize", resource: "invoice" },
]);
