import { db } from "./db";

// Utility function to fetch user dynamically by a field
async function getUserByField(field, value) {
  try {
    const user = await db.user.findUnique({
      where: { [field]: value },
    });
    return user;
  } catch (error) {
    console.error(`Error fetching user by ${field}:`, error);
    return null;
  }
}

// Fetch user by email
export async function getUserByEmail(email) {
  return getUserByField("email", email);
}

// Fetch user by ID
export async function getUserById(id) {
  return getUserByField("id", id);
}
