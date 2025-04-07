import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  weight: ["400", "700"], // Specify the weights you want to use
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EEB Web Dev",
  description: "A platform for web development services.",
  keywords: "web development, next.js, react, tailwind, php, typescript,",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body
        className={`${roboto.variable} antialiased m-0 overflow-x-hidden`}
        style={{ backgroundImage: 'url(/pexels-felixmittermeier-956999.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} 
      >
  
        {children}
      </body>
    </html>
  );
}
