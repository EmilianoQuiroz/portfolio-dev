import { Outfit, Ovo} from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfitFont = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"], weight: ["400"],
});
export const metadata = {
  title: "Santiago Quiroz Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
