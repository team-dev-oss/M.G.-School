import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Building, Users, GraduationCap, HandHeart, ChevronDown } from 'lucide-react'

function StatCard({ icon, number, label }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="flex justify-center mb-4"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6 }}
      >
        {number}
      </motion.div>
      <motion.div
        className="text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

const admissionOptions = [
  'Pre-Primary',
  'Primary (Class 1-5)',
  'Middle School (Class 6-8)',
  'High School (Class 9-10)',
  'Senior Secondary (Class 11-12)'
]

export default function SchoolDistinctiveness() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    setIsSubmitting(false)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-blue-500">
      {/* Distinctiveness Section */}
      <DistinctivenessSection />

      {/* Enquiry Form Section */}
      <EnquiryFormSection 
        isSubmitting={isSubmitting} 
        onSubmit={onSubmit} 
        register={register} 
        handleSubmit={handleSubmit} 
        errors={errors} 
      />

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}

function DistinctivenessSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.3 } }
      }}
      className="py-16 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-white text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Distinctiveness of M.G Public School
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          {[
            "The world is changed by your example, not your opinion. School believes to empower students in every aspect of life. Aiming for holistic development brings out the importance to understand the relevance of being independent since independence comes with responsibility.",
            "Education means to teach pupils how to think. We abide by the rules of learning and that is to evoke curiosity in minds of our young scholars. It is about training and guiding them to go about the various disciplines and they will conquer the rest.",
            "We focus on student centered education. Development of every student's intellectual, emotional, social, physical, creative and spiritual importance is ensured. Sports and co-curricular activities are emphasised equally for all-round development. The whole purpose of education is to bring out the potentialities and build a resource."
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-[#000] bg-opacity-50 p-6 rounded-lg shadow-xl"
            >
              <p className="text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function EnquiryFormSection({ isSubmitting, onSubmit, register, handleSubmit, errors }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="min-h-screen relative overflow-hidden">
      <Image
        src="/12.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-yellow-500">Make an Enquiry</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                Fill This Form To Request{' '}
                <span className="block text-yellow-500">
                  Prospectus & Fee Schedule.
                </span>
              </h1>
              <p className="text-gray-300 mt-4">
                Please complete the following enquiry form to get a call back from our staff.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="flex items-start space-x-6 border-t border-gray-700 pt-8"
            >
              <div className="bg-yellow-500 p-3 rounded-full">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-white" />
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Transform Access To Education
                </h2>
                <p className="mt-2 text-gray-300">
                  Times Are Changing, But What About Your Child&apos;s Education. 
                  M.G Public School Promotes Interactive Learning With Our E-Learning System.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 md:p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Fill Your Details</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-yellow-500">{errors.name.message}</p>
                )}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-yellow-500">{errors.phone.message}</p>
                  )}
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                  {...register('address', { required: 'Address is required' })}
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-yellow-500">{errors.address.message}</p>
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
                <select
                  {...register('admissionClass', { required: 'Please select a class' })}
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
                {errors.admissionClass && (
                  <p className="mt-1 text-sm text-yellow-500">{errors.admissionClass.message}</p>
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <textarea
                  {...register('comment')}
                  rows={4}
                  placeholder="Comment"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function StatsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.3 } }
      }}
      className="relative bg-yellow-500 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-blue-700">Enhanced learning With</p>
              <h2 className="text-4xl md:text-5xl font-bold text-blue">
                Cognitive Development
              </h2>
            </div>
            <p className="text-black leading-relaxed">
              A Perfect Balance Between Academics & Co Curricular Activities Is The Benchmark Of M.G Public School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={<Building className="w-8 h-8 text-blue-600" />}
              number="4"
              label="Campuses"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              number="150+"
              label="Teaching & Non-Teaching Staff"
            />
            <StatCard
              icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
              number="2,500+"
              label="ZGS Students"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

