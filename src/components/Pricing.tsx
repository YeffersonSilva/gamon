import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import Button from "./Button";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      title: t("pricing.plan1.title"),
      description: t("pricing.plan1.description"),
      price: t("pricing.plan1.price"),
      features: t("pricing.plan1.features", { returnObjects: true }),
    },
    {
      title: t("pricing.plan2.title"),
      description: t("pricing.plan2.description"),
      price: t("pricing.plan2.price"),
      features: t("pricing.plan2.features", { returnObjects: true }),
    },
    {
      title: t("pricing.plan3.title"),
      description: t("pricing.plan3.description"),
      price: t("pricing.plan3.price"),
      features: t("pricing.plan3.features", { returnObjects: true }),
    },
  ];

  return (
    <section id="pricing" className="w-full py-20 bg-[#0D0D0F]">
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {t("pricing.title")}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t("pricing.subtitle")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-[#1A1A1C] transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border border-gray-800">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="text-3xl font-bold mb-8 text-white">
                    {plan.price}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-400"
                      >
                        <Check className="h-5 w-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p>{t("pricing.footer.included")}</p>
            <p className="mt-2">
              {t("pricing.footer.needCustom")}{" "}
              <a href="#contact" className="text-primary hover:underline">
                {t("pricing.footer.contactUs")}
              </a>{" "}
              {t("pricing.footer.forCustomQuote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
