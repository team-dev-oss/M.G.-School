
import type { Metadata } from "next";
import { ChakraProvider} from "@chakra-ui/react"
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import Header from "../components/Header"
{/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
import Footer from "../components/Footer"
import Header from "@/components/Header";
// import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M.G Public School",
  description: "M.G Public School",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // if(pathname != "/dashboard" )
  return (
    
    <html lang="en">
      <body
        className={cn(" h-full antialiased font-sans", inter.className)}
      >
        <ChakraProvider>
        <Header/>
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer/>
        </ChakraProvider>
      </body>
    </html>
    
  )
//   else {
//     return (
//       <html lang="en">
//       <body
//         className={cn("relative h-full antialiased font-sans", inter.className)}
//       >
        
//         <main className="relative flex flex-col min-h-screen">
//           <div className="flex-grow flex-1">{children}</div>
//         </main>
//       </body>
//     </html>
//     )
// };
}
