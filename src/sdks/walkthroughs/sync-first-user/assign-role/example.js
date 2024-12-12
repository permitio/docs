async function assignRole() {
  const userId = "your_user_id";
  const roleData = {
    role: "admin",
    tenant: "default",
  };

  try {
    const result = await permit.roles.assign(userId, roleData.role, roleData.tenant);
    console.log("Role assigned successfully:", result);
  } catch (error) {
    console.error("Error assigning role:", error.message);
  }
}
