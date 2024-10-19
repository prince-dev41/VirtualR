import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MouseFollowBackground from './components/MouseFollowBackground';

export const metadata = {
  title: "VirtualR",
  description: "Easily build your code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blackBg text-white overflow-x-hidden">
        <MouseFollowBackground />
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}