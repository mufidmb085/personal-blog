import { Fira_Code as FontMono, Inter as FontSans, Playfair_Display_SC} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
})
