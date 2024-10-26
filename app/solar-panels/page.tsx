"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, BarChart, Users, Zap, Leaf, Cpu, Settings } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SolarPanelsLanding() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <section className="py-20 text-center text-yellow-800 bg-gradient-to-b from-amber-500 to-white">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              Rooftop Solar Panels
            </h2>
            <p
              className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Harness the Power of the Sun with Our Solar Solutions – Your
              Partner for Sustainable Energy
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full transform transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Contact Us
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white" id="about-us">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              About Our Company
            </h3>
            <p
              className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Welcome to our solar energy solutions company, your partner in
              transforming solar energy into a profitable and sustainable
              investment for your business. Within our comprehensive B2B
              segment, we offer customized roof-mounted solar panel solutions
              for commercial properties. We strive to make the transition to
              solar energy smooth and profitable for businesses.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="services">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="zoom-in"
            >
              Our Comprehensive Solution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Free Property Analysis",
                  icon: <Sun className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Our experienced team of project planners conducts a thorough and free analysis of your roof. We identify the optimal placements to maximize solar energy extraction.",
                  animation: "flip-left",
                },
                {
                  title: "Free Case Study",
                  icon: <BarChart className="h-8 w-8 text-yellow-500" />,
                  description:
                    "We offer a completely free case study that includes all financial parameters to assess the profitability of the investment. We provide detailed information on expected electricity production and returns.",
                  animation: "flip-up",
                },
                {
                  title: "High-Quality Project Management",
                  icon: <Users className="h-8 w-8 text-yellow-500" />,
                  description:
                    "From the first meeting to the final inspection, we take care of the entire project chain. Our dedicated project management ensures efficiency and high quality through every step of the installation.",
                  animation: "flip-down",
                },
                {
                  title: "Internal Structural Analysis",
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Our internal engineers analyze the property's drawings and conduct thorough site visits to ensure that the roof's strength is sufficient for mounting solar panels.",
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

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="zoom-in"
            >
              Why Choose Our Solar Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainability Focus",
                  icon: <Leaf className="h-8 w-8 text-yellow-600" />,
                  description:
                    "We strive to make sustainable energy accessible and profitable for businesses. By choosing our solutions, you're choosing a sustainable future for your operations.",
                },
                {
                  title: "Technological Innovation",
                  icon: <Cpu className="h-8 w-8 text-yellow-600" />,
                  description:
                    "We embrace and integrate the latest technological innovations to ensure your business has access to cutting-edge solar energy technology.",
                },
                {
                  title: "Customized Solutions",
                  icon: <Settings className="h-8 w-8 text-yellow-600" />,
                  description:
                    "Our solar panel solutions are tailored to meet your specific needs and goals.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="shadow-none border-none transform transition-transform hover:scale-105 duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
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

        <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div
                className="md:w-1/2 mb-8 md:mb-0"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Image
                  src="/images/solar-panel.jpg"
                  alt="Solar panels on roof"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div
                className="md:w-1/2 md:pl-8 text-white"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <h3 className="text-3xl font-bold mb-4">
                  Technological Advancements and Global Growth
                </h3>
                <p className="opacity-90 mb-4">
                  The technology behind solar energy has made significant
                  advancements in recent years, leading to increased efficiency
                  and accessibility. Modern solar panels have been developed
                  with higher efficiencies and decreasing production costs,
                  making them more attractive and economically advantageous for
                  businesses worldwide.
                </p>
                <ul className="list-disc list-inside opacity-90 mb-4">
                  {[
                    "Higher efficiency and performance",
                    "Decreasing production costs",
                    "Improved durability and lifespan",
                    "Smart monitoring and optimization",
                  ].map((item, index) => (
                    <li
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={600 + index * 100}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full transform transition-transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  Learn More About the Technology
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" id="contact">
          <div className="container mx-auto px-4 text-center">
            <h3
              className="text-3xl font-bold mb-4 text-gray-800"
              data-aos="zoom-in"
            >
              Make the Sun Your Most Profitable Business Partner
            </h3>
            <p
              className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact us today to begin the journey towards a greener and more
              economically sustainable future for your business.
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 text-lg px-8 py-3 rounded-full transform transition-transform hover:scale-110"
              data-aos="zoom-in"
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
