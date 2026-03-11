import "./globals.css";
import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Iron Peak Fitness | Personal Training & Group Classes in Austin, TX",
  description:
    "Iron Peak Fitness in Austin, Texas offers personal training and group classes—HIIT, yoga, spinning, and boxing. View the class schedule, meet trainers, explore membership pricing, and claim a free trial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="bg-background text-foreground font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
