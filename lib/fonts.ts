import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/GT-Haptik-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/GT-Haptik-Light-Oblique.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/GT-Haptik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GT-Haptik-Regular-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/GT-Haptik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/GT-Haptik-Bold-Oblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
