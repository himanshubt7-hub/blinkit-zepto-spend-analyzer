import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Spend Analyzer. Report bugs, request features, or ask questions.",
};

export default function SupportPage() {
  return (
    <div className="page">
      <div className="content">
        <h1>Spend Analyzer Support</h1>
        <p className="meta">Chrome Extension Support</p>

        <section>
          <p>
            Spend Analyzer is a Chrome extension that helps users analyze and
            summarize their spending history from supported e-commerce and
            delivery platforms.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            For support, bug reports, or feature requests, please reach out by
            email:
          </p>
          <p>
            <a href="mailto:himanshubt7@gmail.com">himanshubt7@gmail.com</a>
          </p>
        </section>

        <section>
          <h2>What to Include</h2>
          <ul>
            <li>A description of the issue or request</li>
            <li>The platform or website where the issue occurred</li>
            <li>Your Chrome version and operating system</li>
            <li>Any error messages you see (screenshots welcome)</li>
          </ul>
        </section>

        <section>
          <h2>Response Time</h2>
          <p>
            We aim to respond to all support requests within a few business
            days.
          </p>
        </section>
      </div>
    </div>
  );
}
