// components/FAQSection.tsx
"use client";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      id: 'faq1',
      question: "What is AI, and how does it work?",
      answer: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. It works by using algorithms to process large datasets, identify patterns, and make predictions or decisions."
    },
    {
      id: 'faq2',
      question: "What programming languages are best for AI development?",
      answer: "Popular programming languages for AI development include Python, R, Java, and Julia. Python is widely preferred due to its extensive libraries such as TensorFlow, PyTorch, and scikit-learn."
    },
    {
      id: 'faq3',
      question: "What is machine learning, and how is it different from AI?",
      answer: "Machine Learning (ML) is a subset of AI that focuses on developing algorithms that allow machines to learn from data and improve over time without being explicitly programmed. AI is a broader concept that includes ML and other techniques."
    },
    {
      id: 'faq4',
      question: "How can I get started with software development for AI?",
      answer: "To get started, learn programming languages like Python, understand data structures and algorithms, and explore AI frameworks like TensorFlow or PyTorch. Online courses, tutorials, and projects are excellent resources for beginners."
    },
    {
      id: 'faq5',
      question: "What are the ethical considerations in AI development?",
      answer: "Ethical considerations include ensuring fairness, transparency, accountability, and privacy in AI systems. Developers must avoid bias in training data and ensure the technology is used responsibly."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions about AI & Software Development
        </h1>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <details 
              key={faq.id} 
              className="group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
              >
                <h2 className="font-medium">{faq.question}</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            Didn’t find the answer you were looking for? 
            <a 
              href="/contact" 
              className="ml-1 text-blue-600 hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;