import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  togleAnswer(answer: HTMLDivElement, plusicon: HTMLSpanElement) {
    answer.classList.toggle('max-h-80'); // Toggle the max-height (adjust as needed)
    answer.classList.toggle('max-h-0');  // Collapse when not active
    plusicon.classList.toggle('rotate-45'); // Rotate from + to ×
  }




  FaqContent= [
    {
      question: "Could you share some examples of websites you have designed and developed?",
      answer: "Certainly! Our agency has developed websites across various industries, including e-commerce, corporate sites, blogs, and more. We can share a portfolio of our projects, showcasing unique features, design elements, and the technologies we specialize in."
    },
    {
      question: "What is your approach to building a website from the ground up?",
      answer: "Our process begins with a discovery phase to understand your business goals, target audience, and brand identity. We then create wireframes and mockups to align on design. Once approved, we move to development using clean, scalable code, ensuring responsiveness and SEO optimization. Rigorous testing follows before launch to ensure a flawless user experience."
    },
    {
      question: "What is the estimated timeline for completing my website?",
      answer: "The timeline varies depending on the project scope and complexity. Typically, a standard website takes 4-6 weeks, including design, development, testing, and revisions. After discussing your requirements, we can provide a detailed project timeline."
    },
    {
      question: "Will you be available for regular website maintenance and support?",
      answer: "Yes, our agency offers maintenance and support services to ensure your website remains updated, secure, and performs optimally. This includes regular updates, bug fixes, backups, and performance enhancements."
    },
    {
      question: "What is your strategy for achieving mobile responsiveness and optimizing for SEO?",
      answer: "We adopt a mobile-first design approach, using flexible grids, scalable assets, and media queries for seamless functionality across devices. For SEO, we focus on optimized code, fast loading times, structured data, and keyword-rich content, coupled with analytics integration for monitoring."
    },
    {
      question: "Are you able to add e-commerce functionality to my website?",
      answer: "Absolutely! Our agency specializes in implementing e-commerce features, including payment gateways, product catalogs, shopping carts, and inventory management. We tailor solutions to fit both small businesses and large-scale operations."
    },
    {
      question: "Can you provide an estimated cost for my project, and do you offer any payment plans?",
      answer: "Project costs depend on the scope and complexity. After understanding your requirements, we provide a detailed quote. We also offer flexible payment options, including milestone-based payments and monthly installment plans, to suit your budget."
    }
  ]

}
