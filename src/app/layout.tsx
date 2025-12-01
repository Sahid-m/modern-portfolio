import { ThemeProvider } from "@/components/theme-provider";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahid Munjavar | Full-Stack Developer & Blockchain Engineer Portfolio",
  description:
    "Portfolio of Sahid Munjavar — Full-Stack Developer and Blockchain Engineer specializing in Web3, smart contracts, Next.js, and scalable application development. Explore projects, skills, and contact information.",
  keywords: [
    "Sahid Munjavar",
    "Sahid portfolio",
    "full stack developer",
    "blockchain developer",
    "web3 engineer",
    "smart contract developer",
    "next.js portfolio",
    "react developer",
    "ethereum developer",
    "software engineer",
    "dev portfolio"
  ],
  authors: [{ name: "Sahid Munjavar" }],
  creator: "Sahid Munjavar",
  publisher: "Sahid Munjavar",
  metadataBase: new URL("https://sahid.cloud"),

  openGraph: {
    title: "Sahid Munjavar | Full-Stack & Web3 Developer",
    description:
      "Explore the developer portfolio of Sahid Munjavar — Full-Stack & Blockchain Engineer building scalable apps and smart contracts.",
    url: "https://sahid.cloud",
    siteName: "Sahid Munjavar Portfolio",
    images: [
      {
        url: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAmAkQaJ7SOD975sUMJNfEXktmc4K0eabALFn6",
        width: 1200,
        height: 630,
        alt: "Sahid Munjavar Portfolio Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sahid Munjavar | Full-Stack & Blockchain Developer",
    description:
      "Explore the portfolio of Sahid Munjavar — Full-Stack & Web3 Developer specializing in smart contracts and modern web apps.",
    images: ["https://55es74p0qv.ufs.sh/f/DLSrgoPikScAmAkQaJ7SOD975sUMJNfEXktmc4K0eabALFn6"],
    creator: "@MunjavarSa14054",
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"

          disableTransitionOnChange
        >
          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
