import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WelcomeVideo from "@/components/WelcomeVideo";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full bg-[#0A0A0B]/80 backdrop-blur-md z-40 py-4 border-b border-gray-800">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Gamon
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {t("menu.solutions")}
              </a>
              <a
                href="#welcome-video"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.video")}
              </a>
              <a
                href="#benefits"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.benefits")}
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.testimonials")}
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.services")}
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.faq")}
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                to="/contact"
                className="inline-block px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                {t("menu.contact")}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-50">
        <Hero />
        <Features />
        <WelcomeVideo />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-colors z-50"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
