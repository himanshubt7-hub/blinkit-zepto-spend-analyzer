import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Spend Analyzer Chrome extension. Learn how your data is handled.",
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <div className="content">
        <h1>Privacy Policy</h1>
        <p className="meta">Last Updated: June 2026</p>

        <section>
          <p>
            Spend Analyzer processes user data locally within the browser to
            provide spending analysis and summaries.
          </p>
        </section>

        <section>
          <h2>Data Collection</h2>
          <ul>
            <li>
              The extension may access order history and purchase information
              from supported websites to calculate spending statistics.
            </li>
            <li>
              Data is processed only for the functionality of the extension.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <ul>
            <li>No user data is sold to third parties.</li>
            <li>
              No user data is transferred for advertising or marketing purposes.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Storage</h2>
          <ul>
            <li>
              User preferences and extension settings may be stored locally
              using Chrome Storage.
            </li>
          </ul>
        </section>

        <section>
          <h2>Security</h2>
          <ul>
            <li>
              The extension does not collect passwords, authentication
              credentials, or payment card information.
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a href="mailto:himanshubt7@gmail.com">himanshubt7@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
