import FAQs from "../../FAQs/FAQs";

export default function FAQsSection() {
    const faqs = [
        {
            question: "How do I know automation will actually save my team time?",
            answer: "Every build is designed to eliminate repetitive work. Most real estate teams save 10+ hours per week with their first automation.",
        },
        {
            question: "We’re not a tech-savvy company… will this still work for us?",
            answer: "Yes. Everything is built to be simple and easy to use inside tools your team already knows—no new platforms or training required.",
        },
        {
            question: "What happens if something breaks later?",
            answer: "You’re fully covered. All builds include support, fixes, and adjustments to keep your automations running smoothly long-term.",
        },
        {
            question: "Do we have to change our current systems?",
            answer: "No. We integrate directly with your existing tools and workflows so nothing needs to be replaced or rebuilt.",
        },
        {
            question: "Is this expensive?",
            answer: "Clear Automate is structured to deliver fast ROI. Most teams cover the entire cost through saved time and reduced errors within weeks.",
        },
        {
            question: "What if we don’t know exactly what needs automating?",
            answer: "That’s what we’re here for. We’ll review your workflow and identify the highest-impact automations that produce the quickest results.",
        },
    ];

    return <FAQs faqs={faqs} />;
}
