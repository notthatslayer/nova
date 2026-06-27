import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Gamepad2, Trophy, Users, Shield, BookOpen, HelpCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "hero", label: "Home", icon: Gamepad2 },
    { id: "games", label: "Games", icon: Gamepad2 },
    { id: "tournaments", label: "Tournaments", icon: Trophy },
    { id: "community", label: "Community", icon: Users },
    { id: "plans", label: "Plans", icon: Shield },
    { id: "news", label: "News", icon: BookOpen },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled styling
      setScrolled(window.scrollY > 20);

      // Scroll Progress Indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active Section Detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
          scrolled
            ? "bg-nova-dark/60 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-nova-primary to-nova-secondary p-[1px] transition-transform duration-300 group-hover:rotate-12">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-nova-dark">
                <span className="font-display text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-nova-primary to-nova-secondary">
                  N
                </span>
              </div>
            </div>
            <span className="font-display text-xl font-bold tracking-wider text-white">
              NOVA<span className="text-nova-secondary group-hover:text-nova-primary transition-colors duration-300">PLAY</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 glass-panel-light px-4 py-1.5 rounded-full border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-nova-primary/20 to-nova-secondary/20 border border-nova-primary/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("plans")}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="relative px-5 py-2.5 rounded-lg text-sm font-bold text-white overflow-hidden group cursor-pointer transition-transform duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nova-primary to-nova-secondary transition-transform duration-500 group-hover:scale-105" />
              <span className="relative z-10">Access Portal</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-white/5 w-full">
          <div
            className="h-full bg-gradient-to-r from-nova-primary via-nova-pink to-nova-secondary"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-8 bg-nova-dark/95 backdrop-blur-lg flex flex-col justify-between md:hidden border-b border-white/5"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-nova-primary/20 to-nova-secondary/10 border border-nova-primary/20 text-white"
                        : "bg-white/5 border border-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-nova-secondary" : ""} />
                    <span className="font-display font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col space-y-3 mt-8">
              <button
                onClick={() => scrollToSection("plans")}
                className="w-full py-3 rounded-xl border border-white/10 text-white text-center font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-nova-primary to-nova-secondary text-white text-center font-bold"
              >
                Access Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
