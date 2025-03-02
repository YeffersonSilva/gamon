
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, Code, MessageSquare, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/10 dark:to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 transform -rotate-3 scale-105"></div>
          <div className="glass dark:glass-dark relative p-12 md:p-20 rounded-3xl border border-white/20 dark:border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <div className="flex justify-center gap-6 mb-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl"
                >
                  <Code className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl"
                >
                  <Zap className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl"
                >
                  <MessageSquare className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="gradient" size="lg">
                  {t('cta.button1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  {t('cta.button2')}
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                {t('cta.free')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
