 import React from "react";
import { Link } from "react-router-dom";

export const TodoFooter = () => {
  return (
    <footer className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#FE5A59" />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-semibold">do List</span>
            </div>
            <p className="text-sm text-gray-500">
              Subscribe to our newsletter for the latest features and updates.
            </p>
            <div className="flex max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5A59]"
              />
              <button
                type="submit"
                className="h-10 px-4 py-2 rounded-md bg-[#FE5A59] hover:bg-[#FE5A59]/90 text-white font-medium"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing you agree to receive the latest features and
              updates.
            </p>
          </div>

          <FooterColumn
            title="Quick Links"
            links={[
              { label: "Home Page", href: "/" },
              { label: "About Us", href: "#" },
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Contact", href: "#" },
              { label: "FAQ", href: "#" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              { label: "Help Center", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Tutorials", href: "#" },
              { label: "Support", href: "#" },
              { label: "Feature Requests", href: "#" },
              { label: "Status", href: "#" },
            ]}
          />

          <FooterColumn
            title="Connect With Us"
            links={[
              { label: "Twitter", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "Facebook", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "YouTube", href: "#" },
              { label: "GitHub", href: "#" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 DoList. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500 mt-4 md:mt-0">
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="#" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
