import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
  title: "MTM Tech | Full-Cycle Web & Cloud Engineering Studio",
  description: "MTM Tech engineers high-performance web applications, custom SaaS platforms, and clean cloud systems for companies worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${fontRoboto.variable} ${fontBornomala.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0B0E17] text-white selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
