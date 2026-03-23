import { Roboto } from "next/font/google";

export const robotoFont = Roboto({
   weight: ["300", "400", "500", "700", "900"],
   subsets: ["latin"],
   display: "swap",
   variable: "--font-roboto",
});