import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "@/src/schema/index";
import { getUserByEmail } from "@/src/lib/user";
import bcrypt from "bcryptjs";

// Export the NextAuth configuration object
export default {
    providers: [
        CredentialsProvider({
            name: "Credentials", // Optional: Name for the provider
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password", placeholder: "Your password" },
            },
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    // Fetch the user by email
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) {
                        return null;
                    }

                    // Compare the provided password with the stored hashed password
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (passwordMatch) {
                        return user; // Return the user object if password matches
                    }
                }

                return null; // Return null if validation or authentication fails
            },
        }),
    ],
};
