import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-4/5 my-[80px] mx-auto border-2 border-black">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
