"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sun,
  Battery,
  Zap,
  MessageCircle,
  UserCheck,
  FileText,
  Calendar,
  Wrench,
  Settings,
  Home,
  Sparkles,
  ArrowRight,
} from "lucide-react";
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
      offset: 100,
      delay: 100,
    });

    // Refresh AOS when all images are loaded
    window.addEventListener("load", () => {
      AOS.refresh();
    });
  }, []);

  const steps = [
    {
      title: "Gratis Rådgivning",
      description:
        "Boka ett samtal med en av våra rådgivare för en första bedömning.",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Boka konsultation",
    },
    {
      title: "Personligt Samtal med Ingenjör",
      description:
        "En elingenjör diskuterar dina behov och förutsättningar i detalj, inklusive energilagring, solenergi och laddboxar.",
      icon: <UserCheck className="h-6 w-6" />,
    },
    {
      title: "Skräddarsydd Offert",
      description:
        "Få en offert som kombinerar våra expertråd och dina preferenser.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Bokning & Beställning",
      description:
        "När offerten är godkänd bokas ditt projekt och material beställs.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Installation",
      description:
        "Vårt team installerar och optimerar ditt system för att ge dig maximalt värde.",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Besiktning & Driftsättning",
      description:
        "Vi genomför en noggrann besiktning och startar upp ditt system.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "Skötselråd",
      description:
        "Vi ger dig skötselråd för att systemet ska hålla så länge som möjligt.",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Uppföljning & Support",
      description:
        "Regelbundna uppföljningar för att säkerställa fortsatt kundnöjdhet och ge möjligheter till framtida besparingar.",
      icon: <Sparkles className="h-6 w-6" />,
    },
  ];

  interface ServiceProps {
    title: string;
    description: string;
    imageSrc: string;
  }

  const services: ServiceProps[] = [
    {
      title: "Villapaket & Erbjudanden",
      description:
        "Ta det första steget mot energioberoende med våra skräddarsydda villapaket.",
      imageSrc: "/images/5.jpg",
    },
    {
      title: "Solpaneler",
      description:
        "Upptäck kraften i solenergi med våra högeffektiva solpanelslösningar.",
      imageSrc: "/images/4.jpg",
    },
    {
      title: "Laddboxar",
      description:
        "Ladda din elbil smidigt och säkert med våra moderna laddboxar.",
      imageSrc: "/images/3.jpg",
    },
    {
      title: "Batterilösningar",
      description:
        "Maximera din energieffektivitet med våra avancerade batterilösningar.",
      imageSrc: "/images/2.jpg",
    },
    {
      title: "Publik Laddning",
      description:
        "Idealisk för bostadsrättsföreningar, fastighetsägare, kommuner och företag.",
      imageSrc: "/images/1.jpg",
    },
  ];

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
                Kraften i Solenergi för en Hållbar Framtid
              </h1>
              <p
                className="text-base sm:text-lg mb-6 md:mb-8 text-yellow-700 max-w-4xl px-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Upptäck hur våra avancerade solpaneler, batterilagringslösningar
                och smarta energisystem kan förändra din energiförbrukning och
                minska ditt koldioxidavtryck.
              </p>
              <Link href="/contact">
                <Button
                  className="bg-primary text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Få Gratis Offert
                </Button>
              </Link>
            </section>

            <section className="z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-16 rounded-3xl overflow-hidden">
              {[
                {
                  title: "10,000+ Installationer",
                  subtitle: "Nöjda Kunder",
                },
                { title: "25 Års Garanti", subtitle: "På Alla Solpaneler" },
                {
                  title: "Upp till 70% Besparingar",
                  subtitle: "På Energikostnader",
                },
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
              Leder Solenergirevolutionen
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
            Våra Huvudprodukter
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: (
                  <Sun className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Solpaneler",
                description:
                  "Högpresterande solpaneler som fångar maximalt med solljus och omvandlar det till ren, förnybar energi för ditt hem eller företag.",
              },
              {
                icon: (
                  <Battery className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Batterilagring",
                description:
                  "Avancerade batterisystem som lagrar överskottsenergi från solenergin, så du har kraft även när solen inte skiner.",
              },
              {
                icon: (
                  <Zap className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Smart Energioptimering",
                description:
                  "Intelligenta system som optimerar din energianvändning, maximerar effektivitet och minskar ditt koldioxidavtryck.",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-white shadow-none border-none text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col justify-center items-center gap-2 text-yellow-800">
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

        <section className="py-12 md:mb-40 mb-20">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center text-[#8B4513]"
              data-aos="fade-down"
            >
              Processen
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary p-2 rounded-full text-white">
                      {step.icon}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                    {step.action && (
                      <Link href="/contact">
                        <Button className="mt-4 w-full rounded-full">
                          {step.action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="py-12 space-y-8">
          <h2
            className="text-3xl font-bold text-center text-[#8B4513]"
            data-aos="fade-down"
          >
            Våra Erbjudanden
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`container grid gap-8 px-4 py-10 ${
                  index % 2 === 0
                    ? "md:grid-cols-[2fr,3fr]"
                    : "md:grid-cols-[3fr,2fr] md:[&>div]:order-2 md:[&>img]:order-1"
                }`}
                // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                // data-aos-delay={index * 100}
              >
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-[#8B4513]">
                    {service.title}
                  </h3>
                  <p className="text-[#8B4513]/80 text-lg">
                    {service.description}
                  </p>
                </div>
                <Image
                  src={service.imageSrc}
                  alt={`${service.title} illustration`}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <section className="relative py-12 md:py-20 mb-20 md:mb-40 px-4 md:px-10 bg-gradient-to-b to-white rounded-xl flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-2 md:px-4 text-center z-10 relative">
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-yellow-600"
              // data-aos="fade-down"
            >
              Anslut dig till den Rena Energirevolutionen
            </p>
            <p
              className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 text-yellow-600"
              // data-aos="fade-up"
              // data-aos-delay="200"
            >
              Med stigande energikostnader och växande miljöhänsyn har det
              aldrig funnits en bättre tid att byta till solenergi. Låt oss
              hjälpa dig att göra en positiv inverkan på både din plånbok och
              planeten.
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto"
              // data-aos="zoom-in"
              // data-aos-delay="400"
            >
              Boka Konsultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
