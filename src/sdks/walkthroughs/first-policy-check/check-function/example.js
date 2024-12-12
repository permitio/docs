const permitted = await permit.check("john@permit.io", "read", "document");

if (permitted) {
  console.log("John is PERMITTED to read a document");
} else {
  console.log("John is NOT PERMITTED to read a document");
}
