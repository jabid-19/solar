"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border-yellow-400 focus:ring-yellow-500 focus:border-yellow-500"
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border-yellow-400 focus:ring-yellow-500 focus:border-yellow-500"
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="border-yellow-400 focus:ring-yellow-500 focus:border-yellow-500"
      />
      <Button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get in Touch
      </Button>
    </form>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md shadow-2xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            We&apos;re excited to hear from you! Drop us a line and let&apos;s
            start a conversation.
          </p>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
