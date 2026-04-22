import React from "react";
import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = ({ className }) => {
  const productLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Extension", href: "/extension" },
  ];

  const integrationLinks = [
    { name: "Facebook", href: "https://facebook.com", external: true },
    { name: "Instagram", href: "https://instagram.com", external: true },
    { name: "Twitter", href: "https://twitter.com", external: true },
    { name: "LinkedIn", href: "https://linkedin.com", external: true },
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
    const className = "text-neutral-400 hover:text-foreground transition-colors duration-200 text-[15px] font-normal";
    
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
        <Link
          to={link.href}
          className={className}
        >
          {link.name}
        </Link>
      </li>
    );
  };

  return (
    <footer className={cn("w-full bg-background border-t border-neutral-200/5 dark:border-neutral-800/50 relative", className)}>
      {/* Decorative Top Element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200/10 dark:bg-neutral-800" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-[3px] bg-neutral-200 dark:bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Main Grid: 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Section - Column 1 */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Zap className="w-6 h-6 text-neutral-950 fill-neutral-950" />
              </div>
              <div className="space-y-2">
                <p className="text-[15px] text-neutral-400 leading-relaxed max-w-[200px]">
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
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Integrations</h3>
            <ul className="space-y-3">
              {integrationLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <LinkItem key={link.name} link={link} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 lg:mt-32 pt-8 border-t border-neutral-200/5 dark:border-neutral-800/50">
          <p className="text-sm text-neutral-500 font-medium tracking-tight text-center sm:text-left">
            © 2026 Detoxi INC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
