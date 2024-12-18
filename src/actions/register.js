"use server";
import bcrypt from "bcryptjs";
import { db } from "@/src/lib/db";
import * as z from "zod";
import { RegisterSchema } from "../schema";
import { getUserByEmail } from "../lib/user";

export const registerUser = async (values) => {
  // Validate the input using Zod schema
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  // Destructure validated values
  const { email, password, firstname, lastname } = validatedFields.data;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if the user already exists
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" }; // Email is already registered
  }

  // Create a new user
  try {
    const newUser = await db.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      },
    });
    return { success: "User created!" }; // Return success message after successful registration
  } catch (error) {
    return { error: "An error occurred while creating the user." }; // Handle unexpected errors
  }
};
