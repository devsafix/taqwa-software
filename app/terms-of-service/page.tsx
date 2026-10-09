import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/modules/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Taqwa Software",
  description:
    "The terms that apply when you use the Taqwa Software website and work with us on web, mobile, AI, and software projects.",
  alternates: { canonical: "/terms-of-service" },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service (“Terms”) apply to your use of
          taqwasoftware.com (the “Website”) operated by Taqwa Software (“we”,
          “us”, or “our”). By accessing or using the Website, you agree to these
          Terms and to our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>
          If you do not agree to these Terms, please do not use the Website.
        </p>
      </>
    ),
  },
  {
    id: "our-services",
    title: "About Our Services",
    content: (
      <>
        <p>
          Taqwa Software provides web and mobile application development, UX/UI
          design, Agentic AI development, Odoo ERP and CRM solutions, CMS
          development, and digital strategy and consulting.
        </p>
        <p>
          The Website describes our work and helps you get in touch. Any project
          we do for you is governed by a separate written proposal, statement of
          work, or agreement. If that document conflicts with these Terms, the
          project document applies to that project.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Use of the Website",
    content: (
      <>
        <p>
          You agree to use the Website only for lawful purposes. You must not:
        </p>
        <ul>
          <li>Try to gain unauthorized access to the Website or its systems</li>
          <li>Interfere with or disrupt the Website or its servers</li>
          <li>Upload or send viruses, malware, or other harmful code</li>
          <li>
            Copy, scrape, or collect content in a way that harms the Website
          </li>
          <li>Pretend to be another person or organization</li>
          <li>Use the Website to break any law or infringe anyone’s rights</li>
        </ul>
      </>
    ),
  },
  {
    id: "project-engagements",
    title: "Project Engagements",
    content: (
      <>
        <p>
          Scope, deliverables, timelines, fees, and payment terms for each
          project are set out in the proposal or agreement we agree with you.
          Timelines we share are estimates and depend on prompt feedback,
          content, and approvals from you.
        </p>
        <p>
          If the scope changes after a project has started, we may need to
          adjust the cost and timeline, and we will agree this with you before
          the extra work begins.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          The Website, including its text, design, graphics, logo, and code,
          belongs to Taqwa Software or its licensors and is protected by
          intellectual property laws. You may not copy, reproduce, or use it
          without our written permission, except for personal, non-commercial
          viewing.
        </p>
        <p>
          For client projects, ownership of the final deliverables is set out in
          the project agreement and normally passes to you once all fees are
          paid in full. We keep our rights in pre-existing tools, libraries,
          frameworks, and know-how, and in any third-party or open-source
          components, which remain subject to their own licenses.
        </p>
      </>
    ),
  },
  {
    id: "portfolio",
    title: "Portfolio and Case Studies",
    content: (
      <>
        <p>
          Unless a project agreement says otherwise, we may show completed work
          in our portfolio, including names, screenshots, and links to published
          apps. Names, logos, and trademarks shown belong to their respective
          owners, and their appearance on the Website does not imply
          endorsement.
        </p>
        <p>
          If you are a client and prefer that we do not show your project, email
          us and we will remove it.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links and Services",
    content: (
      <>
        <p>
          The Website contains links to third-party websites and services, such
          as app stores and social networks. We do not control them and are not
          responsible for their content, availability, or policies. Using them
          is at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          The Website and its content are provided “as is” and “as available”
          without warranties of any kind, either express or implied. We do not
          guarantee that the Website will be uninterrupted, error-free, or
          always up to date. Information on the Website is general and is not
          professional advice.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent allowed by law, Taqwa Software and its team are
          not liable for any indirect, incidental, special, or consequential
          damages, or for any loss of profits, data, or business, arising from
          your use of the Website.
        </p>
        <p>
          Liability for services we deliver to you is governed by the agreement
          for that project.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to defend and hold harmless Taqwa Software from claims,
          losses, and expenses, including reasonable legal fees, that arise from
          your misuse of the Website or your breach of these Terms.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Suspension and Termination",
    content: (
      <>
        <p>
          We may suspend or restrict your access to the Website at any time,
          without notice, if we believe you have broken these Terms or are
          misusing the Website.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms from time to time. When we do, we will
          change the “Last updated” date at the top of this page. Continuing to
          use the Website after a change means you accept the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms are governed by the laws of Bangladesh. Any dispute
          arising from them will be handled by the courts of Dhaka, Bangladesh,
          unless a project agreement says otherwise.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions about these Terms, contact us:</p>
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

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      titleLead="Terms of"
      titleAccent="Service"
      updated="October 9, 2026"
      intro="Please read these terms carefully. They explain the rules for using our website and how we work with clients."
      sections={sections}
      related={{ label: "Privacy Policy", href: "/privacy-policy" }}
    />
  );
}
