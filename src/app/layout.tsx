import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LeadFormProvider } from "@/contexts/LeadFormContext";
import { LeadFormModal } from "@/components/LeadFormModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalecompany.com.br"),
  title: "Marketing Jurídico & Captação para Advogados | Scale Company",
  description:
    "A principal agência de marketing jurídico do Brasil. Contrate especialistas em Google Ads e Meta Ads. Tráfego pago focado em resultados reais e alto padrão.",
  authors: [{ name: "Scale Company" }],
  openGraph: {
    title: "Marketing Jurídico & Captação para Advogados | Scale Company",
    description:
      "A principal agência de marketing jurídico do Brasil. Contrate especialistas em Google Ads e Meta Ads para seu escritório.",
    url: "https://www.scalecompany.com.br/",
    type: "website",
    locale: "pt_BR",
    siteName: "Scale Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Jurídico & Captação para Advogados",
    description:
      "A principal agência de marketing jurídico do Brasil. Tráfego pago focado em honorários.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Scale Company",
              "url": "https://www.scalecompany.com.br/",
              "logo": "https://www.scalecompany.com.br/images/scale-logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contato@scalecompany.com.br",
                "contactType": "Atendimento"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}>
        <LeadFormProvider>
          {children}
          <LeadFormModal />
        </LeadFormProvider>
      </body>
    </html>
  );
}
