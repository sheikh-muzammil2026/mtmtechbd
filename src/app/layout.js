import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import CursorTrail from "@/components/CursorTrail";

const fontRoboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const fontBornomala = localFont({
  src: [
    {
      path: "../../public/fonts/Bornomala-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bornomala-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bornomala",
  display: "swap",
});

export const metadata = {
  title: "MTM Tech BD | Educational Management Systems, School & Madrasah ERP",
  description:
    "Comprehensive Educational Management Systems (ERP), dynamic institutional websites, tuition fee billing, exam marksheets, and guardian SMS alerts for Schools, Colleges, Madrasahs, and Online Academies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${fontRoboto.variable} ${fontBornomala.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--bg-primary)] text-slate-800 selection:bg-sky-500/20 selection:text-sky-700">
        <LanguageProvider>
          <CursorTrail />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
