import { AuthForm } from "@/components/auth-form";
import { DEFAULT_URL, OG_IMAGE_URL } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: "Boonda - Sign In",
  description: "Sign In to your Boonda account to unlock higher limits.",
  icons: {
    icon: [
      {
        url: "/logo-white.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-black.ico",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "boonda.app",
    title: "Boonda - Sign In",
    description: "Sign In to your Boonda account to unlock higher limits.",
    images: [
      {
        url: OG_IMAGE_URL,
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "Boonda - Sign In",
    description: "Sign In to your Boonda account to unlock higher limits.",
    images: [
      {
        url: OG_IMAGE_URL,
      },
    ],
  },
};

export default async function SignIn() {
  return (
    <div className="flex w-full justify-center items-center flex-1">
      <AuthForm intent="desktop-sign-in" />
    </div>
  );
}
