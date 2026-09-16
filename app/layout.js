import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "THE LISTEN MODEL™",
    template: "%s | THE LISTEN MODEL™"
  },
  description:
    "THE LISTEN MODEL™ is an education and training framework for more intentional listening, understanding, communication, leadership, and action."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
