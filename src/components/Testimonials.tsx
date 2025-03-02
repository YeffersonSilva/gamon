import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.testimonial1.quote"),
      name: t("testimonials.testimonial1.name"),
      title: t("testimonials.testimonial1.title"),
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: t("testimonials.testimonial2.quote"),
      name: t("testimonials.testimonial2.name"),
      title: t("testimonials.testimonial2.title"),
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: t("testimonials.testimonial3.quote"),
      name: t("testimonials.testimonial3.name"),
      title: t("testimonials.testimonial3.title"),
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-20 bg-[#0A0A0B]">
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
                {t("testimonials.title")}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t("testimonials.subtitle")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#1A1A1C] rounded-2xl p-8 shadow-soft h-full flex flex-col border border-gray-800">
                  <div className="mb-6">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary/30"
                    >
                      <path
                        d="M11.25 16.25H5C4.33696 16.25 3.70107 15.9866 3.23223 15.5178C2.76339 15.0489 2.5 14.413 2.5 13.75V8.75C2.5 8.08696 2.76339 7.45107 3.23223 6.98223C3.70107 6.51339 4.33696 6.25 5 6.25H8.75C9.41304 6.25 10.0489 6.51339 10.5178 6.98223C10.9866 7.45107 11.25 8.08696 11.25 8.75V22.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.5 16.25H21.25C20.587 16.25 19.9511 15.9866 19.4822 15.5178C19.0134 15.0489 18.75 14.413 18.75 13.75V8.75C18.75 8.08696 19.0134 7.45107 19.4822 6.98223C19.9511 6.51339 20.587 6.25 21.25 6.25H25C25.663 6.25 26.2989 6.51339 26.7678 6.98223C27.2366 7.45107 27.5 8.08696 27.5 8.75V22.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
