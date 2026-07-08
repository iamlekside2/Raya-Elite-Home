import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { LegalShell, LSection, LSub, LP, LUL } from "@/components/legal/Legal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions | Raya Elite Home & Office Cleaning Services LLC",
  description:
    "Read Raya Elite's terms and conditions governing the use of our website and cleaning services in Maryland and Washington DC. Clear, fair, and straightforward.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      updated="June 2026"
      effective="July 22, 2026"
      intro={
        <>
          <LP>
            These Terms and Conditions (&quot;Terms&quot;) govern your use of the Raya Elite Home &amp;
            Office Cleaning Services LLC website at rayaelitehomesandofficescleaningservices.com and your engagement with our
            cleaning services. By accessing our website or booking any service with us, you agree to be
            bound by these Terms.
          </LP>
          <LP>
            Please read them carefully. If any part of these Terms is unclear or you have questions,
            contact us at {SITE.email} before booking.
          </LP>
        </>
      }
    >
      <LSection title="1. Who We Are">
        <LP>
          Raya Elite Home &amp; Office Cleaning Services LLC is a cleaning company registered in the
          state of Maryland, providing residential and commercial cleaning services across the Maryland
          and Washington DC metropolitan area.
        </LP>
        <LUL
          items={[
            "Business Name: Raya Elite Home & Office Cleaning Services LLC",
            "Operating State: Maryland, USA",
            "Website: rayaelitehomesandofficescleaningservices.com",
            `Contact: ${SITE.email}`,
          ]}
        />
      </LSection>

      <LSection title="2. Use of This Website">
        <LSub>2.1 Permitted Use</LSub>
        <LP>
          You may use this website for lawful purposes only — specifically to learn about our services,
          request quotes, book appointments, and contact our team. Any use of this website that
          interferes with its normal operation, attempts to extract data at scale, or is intended to
          harm Raya Elite or other users is strictly prohibited.
        </LP>
        <LSub>2.2 Accuracy of Information</LSub>
        <LP>
          We make every effort to keep the information on this website current and accurate. However,
          service details, pricing, availability, and other specifics are subject to change. All
          pricing on this website represents starting points only. Your confirmed quote — provided
          before any booking is finalized — is the binding price for your service.
        </LP>
        <LSub>2.3 Intellectual Property</LSub>
        <LP>
          All content on this website — including text, images, logos, design elements, and copy — is
          the property of Raya Elite Home &amp; Office Cleaning Services LLC and is protected by
          applicable copyright and trademark law. You may not reproduce, distribute, or use any content
          from this site without our prior written permission.
        </LP>
      </LSection>

      <LSection title="3. Booking & Services">
        <LSub>3.1 Booking Confirmation</LSub>
        <LP>
          A booking is not confirmed until you receive a written confirmation from our team via email
          or SMS. Submitting a booking request initiates the process — confirmation closes it. We will
          confirm or follow up within the same business day.
        </LP>
        <LSub>3.2 Accurate Information</LSub>
        <LP>
          You agree to provide accurate, complete information when booking a service, including correct
          details about the size, condition, and access requirements of your space. Significant
          discrepancies between information provided and actual conditions upon arrival may result in a
          revised quote or adjusted scope of work. We will always communicate this to you before
          proceeding.
        </LP>
        <LSub>3.3 Access to the Property</LSub>
        <LP>
          You agree to provide our team with safe and lawful access to the property on the scheduled
          date and time. If access is not available and we are not notified in advance, a cancellation
          fee may apply (see Section 4).
        </LP>
        <LSub>3.4 Scope of Service</LSub>
        <LP>
          Our team will perform the cleaning services specified in your confirmed booking. Work outside
          the agreed scope — additional rooms, areas not included in the original quote, or conditions
          materially different from what was described — may require a revised quote before proceeding.
        </LP>
        <LSub>3.5 Satisfaction Guarantee</LSub>
        <LP>
          If any aspect of your cleaning does not meet the standard described in your booking, notify us
          within 24 hours of service completion. We will return to address the issue at no additional
          charge. This guarantee applies to the specific areas and tasks included in your confirmed
          service scope.
        </LP>
      </LSection>

      <LSection title="4. Cancellations & Rescheduling">
        <LSub>4.1 Client Cancellations</LSub>
        <LP>
          We understand that plans change. You may cancel or reschedule your appointment at any time
          with at least 24 hours&apos; notice at no charge. Cancellations made with less than 24
          hours&apos; notice may be subject to a cancellation fee of up to 50% of the scheduled service
          cost, reflecting the time and resources reserved for your job.
        </LP>
        <LSub>4.2 Same-Day Cancellations</LSub>
        <LP>
          Cancellations on the day of service — after our team has been dispatched or is en route — may
          be subject to the full service fee. We will communicate any applicable charges before
          processing them.
        </LP>
        <LSub>4.3 Raya Elite Cancellations</LSub>
        <LP>
          In the rare event that we need to cancel or reschedule due to illness, emergency, or
          circumstances beyond our control, we will notify you as soon as possible and prioritize
          rescheduling at your earliest convenience. No cancellation fee applies when Raya Elite
          initiates the cancellation.
        </LP>
        <LSub>4.4 How to Cancel or Reschedule</LSub>
        <LP>
          Contact us by the phone number or email address listed on our contact page. Please include
          your name, booking date, and service address.
        </LP>
      </LSection>

      <LSection title="5. Payment">
        <LSub>5.1 Payment Terms</LSub>
        <LP>
          Payment is due before or upon completion of each cleaning service unless a separate billing
          arrangement has been agreed upon in writing for recurring or commercial accounts.
        </LP>
        <LSub>5.2 Accepted Payment Methods</LSub>
        <LP>
          We accept all major credit and debit cards, and other payment methods as communicated at the
          time of booking. Specific payment options will be confirmed in your booking documentation.
        </LP>
        <LSub>5.3 Pricing</LSub>
        <LP>
          All prices quoted are based on information provided at the time of booking. Final pricing is
          confirmed in writing before service begins. Additional charges will only be applied with your
          explicit prior approval.
        </LP>
        <LSub>5.4 Late Payments</LSub>
        <LP>
          For commercial accounts operating on invoiced billing, payment is due within the terms
          specified on your invoice. Accounts overdue by more than 14 days may be subject to a late
          payment fee of 1.5% per month on the outstanding balance.
        </LP>
        <LSub>5.5 Recurring Service Billing</LSub>
        <LP>
          Clients on recurring service plans will be billed according to the schedule and terms agreed
          upon at the time of enrollment. Changes to recurring plans require 7 days&apos; written
          notice.
        </LP>
      </LSection>

      <LSection title="6. Liability">
        <LSub>6.1 Our Liability</LSub>
        <LP>
          Raya Elite carries full general liability insurance. In the event that our team causes damage
          to your property during a cleaning, notify us within 24 hours with a description and, where
          possible, photographic documentation. We will investigate and work in good faith to resolve
          the matter promptly — through repair, replacement, or compensation up to the limits of our
          insurance coverage.
        </LP>
        <LSub>6.2 Pre-Existing Damage</LSub>
        <LP>
          We are not responsible for damage to items that were already broken, fragile, improperly
          secured, or in deteriorated condition prior to our arrival. Our team is instructed to flag and
          avoid obviously damaged or at-risk items rather than clean around them without notice.
        </LP>
        <LSub>6.3 Valuables</LSub>
        <LP>
          We ask that you secure or store away any irreplaceable items, jewelry, cash, or valuables
          before our team arrives. While our staff are fully background-checked and bonded, we recommend
          this as a standard precaution for any professional service entering your home or office.
        </LP>
        <LSub>6.4 Limitation of Liability</LSub>
        <LP>
          To the extent permitted by Maryland law, Raya Elite&apos;s total liability to you for any
          claim arising from our services shall not exceed the total amount paid by you for the specific
          service giving rise to the claim.
        </LP>
        <LSub>6.5 Force Majeure</LSub>
        <LP>
          We are not liable for delays or failure to perform services resulting from circumstances
          beyond our reasonable control, including severe weather, natural disasters, public health
          emergencies, or government-mandated restrictions.
        </LP>
      </LSection>

      <LSection title="7. Health & Safety">
        <LSub>7.1 Safe Working Conditions</LSub>
        <LP>
          You agree to provide our team with a safe working environment. This includes adequate
          ventilation, functioning utilities (water and electricity), and access to the areas being
          cleaned. If conditions at your property present a risk to our team&apos;s health or safety, we
          reserve the right to pause or cease service and reschedule.
        </LP>
        <LSub>7.2 Hazardous Materials</LSub>
        <LP>
          Our services do not include the removal or cleaning of biohazardous materials, controlled
          substances, extreme hoarding conditions, sewage, mold remediation, or any materials requiring
          specialist hazmat handling. If such conditions are discovered upon arrival, we will notify you
          and may be unable to proceed with the scheduled service.
        </LP>
        <LSub>7.3 Pets</LSub>
        <LP>
          Please ensure that pets are secured or contained during our cleaning visit. Our team works
          best when pets are in a separate room or area. This protects both your pets and our staff.
        </LP>
      </LSection>

      <LSection title="8. Recurring Service Agreements">
        <LP>
          Clients who enroll in weekly, biweekly, or monthly recurring cleaning plans agree to the
          following additional terms:
        </LP>
        <LUL
          items={[
            "A minimum of 7 days' written notice is required to pause, modify, or cancel a recurring plan",
            "Preferred pricing applied to recurring plans is contingent on maintaining the agreed service frequency",
            "Raya Elite reserves the right to review and adjust recurring service pricing with 30 days' written notice",
            "Recurring clients receive priority scheduling, which is forfeited if the plan is paused or cancelled",
          ]}
        />
      </LSection>

      <LSection title="9. Governing Law">
        <LP>
          These Terms and Conditions are governed by and construed in accordance with the laws of the
          State of Maryland, without regard to conflict of law principles. Any disputes arising from
          these Terms or your use of our services shall be subject to the exclusive jurisdiction of the
          courts of Maryland.
        </LP>
      </LSection>

      <LSection title="10. Dispute Resolution">
        <LP>
          We&apos;d prefer to resolve any issue directly. If something goes wrong, contact us first and
          give us the opportunity to make it right. Most concerns are resolved within 24–48 hours.
        </LP>
        <LP>
          If a dispute cannot be resolved informally, both parties agree to attempt mediation before
          pursuing formal legal action. Mediation will be conducted in Maryland by a mutually
          agreed-upon mediator.
        </LP>
      </LSection>

      <LSection title="11. Changes to These Terms">
        <LP>
          We reserve the right to update these Terms and Conditions at any time. Changes take effect
          upon posting to this page, with the updated &quot;Last Updated&quot; date reflecting the
          revision. Your continued use of our website or services after any update constitutes
          acceptance of the revised Terms. For material changes affecting existing service agreements,
          we will notify active clients by email.
        </LP>
      </LSection>

      <LSection title="12. Contact & Questions">
        <LP>
          If anything in these Terms is unclear, or you have questions before booking, reach out via the
          contact options listed on our{" "}
          <Link href="/contact" className="font-bold text-clay underline underline-offset-2">
            contact page
          </Link>{" "}
          before you proceed. We&apos;re happy to walk through any of this with you directly.
        </LP>
      </LSection>
    </LegalShell>
  );
}
