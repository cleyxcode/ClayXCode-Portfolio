import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata = {
  title: "Bredley Tuhuleruw – Full-Stack Developer",
  description:
    "Portfolio Bredley Tuhuleruw, Full-Stack Developer dari Maluku yang membangun web, mobile apps, game, machine learning, dan IoT.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
