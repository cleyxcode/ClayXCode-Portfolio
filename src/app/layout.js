import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import StarsCanvas from "@/components/Star";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          <StarsCanvas />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
