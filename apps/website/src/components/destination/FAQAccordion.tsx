'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  heading?: string;
}

export default function FAQAccordion({ faqs, heading = 'FAQ' }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    faqs.forEach((faq, i) => {
      if (faq.defaultOpen) initial.add(i);
    });
    return initial;
  });

  const toggle = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="accordianFAQBox">
      <h2 className="heading" id="Itinerary">{heading}</h2>
      <div className="blockBox">
        {faqs.map((faq, i) => {
          const isOpen = openItems.has(i);
          return (
            <div className="accordianRow" key={i}>
              <h3
                className={`accordion${isOpen ? ' active' : ''}`}
                onClick={() => toggle(i)}
              >
                {faq.question}
              </h3>
              <div
                className="expendaccordian"
                style={isOpen ? { maxHeight: '1000px' } : { maxHeight: '0px', overflow: 'hidden' }}
              >
                <div className="content">
                  {faq.answer.split('\n').map((line, j) => (
                    line.trim() ? <p key={j}>{line}</p> : null
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
