const { Permit } = require("permitio");

const permit = new Permit({ token: "<YOUR_API_KEY>" });
await permit.bulkCheck([
  { user: "john@doe.com", action: "read", resource: "document" },
  { user: "jane@doe.com", action: "create", resource: "document" },
]);
