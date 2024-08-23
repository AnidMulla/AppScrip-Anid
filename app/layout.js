import { Footer, Header, Navbar } from "@/components/home";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Appscrip task anid",
  description:
    "A feature-rich e-commerce platform delivering a diverse selection of products with a smooth and intuitive shopping experience, developed as part of the Appscrip assignment by Anid.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ textAlign: "center" }}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
