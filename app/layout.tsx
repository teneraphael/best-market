import type { Metadata } from "next";
import { Inter} from "next/font/google";
import { Roboto_Mono} from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import ClientProviders from '@/components/shared/client-providers'

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

    
    export const metadata: Metadata = {
      title: {
        template: `%s | ${APP_NAME}`,
        default: `${APP_NAME}. ${APP_SLOGAN}`,
      },
      description: APP_DESCRIPTION,
    }

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
         <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
