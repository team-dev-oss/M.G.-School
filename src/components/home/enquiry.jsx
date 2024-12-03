import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Building, ChevronDown, GraduationCap, HandHeart, Users } from 'lucide-react'

function StatCard({ icon, number, label }) {
    return (
      <div className="bg-gray-900 p-6 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <div className="text-3xl font-bold text-white mb-2">{number}</div>
        <div className="text-gray-400 text-sm">{label}</div>
      </div>
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
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    setIsSubmitting(false)
  }
  return (
    <div className="min-h-screen">
      {/* Distinctiveness Section */}
      <section className="bg-slate-900 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            Distinctiveness of ZAD Global School
          </h1>

          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-white">
                  &ldquo;The world is changed by your example, not your
                  opinion.&rdquo;
                </span>{" "}
                School believes to empower students in every aspect of life.
                Aiming for holistic development brings out the importance to
                understand the relevance of being independent since independence
                comes with responsibility.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                Education means to teach pupils how to think. We abide by the
                rules of learning and that is to evoke curiosity in minds of our
                young scholars. It is about training and guiding them to go
                about the various disciplines and they will conquer the rest.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                We focus on student centered education. Development of every
                student&apos;s intellectual, emotional, social, physical,
                creative and spiritual importance is ensured. Sports and
                co-curricular activities are emphasised equally for all-round
                development. The whole purpose of education is to bring out the
                potentialities and build a resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <div className="min-h-screen bg-gray-500 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">Make an Enquiry</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                Fill This Form To Request{' '}
                <span className="block text-yellow-400">
                  Prospectus & Fee Schedule.
                </span>
              </h1>
              <p className="text-gray-400 mt-4">
                Please complete the following enquiry form to get a call back from our staff.
              </p>
            </div>

            <div className="flex items-start space-x-6 border-t border-gray-800 pt-8">
              <div className="bg-red-600 p-3 rounded-full">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-white" />
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Transform Access To Education
                </h2>
                <p className="mt-2 text-gray-400">
                  Times Are Changing, But What About Your Child&apos;s Education. 
                  ZAD Global School Promotes Interactive Learning With Our E-Learning System.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Fill Your Details</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register('address', { required: 'Address is required' })}
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="relative">
                <select
                  {...register('admissionClass', { required: 'Please select a class' })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
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
                  <p className="mt-1 text-sm text-red-600">{errors.admissionClass.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('comment')}
                  rows={4}
                  placeholder="Comment"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      <div className="relative bg-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-red-500">Enhanced learning With</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Cognitive Development
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A Perfect Balance Between Academics & Co Curricular Activities Is The Benchmark Of ZGS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={<Building className="w-8 h-8 text-red-500" />}
              number="4"
              label="Campuses"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-red-500" />}
              number="150+"
              label="Teaching & Non-Teaching Staff"
            />
            <StatCard
              icon={<GraduationCap className="w-8 h-8 text-red-500" />}
              number="2,500+"
              label="ZGS Students"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
