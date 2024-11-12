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
            SolarTech Lösningar
          </h1>
          <p
            className="text-xl opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Vi formar framtiden för hållbara energilösningar
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* About Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Om Oss
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-up">
              <p className="text-gray-700">
                SolarTech Lösningar, grundat 2022 av Johan Svensson, är en
                passionerad aktör inom hållbar energi. Med huvudkontor i
                Stockholm och en dedikerad personal på sex personer (från
                oktober 2024), strävar vi efter att vara pionjärer inom förnybar
                energi och bidra till en grönare framtid för kommande
                generationer.
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
                  Vårt Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Johan Svensson - Grundare</li>
                  <li>Emma Johansson</li>
                  <li>Mikael Chen</li>
                  <li>Sara Wilhelmsson</li>
                  <li>David Björk</li>
                  <li>Lisa Garberg</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Products and Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Våra Produkter och Tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "Solpanelssystem",
                content:
                  "Vi levererar solpanelssystem för både mark- och takinstallationer över hela landet.",
              },
              {
                icon: Battery,
                title: "Batterilösningar",
                content:
                  "Kompletta batterilösningar för lagring och nätverksstöd.",
              },
              {
                icon: Building2,
                title: "Takrenovering",
                content:
                  "Professionella takrenoveringar som förberedelse för solpanelsinstallationer.",
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
            Serviceavtal
          </h2>
          <Card className="shadow-none" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-amber-400" />
                Omfattande Servicelösningar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Vi erbjuder serviceavtal för underhåll av solpanelssystem och
                batterisystem. På SolarTech strävar vi efter att skapa en
                komplett och långsiktig lösning för våra kunder.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Varför Välja SolarTech?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Senaste Tekniska Framstegen",
                description:
                  "Vi använder de senaste tekniska framstegen för att säkerställa att våra kunder har tillgång till de mest avancerade och effektiva sollösningarna.",
              },
              {
                title: "Anpassade Lösningar",
                description:
                  "Vår expertis möjliggör skräddarsydda lösningar baserade på dina specifika behov och krav.",
              },
              {
                title: "Framtidsorienterad Vision",
                description:
                  "På SolarTech ser vi fram emot en grönare framtid och strävar efter att vara ledande inom utvecklingen av sol- och batteriteknik.",
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
            Kontakta Oss
          </h2>
          <p
            className="text-xl text-gray-700 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Forma en hållbar energiframtid för ditt företag med SolarTech
          </p>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-colors hover:bg-primary/90">
              <Phone className="h-6 w-6 text-white" />
              Kontakta oss idag
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
