import React from 'react'
import TestimonyItem from './testimonyItem'

function TestimonySection() {

     const testimonials = [
        {
          testimony: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
          name: "John Doe",
          company: "Stellar Solutions",
          avatar: "/images/user1.jpg" // Vous devrez ajuster les chemins des avatars
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

  return (
    <section className="flex flex-col text-center items-center justify-center pb-20 border-b border-neutral-600  gap-10 mt-20">
      <h1 className="text-6xl">What people are saying</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
            <TestimonyItem
                key={index}
                testimony={item.testimony}
                avatar={item.avatar}
                name={item.name}
                company={item.company}
            />
            ))}
      </div>
    </section>
  )
}

export default TestimonySection
