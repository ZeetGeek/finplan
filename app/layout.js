import { Poppins } from "next/font/google";

// Define reusable components
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

// import global styles
import "@/styles/globals.scss";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
});

export const metadata = {
    title: "Finplan : Navigating Your Financial Future! 💼💸",
    description:
        "Embark on a financial adventure with Finplan, where every coin counts towards crafting your prosperous tomorrow! 💼💰",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
