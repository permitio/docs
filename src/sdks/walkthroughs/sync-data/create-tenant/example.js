await permit.api.tenants.create({
  key: "stripeinc",
  name: "Stripe Inc",
  attributes: {
    allowed_locations: ["US", "CA"],
  },
});
