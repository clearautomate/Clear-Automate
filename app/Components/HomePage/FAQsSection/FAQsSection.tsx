import FAQs from "../../FAQs/FAQs";

export default function FAQsSection() {
    const faqs = [
        {
            question: "What happens if I have issues after you build it?",
            answer: "I will stay with you and make the necessary changes.",
        },
        {
            question: "How long does the development usually take?",
            answer: "It depends on the project, but I will give you an estimated timeline before starting.",
        },
        {
            question: "What technologies do you use?",
            answer: "I mainly use Next.js, Node.js, and related modern web technologies.",
        },
        {
            question: "Can I request changes during development?",
            answer: "Yes, I welcome your feedback and can adjust the project as needed.",
        },
        {
            question: "Will I own the code after the project is finished?",
            answer: "To ensure you receive continuous improvements and dedicated support, the software is provided as part of a monthly service plan rather than as standalone code."
        },
        {
            question: "Do you provide support after delivery?",
            answer: "Yes, I offer support and maintenance options after delivery.",
        },
        {
            question: "How do you handle project confidentiality?",
            answer: "I respect your privacy and can sign an NDA if required.",
        },
        {
            question: "What if I want to add features later?",
            answer: "You can always contact me for additional work or feature updates.",
        },
    ];


    return <FAQs faqs={faqs} />;
}
