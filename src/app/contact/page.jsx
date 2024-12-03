"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  School,
  Building2,
  GraduationCap,
  LandPlot,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import GoogleMapComponent from "@/components/map";
const campuses = [
  {
    id: "optima",
    name: "The Optima Campus",
    icon: School,
    address: "Govt. Employee Housing Society, Near Omaxe City",
    phone: "+91 85700 60441",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: "omaxe",
    name: "OMAXE Campus",
    icon: Building2,
    address: "OMAXE City, Sector 4",
    phone: "+91 85700 60442",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: "junior",
    name: "Junior Campus",
    icon: GraduationCap,
    address: "Education City, Block A",
    phone: "+91 85700 60443",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: "senior",
    name: "Senior Campus",
    icon: LandPlot,
    address: "Knowledge Park, Phase 2",
    phone: "+91 85700 60444",
    image: "/placeholder.svg?height=600&width=1200",
  },
];

export default function ContactPage() {
  const [activeCampus, setActiveCampus] = useState(campuses[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-9">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              Contact
            </h1>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-red-500">Contact</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-sm text-red-600 font-semibold mb-2">
              Contact Us
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              You Can Find Us Here
            </h3>
          </div>

          {/* Campus Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {campuses.map((campus) => {
              const Icon = campus.icon;
              return (
                <button
                  key={campus.id}
                  onClick={() => setActiveCampus(campus)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    activeCampus.id === campus.id
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{campus.name}</span>
                </button>
              );
            })}
          </div>

          {/* Campus Details */}
          <motion.div
            key={activeCampus.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {activeCampus.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{activeCampus.address}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-5 h-5" />
                      <a
                        href={`tel:${activeCampus.phone}`}
                        className="hover:text-red-600"
                      >
                        {activeCampus.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src={activeCampus.image}
                  alt={`${activeCampus.name} building`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-red-600 font-medium">Send a Message</p>
              <h1 className="text-4xl font-bold mt-2">
                We Always Ready to Hear From You
              </h1>
              <p className="text-gray-600 mt-4">
                Fill this form to get a callback from our staff or give your
                valuable feedback.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  placeholder="Write message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND A MESSAGE"}
              </button>
            </form>
          </div>

          <div className="h-[500px] lg:h-auto flex items-center rounded-lg overflow-hidden">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </>
  );
}
