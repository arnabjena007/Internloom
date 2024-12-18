import { auth, signOut } from "@/auth";

const Settings = async () => {
    const session = await auth();

    const handleSignout = async () => {
        "use server"
        await signOut({redirectTo:"/"})
    }

    return (
        <>
            {JSON.stringify(session)}
            <form action={handleSignout}>
                <button
                    type="submit"
                    className="bg-red-600 text-white rounded-full px-6 py-2 font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Signout
                </button>
            </form>
        </>
    );
}

export default Settings;
