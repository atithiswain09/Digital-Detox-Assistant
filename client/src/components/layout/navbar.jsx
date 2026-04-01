import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Link } from "@tanstack/react-router";
import {
  ChartArea,
  Clock,
  Menu as Hamburger,
  Mail,
  Rss,
  Shield,
  ShieldOff,
  X,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* =========================================================
   Constants
========================================================= */

const ITEM_BASE_CLASS =
  "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

const NAV_LINK_CLASS =
  "inline-flex items-center text-sm font-medium text-muted-foreground transition-colors " +
  "hover:text-foreground underline-offset-4 focus:outline-none bg-transparent";

const FEATURES = [
  {
    title: "Website Blocking",
    description:
      "Block distracting sites and stay focused during deep work sessions.",
    icon: ShieldOff,
  },
  {
    title: "Time Tracking",
    description: "Automatically track time spent across tasks and websites.",
    icon: Clock,
  },
  {
    title: "Analytics & Insights",
    description:
      "Visualize habits and uncover patterns to optimize productivity.",
    icon: ChartArea,
  },
];

const RESOURCES = [
  {
    title: "Blog",
    description: "Tips and insights on productivity and focus.",
    icon: Rss,
  },
  {
    title: "Contact",
    description: "Reach out for support or inquiries.",
    icon: Mail,
  },
];

/* =========================================================
   Reusable Components
========================================================= */

/**
 * Individual menu item (icon + title + description)
 */
const MenuItemCard = React.memo(function MenuItemCard({ item }) {
  const Icon = item.icon;

  return (
    <li key={item.title}>
      <Link to={item.to ?? "/"} className={ITEM_BASE_CLASS}>
        <div className="flex items-center space-x-2 text-foreground">
          <Icon className="h-4 w-4" />
          <h6 className="text-sm font-medium leading-none!">{item.title}</h6>
        </div>
        <p
          title={item.description}
          className="line-clamp-1 text-sm leading-snug text-muted-foreground"
        >
          {item.description}
        </p>
      </Link>
    </li>
  );
});

/**
 * Reusable menu section (Features, Pricing, Resources)
 */
const MenuSection = ({ title, items, gridClassName, featured }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={NAV_LINK_CLASS}>
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul
          className={`grid gap-1 p-2 md:w-100 lg:w-125 rounded-xl ${gridClassName}`}
        >
          {featured && (
            <li className="row-span-3 pr-2 relative rounded-lg overflow-hidden">
              {featured}
            </li>
          )}

          {items.map((item) => (
            <MenuItemCard key={item.title} item={item} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

/* =========================================================
   Feature Highlight Card (extracted for clarity)
========================================================= */

const FeatureHighlightCard = () => (
  <Card className="bg-muted/50 h-full relative">
    <FlickeringGrid
      className="absolute inset-0 z-0 size-full bg-linear-to-t from-background via-background to-transparent"
      squareSize={4}
      gridGap={6}
      color="#6B7280"
      maxOpacity={0.5}
      flickerChance={0.1}
    />
    <CardContent className="flex h-full flex-col justify-end relative">
      <Link to="/">
        <h6 className="mb-1 text-lg/6 font-medium">
          Productivity Control Suite
        </h6>
        <p className="text-sm leading-snug text-muted-foreground">
          Take full control of how you spend your time online.
        </p>
      </Link>
    </CardContent>
  </Card>
);

/* =========================================================
   Menu
========================================================= */

function Menu({ isMenuOpen }) {
  useScrollLock(isMenuOpen);
  const navLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/features", label: "Features", dropdown: true },
      { to: "/pricing", label: "Pricing" },
      { to: "/resources", label: "Resources", dropdown: true },
    ],
    [],
  );

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden w-full max-h-96 py-4"
        >
          {navLinks.map((link) => (
            <div className="px-4 py-2" key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   Main Navbar
========================================================= */

export default function Navbar() {
  const isMobile = useIsMobile();
  const [menu, setMenu] = useState(false);

  const isMenuOpen = isMobile && menu;

  const toggleMenu = useCallback(() => {
    if (!isMobile) return;
    setMenu((prev) => !prev);
  }, [isMobile]);

  return (
    <>
      <header className="fixed z-50 w-full">
        {isMenuOpen && (
          <div className="w-full absolute left-0 top-0 h-screen backdrop-blur-[2px]"></div>
        )}
        <div className="p-4 absolute left-1/2 -translate-x-1/2 w-full">
          <section className="p-2 w-full backdrop-blur-xs bg-white/30 dark:bg-gray-900/30 md:w-4/5 lg:w-2/3 mx-auto border rounded-lg">
            <div className="flex justify-between">
              {/* LEFT */}
              <div className="flex gap-6 items-center">
                <Shield className="h-8 w-8 p-1" />

                <div className="hidden md:flex gap-2">
                  <NavigationMenu>
                    <NavigationMenuList className="gap-2">
                      {/* Home */}
                      <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link to="/" className={NAV_LINK_CLASS}>
                            Home
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      {/* Features */}
                      <MenuSection
                        title="Features"
                        items={FEATURES}
                        gridClassName="md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr] lg:grid-rows-3"
                        featured={<FeatureHighlightCard />}
                      />

                      {/* Pricing */}
                      <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link to="/" className={NAV_LINK_CLASS}>
                            Pricing
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      {/* Resources */}
                      <MenuSection
                        title="Resources"
                        items={RESOURCES}
                        gridClassName="lg:grid-cols-2"
                      />
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex gap-4 items-center">
                <ThemeToggle className="hidden md:flex" />
                <Button
                  onClick={toggleMenu}
                  asChild
                  variant="icon"
                  className="block md:hidden h-8 w-8 p-1 cursor-pointer"
                >
                  {!isMenuOpen ? (
                    <Hamburger className="w-6 h-6 text-foreground transition-transform duration-200 ease-in-out" />
                  ) : (
                    <X className="w-6 h-6 text-red-400 transition-transform transform duration-200 ease-in-out hover:scale-110 active:scale-95" />
                  )}
                </Button>
              </div>
            </div>
            {isMobile && <Menu isMenuOpen={isMenuOpen} />}
          </section>
        </div>
      </header>
    </>
  );
}
