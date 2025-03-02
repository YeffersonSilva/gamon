import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Settings, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#0A0A0B] w-full">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Software a medida | SaaS | Automatización
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
                {t("hero.title")}
              </h1>

              <p className="text-lg md:text-xl text-gray-400">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 bg-gradient-to-r from-primary to-purple-500 text-white shadow-md hover:opacity-90 transition-all duration-200"
                >
                  {t("hero.contact")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="pt-6 text-sm text-gray-400">
                <p>Más de 200 empresas optimizan sus procesos con Gamon</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl transform -rotate-6 scale-95"></div>
              <div className="glass rounded-3xl border border-white/10 overflow-hidden shadow-md relative">
                <div className="p-2 absolute top-2 left-2 z-10 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-[#0F0F11] p-4 pt-10">
                  <pre className="text-green-400 text-left text-xs md:text-sm overflow-hidden">
                    <code>
                      <span className="text-blue-400">class</span>{" "}
                      <span className="text-yellow-400">GamonSolution</span>{" "}
                      &#123;
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-purple-400">constructor</span>()
                      &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.efficiency ={" "}
                      <span className="text-orange-400">100</span>;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.customization ={" "}
                      <span className="text-orange-400">true</span>;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.scalability ={" "}
                      <span className="text-orange-400">"unlimited"</span>;
                      <br />
                      &nbsp;&nbsp;&#125;
                      <br />
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-blue-400">async</span>{" "}
                      <span className="text-purple-400">optimize</span>() &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-gray-400">
                        // Optimizando procesos...
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-blue-400">const</span> result ={" "}
                      <span className="text-blue-400">await</span>{" "}
                      this.automate();
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-blue-400">return</span> result;
                      <br />
                      &nbsp;&nbsp;&#125;
                      <br />
                      &#125;
                    </code>
                  </pre>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-5">
                <div className="p-3 rounded-full bg-primary text-white shadow-glow z-10">
                  <Code className="h-5 w-5" />
                </div>
                <div className="p-3 rounded-full bg-purple-500 text-white shadow-glow z-10">
                  <Settings className="h-5 w-5" />
                </div>
                <div className="p-3 rounded-full bg-blue-500 text-white shadow-glow z-10">
                  <Zap className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
