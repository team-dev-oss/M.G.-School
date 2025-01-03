"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  School,
  Building2,
  GraduationCap,
  LandPlot,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import GoogleMapComponent from "@/components/map";
import { contactform } from "@/lib/actions";
import { Button } from "@chakra-ui/react";
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

const admissionOptions = [
  "Pre-Primary",
  "Primary (Class 1-5)",
  "Middle School (Class 6-8)",
  "High School (Class 9-10)",
  "Senior Secondary (Class 11-12)",
];

export default function ContactPage() {
  const [activeCampus, setActiveCampus] = useState(campuses[0]);
  const initValues = { name: "", email: "", phone: "Your Number", message: "" };

  const initState = { isLoading: false, error: "", values: initValues };

  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <>
      <div className=" ">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-16">
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
              <span className="text-blue-600">Contact</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="text-center ">
            <h2 className="text-sm text-blue-600 font-semibold mb-2">
              Contact Us
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              You Can Find Us Here
            </h3>
          </div>

          {/* Campus Tabs */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
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
          </div> */}

          {/* Campus Details */}
          {/* <motion.div
            // key={activeCampus.id}
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
          </motion.div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-blue-600 font-medium">Send a Message</p>
              <h1 className="text-4xl font-bold mt-2">
                We Always Ready to Hear From You
              </h1>
              <p className="text-gray-600 mt-4">
                Fill this form to get a callback from our staff or give your
                valuable feedback.
              </p>
            </div>

            <form action={contactform} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                  />
                </motion.div>
              </div>

              {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                 name="address"
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
                
              </motion.div> */}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <select
                  name="section"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none transition duration-200"
                >
                  <option value="">Admission Query for Class</option>
                  {admissionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Comment"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
              </motion.div>

              <Button
                variant="outline"
                colorScheme="blue"
                isLoading={isLoading}
                disabled={!values.name || !values.email || !values.phone}
                // onClick={onSubmit}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.817194837212!2d76.4592302!3d28.6951145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d7fd7a496b76d%3A0x4567d2eeb1569347!2sMG%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1735575483226!5m2!1sen!2sin"
            width="600"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
