import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spend Analyzer — Know Where Your Money Goes",
  description:
    "Spend Analyzer is a free Chrome extension that reads your order history from e-commerce and delivery platforms and gives you a clear picture of your spending.",
};

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Know Where Your Money Goes</h1>
        <p>
          Spend Analyzer is a free Chrome extension that reads your order
          history from supported platforms and turns it into clear spending
          insights — right in your browser.
        </p>
        <Link
          href="/support"
          className="btn"
        >
          Get Support
        </Link>
      </section>

      <div className="features">
        <div className="feature-card">
          <h3>Spending Summaries</h3>
          <p>
            See totals, averages, and trends across your order history at a
            glance.
          </p>
        </div>
        <div className="feature-card">
          <h3>Privacy First</h3>
          <p>
            All processing happens locally in your browser. Your data never
            leaves your device.
          </p>
        </div>
        <div className="feature-card">
          <h3>Multi-Platform</h3>
          <p>
            Works with popular e-commerce and food delivery platforms you
            already use.
          </p>
        </div>
        <div className="feature-card">
          <h3>No Account Needed</h3>
          <p>
            Install and start analyzing immediately. No sign-up, no backend,
            no data collection.
          </p>
        </div>
      </div>
    </div>
  );
}
