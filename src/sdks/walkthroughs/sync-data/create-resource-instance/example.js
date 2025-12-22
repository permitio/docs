await permit.api.resource_instances.create({
  key: "react",
  resource: "repository",
  tenant: "default",
  attributes: {
    private: "false",
    owner: "Company C",
  },
});
