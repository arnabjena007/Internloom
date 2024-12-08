import { Inter } from "next/font/google";
import "../styles/globals.css"
import Header from "../components/Header";
import { AuthProvider } from "@/src/lib/AuthContext" // Import AuthProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InternLoom",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider> {/* Wrap the content inside AuthProvider */}
          <div>
            <Header />
          </div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
