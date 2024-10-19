'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonyItem from '../components/testimonyItem';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    testimony: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    name: "John Doe",
    company: "Stellar Solutions",
    avatar: "/images/user1.jpg"
  },
  {
    testimony: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    name: "Jane Smith",
    company: "Blue Horizon Technologies",
    avatar: "/images/user2.jpg"
  },
  {
    testimony: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    name: "David Johnson",
    company: "Quantum Innovations",
    avatar: "/images/user3.jpg"
  },
  {
    testimony: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    name: "Ronee Brown",
    company: "Fusion Dynamics",
    avatar: "/images/user4.jpg"
  },
  {
    testimony: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    name: "Michael Wilson",
    company: "Visionary Creations",
    avatar: "/images/user5.jpg"
  },
  {
    testimony: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    name: "Emily Davis",
    company: "Synergy Systems",
    avatar: "/images/user6.jpg"
  }
];

function TestimonySection() {
  const sectionRef = useRef(null);
  const testimonialsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const testimonies = testimonialsRef.current;

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

    // Animations for each testimony
    testimonies.forEach((testimony, index) => {
      gsap.fromTo(testimony,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimony,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col text-center items-center justify-center pb-20 border-b border-neutral-600 gap-10 mt-20">
      <h1 className="text-6xl">What people are saying</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <div key={index} ref={el => testimonialsRef.current[index] = el}>
            <TestimonyItem
              testimony={item.testimony}
              avatar={item.avatar}
              name={item.name}
              company={item.company}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonySection;