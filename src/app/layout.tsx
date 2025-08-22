import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "M8Chat - AI Chatbot",
  description: "M8Chat is an AI chatbot that can help you with your questions and tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
