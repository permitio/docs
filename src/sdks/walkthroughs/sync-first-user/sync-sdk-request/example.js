async function syncUser() {
  const userData = {
    key: "user|123456789",
    email: "john@smith.com",
    first_name: "John",
    last_name: "Smith",
  };

  try {
    const result = await permit.users.sync(userData);
    console.log("User synced successfully:", result);
  } catch (error) {
    console.error("Error syncing user:", error.message);
  }
}
