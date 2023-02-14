import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //dark:bg-zinc-900
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100  transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
