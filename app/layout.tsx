import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spend Analyzer",
    template: "%s | Spend Analyzer",
  },
  description:
    "Spend Analyzer is a Chrome extension that helps you analyze and summarize your spending history from supported e-commerce and delivery platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              Spend Analyzer
            </Link>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Spend Analyzer &middot;{" "}
            <Link href="/privacy">Privacy Policy</Link> &middot;{" "}
            <Link href="/support">Support</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
