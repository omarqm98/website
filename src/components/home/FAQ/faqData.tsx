import React from 'react';

export const faqData = [
  {
    question: "Why Hire Instead of Doing This In-House?",
    answer: "Doing it in-house is great – if you have the time, tools, and expertise. For faster, high-quality implementation, our agency offers proven solutions ready to go. We save you the steep learning curve and deliver immediate results."
  },
  {
    question: "How Does Pricing Work?",
    answer: "We offer custom pricing based on your business needs, starting at $700/month. Payment plans are flexible because we understand SME cash flow concerns."
  },
  {
    question: "Is This Really Cost-Effective?",
    answer: (
      <>
        <p>If you're implementing AI just to "follow the trend" – no. But if you're ready to use AI systems that reduce payroll costs and boost productivity, the answer is absolutely yes.</p>
        <ul className="mt-4 space-y-2">
          <li>~40% cheaper than hiring in-house</li>
          <li>~70% less than typical agencies</li>
        </ul>
      </>
    )
  },
  {
    question: "What is the 100% Satisfaction Guarantee?",
    answer: "We're not done until you're completely satisfied. If the system doesn't meet your expectations, we revise and optimize until it does."
  },
  {
    question: "How Do We Communicate?",
    answer: (
      <>
        <p>We keep things simple and efficient:</p>
        <ul className="mt-4 space-y-2">
          <li>Async updates via WhatsApp or phone</li>
          <li>Optional weekly consultations to track progress and resolve any issues</li>
        </ul>
      </>
    )
  }
];