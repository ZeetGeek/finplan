import { Inter } from "next/font/google";

// Define reusable components
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

// import global styles
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
     title: "Finplan : Navigating Your Financial Future! 💼💸",
     description:
          "Embark on a financial adventure with Finplan, where every coin counts towards crafting your prosperous tomorrow! 💼💰",
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <body className={inter.className}>
                    <Header />
                    {children}
                    <Footer />
               </body>
          </html>
     );
}
