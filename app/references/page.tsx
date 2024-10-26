"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Sun,
  Battery,
  Zap,
  BarChart,
  CalendarDays,
  MapPin,
} from "lucide-react";

// TypeScript interfaces
interface InstallationDetails {
  power: string;
  completion: string;
  location: string;
  savings: string;
}

interface Installation {
  name: string;
  description: string;
  details: InstallationDetails;
  tags: string[];
}

interface Installations {
  roof: Installation[];
  ground: Installation[];
}

interface StatsCardProps {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

export default function ReferencesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const installations: Installations = {
    roof: [
      {
        name: "City Office Park",
        description: "Roof-based solar panel system for office building",
        details: {
          power: "250 kW",
          completion: "2024",
          location: "New York",
          savings: "30%",
        },
        tags: ["Solar Panels", "Battery Storage", "Commercial"],
      },
      {
        name: "West Industrial Complex",
        description: "Solar panels on industrial roof with battery storage",
        details: {
          power: "500 kW",
          completion: "2023",
          location: "Chicago",
          savings: "40%",
        },
        tags: ["Industrial", "Hybrid System", "Large Scale"],
      },
      {
        name: "Central Mall",
        description: "Integrated solar solution for shopping center",
        details: {
          power: "300 kW",
          completion: "2024",
          location: "Los Angeles",
          savings: "35%",
        },
        tags: ["Retail", "Smart Control", "Integrated"],
      },
      {
        name: "North Logistics Hub",
        description:
          "High-efficiency solar panel installation for logistics center",
        details: {
          power: "750 kW",
          completion: "2023",
          location: "Seattle",
          savings: "45%",
        },
        tags: ["Logistics", "Maximum Efficiency", "Automation"],
      },
    ],
    ground: [
      {
        name: "South Solar Park",
        description: "Large-scale ground-based solar park",
        details: {
          power: "2 MW",
          completion: "2024",
          location: "Arizona",
          savings: "60%",
        },
        tags: ["Utility Scale", "Smart Grid", "Renewable"],
      },
      {
        name: "East Agricultural Solar",
        description: "Combined solar and battery park for agriculture",
        details: {
          power: "1.5 MW",
          completion: "2023",
          location: "Iowa",
          savings: "50%",
        },
        tags: ["Agri-Solar", "Hybrid", "Self-Sufficient"],
      },
    ],
  };

  const StatsCard: React.FC<StatsCardProps> = ({
    label,
    value,
    icon: Icon,
    delay = 0,
  }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
    >
      <div className="p-2 bg-yellow-50 rounded-full">
        <Icon className="h-5 w-5 text-yellow-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-medium text-gray-600">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="text-yellow-800 bg-gradient-to-b from-amber-500 to-white py-20">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            Our Successful Projects
          </h1>
          <p
            className="text-xl mb-12 text-center max-w-3xl mx-auto opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover how we&apos;re transforming the energy landscape through
            innovative solar energy and battery solutions
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <StatsCard
              label="Total Installed Capacity"
              value="5+ MW"
              icon={Zap}
              delay={0}
            />
            <StatsCard
              label="Completed Projects"
              value="50+"
              icon={Building2}
              delay={100}
            />
            <StatsCard
              label="Battery Solutions"
              value="20+"
              icon={Battery}
              delay={200}
            />
            <StatsCard
              label="CO₂ Savings/Year"
              value="2000+ tons"
              icon={BarChart}
              delay={300}
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="roof" className="w-full">
          <TabsList
            className="grid w-full max-w-md mx-auto grid-cols-2"
            data-aos="fade-up"
          >
            <TabsTrigger
              value="roof"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
            >
              <Building2 className="mr-2 h-4 w-4" />
              Roof Installations
            </TabsTrigger>
            <TabsTrigger
              value="ground"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
            >
              <Sun className="mr-2 h-4 w-4" />
              Ground Installations
            </TabsTrigger>
          </TabsList>

          {(
            Object.keys(installations) as Array<keyof typeof installations>
          ).map((type) => (
            <TabsContent key={type} value={type}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {installations[type].map((installation, index) => (
                  <Card
                    key={index}
                    className="group shadow-none"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center">
                          {type === "roof" ? (
                            <Building2 className="mr-2 h-6 w-6 text-yellow-500" />
                          ) : (
                            <Sun className="mr-2 h-6 w-6 text-yellow-500" />
                          )}
                          {installation.name}
                        </span>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {installation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.power}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.completion}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.savings} savings
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {installation.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p
                className="mt-8 text-gray-700 text-center max-w-2xl mx-auto"
                data-aos="fade-up"
              >
                {type === "roof"
                  ? "Our roof installations have helped businesses reduce their energy costs by up to 40% and secure their energy supply for the future."
                  : "Our ground installations deliver large-scale renewable energy that drives the green transition forward."}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
