import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/modules/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Taqwa Software",
  description:
    "How Taqwa Software collects, uses, and protects your personal information when you visit our website or contact us.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Taqwa Software (“we”, “us”, or “our”) respects your privacy. This
          Privacy Policy explains what information we collect when you visit
          taqwasoftware.com (the “Website”) or contact us, how we use it, and
          the choices you have.
        </p>
        <p>
          By using the Website, you agree to the practices described in this
          policy. If you do not agree, please do not use the Website.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>
          <strong>Information you give us.</strong> When you contact us by email
          or WhatsApp, we receive the details you choose to share, such as:
        </p>
        <ul>
          <li>Your name, email address, and phone number</li>
          <li>Your company name and role</li>
          <li>Details about your project, goals, budget, and timeline</li>
          <li>Any files or other information you send us</li>
        </ul>
        <p>
          <strong>Information collected automatically.</strong> When you visit
          the Website, our servers and hosting providers may record technical
          data such as your IP address, browser type, device type, operating
          system, pages viewed, referring page, and the date and time of your
          visit.
        </p>
        <p>
          We do not knowingly collect sensitive personal information through the
          Website, and we ask that you do not send us any.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your enquiries and requests</li>
          <li>Prepare proposals and deliver the services you ask for</li>
          <li>Communicate with you about projects, updates, and support</li>
          <li>Understand how the Website is used and improve it</li>
          <li>Keep the Website secure and prevent misuse or fraud</li>
          <li>Meet our legal and regulatory obligations</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Cookies are small text files stored on your device. The Website may
          use cookies and similar technologies to make pages work properly and,
          where enabled, to understand how visitors use the Website.
        </p>
        <p>
          You can control or delete cookies through your browser settings.
          Disabling some cookies may affect how parts of the Website work.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and Links",
    content: (
      <>
        <p>
          The Website links to services we do not control, including WhatsApp,
          LinkedIn, GitHub, Instagram, X (Twitter), Google Play, and the Apple
          App Store. When you click those links or communicate through those
          services, their own terms and privacy policies apply.
        </p>
        <p>
          We also use trusted providers, such as hosting and analytics services,
          to run the Website. We are not responsible for the privacy practices
          of third parties, and we encourage you to read their policies.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    content: (
      <>
        <p>We only share personal information in these situations:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us operate the Website
            or deliver our services, and who must protect your information
          </li>
          <li>
            <strong>Legal reasons</strong>, when required by law or to protect
            our rights, safety, or property
          </li>
          <li>
            <strong>Business changes</strong>, such as a merger or sale of
            assets, where information may be transferred as part of the deal
          </li>
          <li>
            <strong>With your consent</strong>, or when you ask us to
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We keep personal information only for as long as we need it for the
          purposes in this policy, including answering your enquiries,
          delivering projects, and meeting legal, accounting, or reporting
          requirements. When we no longer need it, we delete or anonymize it.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <>
        <p>
          We use reasonable technical and organizational measures to protect
          your information from loss, misuse, and unauthorized access. However,
          no method of transmission over the internet or electronic storage is
          completely secure, so we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    content: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Ask what personal information we hold about you</li>
          <li>Ask us to correct information that is inaccurate</li>
          <li>Ask us to delete your information</li>
          <li>Object to or limit how we use your information</li>
          <li>Withdraw consent you have given us</li>
          <li>Opt out of marketing messages at any time</li>
        </ul>
        <p>
          To use any of these rights, email us at{" "}
          <a href="mailto:admin@taqwasoftware.com">admin@taqwasoftware.com</a>.
          We may need to confirm your identity before we act on a request.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          We are based in Bangladesh and serve clients around the world. Your
          information may be processed in countries other than your own,
          including where our service providers operate. When we do this, we
          take reasonable steps to keep your information protected.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    content: (
      <>
        <p>
          The Website is not directed at children under 13, and we do not
          knowingly collect their personal information. If you believe a child
          has given us personal information, contact us and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will change the “Last updated” date at the top of this page.
          Continuing to use the Website after a change means you accept the
          updated policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, contact us:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:admin@taqwasoftware.com">admin@taqwasoftware.com</a>
          </li>
          <li>Address: Innovation Tower, DIFC, Dhaka, Bangladesh</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      titleLead="Privacy"
      titleAccent="Policy"
      updated="October 9, 2026"
      intro="Your privacy matters to us. This policy explains what information we collect, why we collect it, and how we keep it safe."
      sections={sections}
      related={{ label: "Terms of Service", href: "/terms-of-service" }}
    />
  );
}
