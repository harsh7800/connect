import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connect",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/logo.png",
            socialButtonsVariant: "iconButton",
            socialButtonsPlacement: "top",
          },
          variables: {
            colorText: "white",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252a41",
            colorInputText: "white",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />{" "}
        </body>
      </ClerkProvider>
    </html>
  );
}
