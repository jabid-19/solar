"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Battery, Sun, Wrench, Users, Phone } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-amber-800 bg-gradient-to-b from-amber-500 to-white py-20">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-down"
          >
            SolarTech Solutions
          </h1>
          <p
            className="text-xl opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Shaping the future of sustainable energy solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* About Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-up">
              <p className="text-gray-700">
                SolarTech Solutions, founded in 2022 by John Smith, is a
                passionate player in the sustainable energy industry. With
                headquarters in New York and a dedicated staff of six (as of
                October 2024), we strive to be pioneers in renewable energy and
                contribute to a greener future for generations to come.
              </p>
            </div>
            <Card
              className="shadow-none"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-yellow-400" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1">
                  <li>John Smith - Founder</li>
                  <li>Emily Johnson</li>
                  <li>Michael Chen</li>
                  <li>Sarah Williams</li>
                  <li>David Brown</li>
                  <li>Lisa Garcia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Products and Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Our Products and Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "Solar Panel Systems",
                content:
                  "We deliver solar panel systems for both ground and roof installations across the country.",
              },
              {
                icon: Battery,
                title: "Battery Solutions",
                content:
                  "Turnkey battery solutions for storage and grid support services.",
              },
              {
                icon: Building2,
                title: "Roof Renovations",
                content:
                  "Professional roof renovations in preparation for solar panel installations.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="shadow-none"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <item.icon className="h-6 w-6 text-amber-400" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service and Maintenance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Service Agreements
          </h2>
          <Card className="shadow-none" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-amber-400" />
                Comprehensive Service Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We offer service agreements for maintenance of solar panel
                systems and battery systems. At SolarTech, we strive to create a
                complete and long-term solution for our customers.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Why Choose SolarTech Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latest Technological Advancements",
                description:
                  "We embrace the latest technological advancements to ensure our customers have access to the most advanced and efficient solar solutions.",
              },
              {
                title: "Customized Approaches",
                description:
                  "Our expertise enables tailored solutions based on your specific needs and requirements.",
              },
              {
                title: "Future-Oriented Vision",
                description:
                  "At SolarTech Solutions, we look forward to a greener future and strive to be at the forefront of solar and battery technology development.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="shadow-none"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Contact Us
          </h2>
          <p
            className="text-xl text-gray-700 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Shape a sustainable energy future for your business with SolarTech
            Solutions
          </p>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-colors hover:bg-primary/90">
              <Phone className="h-6 w-6 text-white" />
              Contact us today
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
