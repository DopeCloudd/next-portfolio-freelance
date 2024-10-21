import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin LEROUGE · Développeur web Freelance sur Montpellier",
  description:
    "Développeur web freelance à Montpellier, spécialisé en création de sites internet modernes et performants. J'accompagne les entreprises et entrepreneurs dans la réalisation de leurs projets web, de la conception à la mise en ligne. Expert en technologies comme React.js, Next.js, et Symfony, je crée des solutions sur mesure, optimisées pour le SEO et adaptées à vos besoins. Contactez-moi pour transformer vos idées en un site web professionnel et responsive.",
  icons: {
    icon: "/pp_icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://valentin-lerouge.fr",
    images: [
      {
        url: "/pp_og.png",
        width: 1200,
        height: 630,
        alt: "Valentin LEROUGE",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn(inter.className, "h-full")}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
