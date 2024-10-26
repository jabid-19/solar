"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingDown, Sliders, BarChart } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BatterySolutionsLanding() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen ">
      <main>
        <section className="py-20 text-center text-yellow-800 bg-gradient-to-b from-amber-500 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              Optimize Your Energy Consumption and Generate Revenue
            </h2>
            <p
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              With our advanced battery solutions, your company can streamline
              energy consumption and actively participate in the energy market.
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full transform transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Explore our solutions
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white" id="about-us">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              Our Battery Solutions
            </h3>
            <p
              className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              We strive to offer innovative energy solutions that not only help
              companies streamline their energy consumption but also generate
              revenue in the energy market.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="solutions">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              Benefits of our Battery Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Cost Savings",
                  icon: <TrendingDown className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Store excess electricity during periods of low demand and use it when prices are higher to reduce electricity costs.",
                  animation: "flip-left",
                },
                {
                  title: "Frequency Balancing",
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Actively participate in the frequency balancing market and generate revenue by offering regulation capacity.",
                  animation: "flip-up",
                },
                {
                  title: "Peak Demand Management",
                  icon: <BarChart className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Use the battery as a powerful buffer to manage internal peak demands and reduce pressure on the power grid.",
                  animation: "flip-down",
                },
                {
                  title: "Flexible Solutions",
                  icon: <Sliders className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Tailored battery solutions adapted to your company's specific needs and goals.",
                  animation: "flip-right",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="shadow-none border-none transform transition-transform hover:scale-105 duration-300"
                  data-aos={item.animation}
                  data-aos-delay={index * 150}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="transform transition-transform hover:rotate-12 duration-300">
                        {item.icon}
                      </div>
                      <span className="ml-2">{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-16 bg-gradient-to-r from-yellow-500 to-amber-600 relative overflow-hidden"
          id="how-it-works"
        >
          <div
            className="absolute inset-0 opacity-10"
            data-aos="fade"
            data-aos-duration="1500"
          />
          <div className="container mx-auto px-4 relative">
            <h3
              className="text-3xl font-bold mb-8 text-center text-white"
              data-aos="zoom-in-up"
            >
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div
                className="text-white"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h4 className="text-2xl font-semibold mb-4">
                  Frequency Balancing Market
                </h4>
                <p className="opacity-90 mb-4">
                  Frequency balancing is crucial for maintaining stability in
                  the electrical system. It involves rapid and precise actions
                  to match electricity production and consumption.
                </p>
              </div>
              <div
                className="text-white"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <h4 className="text-2xl font-semibold mb-4">
                  Commercial Batteries
                </h4>
                <p className="opacity-90 mb-4">
                  Commercial batteries mainly consist of cells and battery
                  management systems (BMS).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              Role of Aggregators
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0" data-aos="zoom-in-right">
                <Image
                  src="/images/solar-panel.jpg"
                  alt="Aggregator illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div
                className="md:w-1/2 md:pl-8"
                data-aos="zoom-in-left"
                data-aos-delay="200"
              >
                <p className="text-gray-600 mb-4">
                  Aggregators play an important role in the frequency balancing
                  market by gathering and coordinating various units.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {[
                    "Create resource pools by connecting and controlling multiple smaller producers or consumers",
                    "Use advanced technology for coordination and optimization of resources",
                    "Actively participate in the frequency balancing market",
                    "Introduce innovative business models for efficient energy use",
                  ].map((item, index) => (
                    <li
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={400 + index * 100}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-primary text-white hover:bg-yellow-600 rounded-full transform transition-transform hover:scale-105"
                  data-aos="flip-up"
                  data-aos-delay="800"
                >
                  Learn more about aggregators
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-amber-50 relative overflow-hidden"
          id="contact"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #fbbf24 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
            data-aos="fade"
            data-aos-duration="1500"
          />
          <div className="container mx-auto px-4 text-center relative">
            <h3
              className="text-3xl font-bold mb-4 text-gray-800"
              data-aos="zoom-in"
            >
              Take the step towards a sustainable energy future
            </h3>
            <p
              className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact us today to discuss how our battery solutions can optimize
              your energy consumption.
            </p>
            <Button
              className="rounded-full bg-primary text-white hover:bg-yellow-600 text-lg px-8 py-3 transform transition-transform hover:scale-110"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              Contact Us Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
