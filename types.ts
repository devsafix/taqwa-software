
// Fix: Added React import to resolve the 'React' namespace error on line 5
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
