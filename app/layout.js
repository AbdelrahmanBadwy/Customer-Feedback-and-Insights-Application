import "./globals.css";
import AuthProvider from "./components/AuthProvider/AuthProvider";
export const metadata = {
  title: "Feedback System",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
