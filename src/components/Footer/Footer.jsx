import React from "react";
import { Link } from "react-router";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    width="15"
    height="15"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    width="15"
    height="15"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    width="15"
    height="15"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link to="/" className="text-xl font-extrabold text-white">
              Smart<span className="text-violet-500">Deals</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "All Products", path: "/products" },
                { label: "Create Product", path: "/createProducts" },
                { label: "Login", path: "/login" },
                { label: "Register", path: "/register" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Categories
            </h3>
            <ul className="flex flex-col gap-2.5">
              {["Electronics", "Fashion", "Home & Living", "Groceries"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Contact & Support
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="mt-0.5 text-violet-400 shrink-0">
                  <EmailIcon />
                </span>
                support@Smartdeals.com
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="mt-0.5 text-violet-400 shrink-0">
                  <PhoneIcon />
                </span>
                +880 123 456 789
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="mt-0.5 text-violet-400 shrink-0">
                  <LocationIcon />
                </span>
                123 Commerce Street, Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Social Links
            </h3>
            <div className="flex items-center gap-3">
              {[
                { icon: <TwitterIcon />, href: "https://x.com/" },
                { icon: <LinkedInIcon />, href: "https://www.linkedin.com/" },
                { icon: <FacebookIcon />, href: "https://www.facebook.com/" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-[#1a2d45] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-600 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-gray-500">
          © 2025 SmartDeals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
