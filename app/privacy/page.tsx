import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LSection, LSub, LP, LUL } from "@/components/legal/Legal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Raya Elite Home & Office Cleaning Services LLC",
  description:
    "Raya Elite's privacy policy explains how we collect, use, and protect your personal information when you visit our website or book our cleaning services in Maryland and Washington DC.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="June 2026"
      effective="July 22, 2026"
      intro={
        <>
          <LP>
            Raya Elite Home &amp; Office Cleaning Services LLC (&quot;Raya Elite,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) is committed to protecting your personal information and
            being transparent about how we use it. This Privacy Policy explains what information we
            collect when you visit rayaelitecleaning.com, request a quote, book a service, or
            communicate with our team — and exactly what we do with it.
          </LP>
          <LP>
            Please read this policy carefully. By using our website or submitting any form on it, you
            agree to the practices described here. If you have questions at any point, you can reach us
            directly at {SITE.email}.
          </LP>
        </>
      }
    >
      <LSection title="1. Information We Collect">
        <LSub>1.1 Information You Provide Directly</LSub>
        <LP>
          When you request a quote, book a cleaning, contact us, or sign up for any communication from
          us, we may collect:
        </LP>
        <LUL
          items={[
            "Full name",
            "Email address",
            "Phone number",
            "Physical address or service location",
            "Details about your home or office (size, type, number of rooms)",
            "Cleaning preferences, scheduling preferences, and special instructions",
            "Any additional notes you include in a form or message",
          ]}
        />
        <LSub>1.2 Information Collected Automatically</LSub>
        <LP>
          When you visit our website, certain technical information is collected automatically through
          cookies and analytics tools, including:
        </LP>
        <LUL
          items={[
            "IP address and approximate geographic location",
            "Browser type and version",
            "Device type (desktop, tablet, mobile)",
            "Pages visited and time spent on each page",
            "Referring website or search query that brought you to our site",
            "Date and time of your visit",
          ]}
        />
        <LP>
          This information does not identify you personally. It helps us understand how our site is
          being used so we can improve it.
        </LP>
        <LSub>1.3 Information From Third-Party Tools</LSub>
        <LP>
          We use trusted third-party services that may collect additional data in accordance with
          their own privacy policies. Each of these services operates under its own privacy policy. We
          encourage you to review them directly.
        </LP>
      </LSection>

      <LSection title="2. How We Use Your Information">
        <LP>We use the information we collect for the following purposes:</LP>
        <LUL
          items={[
            "To deliver our services — processing your booking, confirming your appointment, dispatching our cleaning team, and following up after a job.",
            "To respond to inquiries — replying to quote requests, questions, and messages submitted through our contact form or live chat.",
            "To send service communications — appointment confirmations, reminders, scheduling changes, and post-service follow-ups. These are not promotional emails; they are directly related to a service you have booked or requested.",
            "To improve our website and service — analyzing how visitors use our site helps us identify what's working and what can be improved. No personal data is shared in this process.",
            "To run advertising campaigns — with your implied consent via continued website use, we may use anonymized data through Google and Facebook advertising tools. You are never personally identified in these campaigns.",
            "To comply with legal obligations — we retain certain records as required by Maryland state law and applicable federal regulations, including records related to contracts, insurance, and employment.",
          ]}
        />
      </LSection>

      <LSection title="3. How We Share Your Information">
        <LP>
          We do not sell, rent, or trade your personal information to any third party. Full stop. We
          share your information only in the following limited circumstances:
        </LP>
        <LUL
          items={[
            "With our service delivery team — your name, address, and service details are shared with the Raya Elite cleaning staff assigned to your job. This is necessary to perform the service you've booked.",
            "With trusted technology partners — the third-party tools mentioned in Section 1.3 receive the minimum information necessary to perform their functions (e.g., your email address for booking confirmations). All partners are contractually required to handle your data responsibly.",
            "When required by law — if we are legally required to disclose information by court order, government request, or to protect the rights and safety of others, we will comply with applicable law and notify you where permitted to do so.",
          ]}
        />
      </LSection>

      <LSection title="4. Cookies & Tracking Technologies">
        <LP>
          Our website uses cookies — small text files stored on your device — to improve your
          experience and help us understand how our site is used.
        </LP>
      </LSection>

      <LSection title="5. Data Retention">
        <LP>
          We retain your personal information for as long as necessary to fulfill the purposes outlined
          in this policy, including:
        </LP>
        <LUL
          items={[
            "Active client records — retained for the duration of the client relationship plus three years",
            "Quote and inquiry records — retained for 12 months from the date of submission",
            "Booking and transaction records — retained for seven years in accordance with standard business record-keeping requirements",
            "Analytics and usage data — retained for 26 months (Google Analytics default)",
          ]}
        />
        <LP>When data is no longer needed, we delete or anonymize it securely.</LP>
      </LSection>

      <LSection title="6. Your Rights">
        <LP>You have the right to:</LP>
        <LUL
          items={[
            "Access your data — request a copy of the personal information we hold about you.",
            "Correct your data — ask us to update or correct any inaccurate information.",
            "Delete your data — request that we delete your personal information, subject to any legal retention obligations.",
            "Opt out of marketing — unsubscribe from any promotional communications at any time using the unsubscribe link in any email or by contacting us directly.",
            "Withdraw consent — where we process your data based on consent, you have the right to withdraw that consent at any time without affecting the lawfulness of prior processing.",
          ]}
        />
        <LP>
          To exercise any of these rights, contact us at {SITE.email}. We will respond within 30 days.
        </LP>
      </LSection>

      <LSection title="7. Children's Privacy">
        <LP>
          Our website is not directed at children under the age of 13, and we do not knowingly collect
          personal information from minors. If you believe a child has submitted personal information
          through our site, please contact us immediately and we will delete it promptly.
        </LP>
      </LSection>

      <LSection title="8. External Links">
        <LP>
          Our website may contain links to third-party websites — including our social media profiles,
          review platforms, and booking tools. Once you leave rayaelitecleaning.com, this Privacy
          Policy no longer applies. We encourage you to review the privacy policies of any external
          sites you visit.
        </LP>
      </LSection>

      <LSection title="9. Security">
        <LP>
          We take reasonable technical and organizational measures to protect your personal information
          from unauthorized access, loss, misuse, or disclosure. These measures include:
        </LP>
        <LUL
          items={[
            "Secure HTTPS encryption across all pages of our website",
            "Access controls limiting which team members can view client data",
            "Regular security reviews of our technology stack and third-party integrations",
          ]}
        />
        <LP>
          No method of electronic transmission or storage is 100% secure. While we do everything
          reasonable to protect your data, we cannot guarantee absolute security.
        </LP>
      </LSection>

      <LSection title="10. Changes to This Policy">
        <LP>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, or legal requirements. When we do, we will update the &quot;Last Updated&quot;
          date at the top of this page. For significant changes, we will notify active clients by
          email. Your continued use of our website after any update constitutes your acceptance of the
          revised policy.
        </LP>
      </LSection>

      <LSection title="11. Contact Us">
        <LP>
          Questions, requests, or concerns about this Privacy Policy should be directed to the contact
          details on our{" "}
          <Link href="/contact" className="font-bold text-clay underline underline-offset-2">
            contact page
          </Link>
          .
        </LP>
      </LSection>
    </LegalShell>
  );
}
