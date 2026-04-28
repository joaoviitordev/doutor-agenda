import type { Metadata } from "next";
import { ReactQueryProvider } from "@/providers/react-query";
import { Manrope, Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toaster } from "sonner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doutor Agenda | Excelência em Gestão",
  description: "A agenda inteligente desenhada para a rotina da saúde. Automatize marcações, controle pacientes e organize sua agenda médica com tecnologia de ponta. Simplifique a gestão, maximize seu tempo.",
  keywords: ["agenda médica", "gestão de pacientes", "agendamento online", "software médico", "controle financeiro", "saúde", "consultório", "médico", "agenda inteligente", "doutor agenda"],
  icons: {
    icon: "/myfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <ReactQueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ReactQueryProvider>
        <Toaster position="bottom-center" richColors theme="light" />
      </body>
    </html>
  );
}
