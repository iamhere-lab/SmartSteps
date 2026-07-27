import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SmartSteps Training Academy Hyderabad | Finance Operations Courses",
    template: "%s | SmartSteps",
  },
  description:
    "Job-oriented finance training since 2008. 8,000+ trained, 6,000+ placed, 323 batches. Programs for freshers and working professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
