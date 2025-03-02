import React from "react";
import { motion } from "framer-motion";
import { ChartBar, Code, Database, Shield, Workflow, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ChartBar className="h-10 w-10 text-primary" />,
      title: t("features.feature1"),
      description: t("features.description1"),
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: t("features.feature2"),
      description: t("features.description2"),
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: t("features.feature3"),
      description: t("features.description3"),
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: t("features.feature4"),
      description: t("features.description4"),
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t("features.feature5"),
      description: t("features.description5"),
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: t("features.feature6"),
      description: t("features.description6"),
    },
  ];

  return (
    <section id="features" className="w-full py-20 bg-[#0D0D0F]">
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
                {t("features.title")}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t("features.subtitle")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-[#1A1A1C] transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="mb-6 p-3 rounded-xl bg-primary/10 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
