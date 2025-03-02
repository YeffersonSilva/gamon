
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const benefitData = [
    {
      titleKey: 'benefits.1.title',
      descriptionKey: 'benefits.1.description',
      icon: <Clock className="h-16 w-16 text-primary" />,
      statsKey: 'benefits.1.stats',
      highlightKey: 'benefits.1.highlight'
    },
    {
      titleKey: 'benefits.2.title',
      descriptionKey: 'benefits.2.description',
      icon: <BarChart className="h-16 w-16 text-primary" />,
      statsKey: 'benefits.2.stats',
      highlightKey: 'benefits.2.highlight'
    },
    {
      titleKey: 'benefits.3.title',
      descriptionKey: 'benefits.3.description',
      icon: <Shield className="h-16 w-16 text-primary" />,
      statsKey: 'benefits.3.stats',
      highlightKey: 'benefits.3.highlight'
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('benefits.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('benefits.description')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefitData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="glass dark:glass-dark h-full rounded-2xl p-8 flex flex-col">
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">{t(benefit.titleKey)}</h3>
                <p className="text-muted-foreground text-center mb-6">{t(benefit.descriptionKey)}</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-primary">{t(benefit.statsKey)}</span>
                    <span className="text-sm text-muted-foreground">{t(benefit.highlightKey)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
