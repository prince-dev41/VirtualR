import React from 'react';

const navigationItems = [
  {
    title: "Resources",
    subItems: [
      "Getting Started",
      "Documentation",
      "Tutorials",
      "API Reference",
      "Community Forums"
    ]
  },
  {
    title: "Platform",
    subItems: [
      "Features",
      "Supported Devices",
      "System Requirements",
      "Downloads",
      "Release Notes"
    ]
  },
  {
    title: "Community",
    subItems: [
      "Events",
      "Meetups",
      "Conferences",
      "Hackathons",
      "Jobs"
    ]
  }
];

function Footer() {
  return (
    <footer className="bg-blackBg text-neutral-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {navigationItems.map((category, index) => (
            <div key={index} className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-orangeColor text-xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.subItems.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="hover:text-orangeColor transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;