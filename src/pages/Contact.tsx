import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// URL del backend desde variables de entorno
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: t("contact.success"),
          description: t("contact.successMessage"),
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: t("contact.error"),
          description: data.message || t("contact.errorMessage"),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast({
        title: t("contact.error"),
        description: t("contact.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-40 py-4 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              Gamon
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/#features"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.solutions")}
              </Link>
              <Link
                to="/#benefits"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.benefits")}
              </Link>
              <Link
                to="/#testimonials"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.testimonials")}
              </Link>
              <Link
                to="/#pricing"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("menu.services")}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={t("contact.namePlaceholder")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.emailField")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">
                        {t("contact.sending")}
                      </span>
                    ) : (
                      <>
                        {t("contact.send")}
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-card h-full rounded-2xl p-8 shadow-lg border border-border">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {t("contact.phone.title")}
                    </h3>
                    <a
                      href={`https://wa.me/${t("contact.phone.number").replace(
                        /\D/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      {t("contact.phone.number")}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {t("contact.email.title")}
                    </h3>
                    <a
                      href={`mailto:${t("contact.email.address")}`}
                      className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      {t("contact.email.address")}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
