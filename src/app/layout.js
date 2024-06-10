import "./globals.scss";

import FloatingMenu from "@/components/FloatingMenu/FloatingMenu";
import Navbar from "@/components/Navbar/Navbar";

import AOSProvider from "../utils/AOSProvider";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { CursorProvider } from "@/utils/CursorProvider";
import Cursor from "@/components/Cursor/Cursor";

export const metadata = {
  title: "Rishi Mungia",
  description: "Game Developer, Frontend Developer and UI/UX Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <AOSProvider>
          <CursorProvider>
            <Navbar />
            <FloatingMenu />
            <Cursor />
            {children}
          </CursorProvider>
        </AOSProvider>
      </ThemeProvider>
    </html>
  );
}
