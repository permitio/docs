await permit.api.relationship_tuples.create({
  subject: "organization:permitio",
  relation: "owner",
  object: "repo:test",
  tenant: "public",
});
