import React from "react";
import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

const productLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Extension", href: "/extension" },
];

const integrationLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sumith__saini/",
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sumith-saini-51aa82220/",
    external: true,
  },
  {
    name: "X",
    href: "https://x.com/sumithsaini01",
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Sumith-Kumar-Saini",
    external: true,
  },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Docs", href: "/docs" },
  { name: "Community", href: "/community" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const LinkItem = ({ link }) => {
  const className =
    "text-neutral-400 hover:text-foreground transition-colors duration-200 text-[15px] font-normal";

  if (link.external) {
    return (
      <li>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {link.name}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={link.href} className={className}>
        {link.name}
      </Link>
    </li>
  );
};

const Footer = ({ className }) => {
  return (
    <footer className={cn("w-full bg-background relative", className)}>
      {/* Decorative Top Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-1.75 bg-neutral-200 dark:bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 lg:pb-24">
        {/* Main Grid: 5 columns on desktop */}

        {/* Empty Column */}
        <div className="w-full h-16 lg:h-24 border-t border-neutral-200/10 dark:border-neutral-800" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 sm:gap-y-8 lg:gap-8">
          {/* Brand Section - Column 1 */}
          <div className="space-y-6 flex flex-col items-start sm:items-start text-left sm:text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Shield className="w-6 h-6 text-neutral-950 fill-neutral-950" />
              </div>
              <div className="space-y-2">
                <p className="text-[15px] text-neutral-400 leading-relaxed max-w-50">
                  Reclaim your focus. Digital detox made simple.
                </p>
                <p className="text-[15px] font-medium text-foreground">
                  Made by <span className="font-bold">Detoxi Team</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Grid - Columns 2-5 */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">
              Integrations
            </h3>
            <ul className="space-y-2">
              {integrationLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 lg:mt-32 pt-8 border-t border-neutral-200/10 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-neutral-500 font-medium tracking-tight text-center sm:text-left">
            © 2026 Detoxi INC. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 font-medium tracking-tight flex items-center text-center sm:text-right gap-6">
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors duration-200"
            >
              <span>Terms of Service</span>
            </Link>
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors duration-200"
            >
              <span>Privacy Policy</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
