const permit = new Permit({
  token: "[YOUR_API_KEY]",

  // in production, you might need to change this url to fit your deployment
  pdp: "https://cloudpdp.api.permit.io",

  // The SDK returns false if you get a timeout / network error
  // if you want it to throw an error instead, and let you handle this, uncomment this:
  // throwOnError: true,
});
