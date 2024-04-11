import { Inter , Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./comps/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Brain`Storm",
  description: "A video chat app with random people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
