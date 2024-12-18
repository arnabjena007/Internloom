"use server";
import * as z from "zod";
import { LoginSchema } from "@/src/schema/index";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/src/lib/user";

export const login = async (values) => {
  // Validate the fields using the schema
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  // Destructure the validated data
  const { email, password } = validatedFields.data;

  // Check if the user exists in the database
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "User does not exist" };
  }

  try {
    // Attempt to sign in
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return { error: "Invalid credentials" };
        default:
          console.log("The error is: ", error.type);
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  return { success: "Email sent" };
};
