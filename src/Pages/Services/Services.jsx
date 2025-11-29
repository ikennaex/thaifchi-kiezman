import React from "react";
import { motion } from "framer-motion";
import { 
  Globe2,
  House,
  Wine,
  Flower,
  PlaneIcon
} from "lucide-react";


const services = [
  {
    title: "International Trade and Representation",
    desc: "At Thaifchi-Kiezman Ltd, international trade is one of our core strengths. We specialize in the import and export of high-quality manufactured goods, agricultural commodities, timber, and charcoal. Our trading operations are supported by strong sourcing networks, compliance with global trade standards, and reliable logistics systems that ensure seamless cross-border transactions.",
    icon: <Globe2 className="w-9 h-9" />,
    img: "./images/intltrade.jpg",
  },
  {
    title: "Construction and Estate Development",
    desc: "At Thaifchi-Kiezman Ltd, we provide comprehensive construction and estate development services tailored to meet the diverse needs of individuals, organizations, and communities. Our expertise covers residential, commercial, and industrial projects, where we combine innovative designs, quality materials, and skilled craftsmanship to deliver durable and functional structures",
    icon: <House className="w-9 h-9" />,
    img: "./images/construction.jpg",
  },
  {
    title: "Wines, Beverages, and Retail Solutions",
    desc: "At Thaifchi-Kiezman Ltd, we are actively engaged in the production, importation, and distribution of high-quality wines, spirits, and beverages. Our operations are built on strong partnerships with trusted local and international brands, enabling us to bring diverse and premium products to the Nigerian market.",
    icon: <Wine className="w-9 h-9" />,
    img: "./images/wines.jpg",
  },
  {
    title: "Agribusiness and Agro-Processing",
    desc: "Thaifchi-Kiezman Ltd is committed to advancing food production and agricultural sustainability through modern, mechanized farming practices. Our agribusiness division covers crop cultivation, livestock rearing, and a wide range of agro-allied services designed to boost efciency, reduce waste, and maximize yields.",
    icon: <Flower className="w-9 h-9" />,
    img: "./images/agriculture.jpg",
  },
  {
    title: "Logistics, Haulage, and Transportation",
    desc: "At Thaifchi-Kiezman Ltd, we understand that seamless movement of goods and people is at the heart of every thriving economy. Our logistics, haulage, and transportation services are designed to deliver efciency, reliability, and cost-effectiveness. We provide end-to-end solutions for the distribution of general goods, bulk commodities, and specialized cargo across Nigeria and beyond. ",
    icon: <PlaneIcon className="w-9 h-9" />,
    img: "./images/logistics.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden">
      {/* Matching subtle radial background from About page */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#f97316,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#1e40af,transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header - Identical style to About page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-10">
            <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-sm">
              Our Services
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32 lg:space-y-40"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={item}
              className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center group ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-customOrange/20 to-customBlue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-1000" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-96 lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Floating Icon Badge - Same style as About page */}
                <div className="absolute -top-6 -right-6 p-5 bg-customBlue rounded-3xl shadow-2xl text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <div className="mt-5 h-1.5 w-28 bg-customOrange rounded-full" />
                </div>

                <p className="base lg:text-lg text-gray-700 leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex items-center gap-3 text-customBlue font-medium">
                  <span className="w-8 h-8 rounded-full bg-customBlue/10 flex items-center justify-center">
                    ✓
                  </span>
                  <span>Certified • Sustainable • Scalable</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;