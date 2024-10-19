'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PricingItem from '../components/pricingItem';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  { priceLabel: "Free", price: 0 },
  { priceLabel: "Pro", price: 10 },
  { priceLabel: "Enterprise", price: 200 }
];

function PricingSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Animation for the title
    gsap.fromTo(section.querySelector('h1'),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animations for each pricing card
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0, 
          y: 100, 
          rotation: -5, 
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
    });

    // Hover animation for cards
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          scale: 1.05, 
          y: -10, 
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          duration: 0.3 
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          scale: 1, 
          y: 0, 
          boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
          duration: 0.3 
        });
      });
    });

  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center mt-20 gap-10">
      <h1 className="text-6xl">Pricing</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5">
        {pricingPlans.map((plan, index) => (
          <div key={index} ref={el => cardsRef.current[index] = el}>
            <PricingItem priceLabel={plan.priceLabel} price={plan.price} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;