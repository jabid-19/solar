"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function SolarSystems() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen text-gray-800 ">
      <div className="floating-circle w-full md:w-[800px] h-[800px] rounded-full blur-3xl bg-[#ffa916] opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="min-h-[400px] md:h-[600px] h-[700px] p-4 rounded-2xl relative overflow-hidden my-4">
          <div className="absolute inset-0 p-4 md:p-20">
            <section className="text-center mb-8 md:mb-16 flex flex-col items-center z-20">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-800 max-w-4xl"
                data-aos="fade-down"
              >
                Powering the Future with Solar Energy
              </h1>
              <p
                className="text-base sm:text-lg mb-6 md:mb-8 text-yellow-700 max-w-4xl px-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Discover how our cutting-edge solar panels and battery storage
                solutions can transform your energy consumption and reduce your
                carbon footprint.
              </p>
              <Link href="/kontakt">
                <Button
                  className="bg-primary text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </section>

            <section className="z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-16 rounded-3xl overflow-hidden">
              {[
                {
                  title: "10,000+ Installations",
                  subtitle: "Satisfied Customers",
                },
                { title: "25 Year Warranty", subtitle: "On All Solar Panels" },
                { title: "Up to 70% Savings", subtitle: "On Energy Costs" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-none"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <CardHeader>
                    <CardTitle className="text-yellow-800">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </div>

        <div className="bg-white text-gray-900 flex flex-col items-center py-16 md:py-32 mb-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-yellow-800"
              data-aos="fade-down"
            >
              Leading the Solar Revolution
            </p>
            <p
              className="text-center mb-8 text-base md:text-lg text-yellow-800 px-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We are at the forefront of solar technology, providing innovative
              solutions for homes and businesses. Our commitment to
              sustainability drives us to deliver the most efficient and
              reliable solar systems on the market.
            </p>
            <Image
              src="/images/solar-panel.jpg"
              alt="Solar panel installation"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </div>

        {/* Core Products Section */}
        <section className="mb-20 md:mb-40 px-2">
          <p
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-yellow-800"
            data-aos="fade-down"
          >
            Our Core Products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: (
                  <Sun className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Solar Panels",
                description:
                  "High-efficiency solar panels that capture maximum sunlight and convert it into clean, renewable energy for your home or business.",
              },
              {
                icon: (
                  <Battery className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Battery Storage",
                description:
                  "Advanced battery systems that store excess solar energy, ensuring you have power even when the sun isn't shining.",
              },
              {
                icon: (
                  <Zap className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Smart Energy Management",
                description:
                  "Intelligent systems that optimize your energy usage, maximizing efficiency and reducing your carbon footprint.",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    {product.icon}
                    <span>{product.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-40 px-2">
          <div data-aos="fade-right">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-yellow-800">
              Ready to Harness the Power of the Sun?
            </p>
            <p className="mb-6 text-yellow-700 text-sm md:text-base">
              Take the first step towards energy independence and a greener
              future. Our expert team is ready to design a custom solar solution
              tailored to your needs.
            </p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto">
              Get Started Today
            </Button>
          </div>
          <Image
            src="/images/solar-panel.jpg"
            alt="House with solar panels"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-aos="fade-left"
          />
        </section>

        <section className="relative py-12 md:py-20 mb-20 md:mb-40 px-4 md:px-10 bg-gradient-to-b to-white rounded-xl flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-2 md:px-4 text-center z-10 relative">
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-yellow-600"
              data-aos="fade-down"
            >
              Join the Clean Energy Revolution
            </p>
            <p
              className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 text-yellow-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              With rising energy costs and growing environmental concerns,
              there&apos;s never been a better time to switch to solar. Let us
              help you make a positive impact on your wallet and the planet.
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
