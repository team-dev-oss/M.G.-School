import { Lightbulb, Users, Calendar, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
  const features = [
    "AC Campus With CCTV Surveillance",
    "State Of-The-Art Infrastructure",
    "Social Etiquette & Skill Development",
    "Catering To The Multiple Intelligences Of A Child",
    "Hands-On Learning Techniques",
    "Passionate & Trained Staff",
    "Theatre in Education & Much More..."
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/initiatives" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <Lightbulb className="w-12 h-12 text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Initiatives</h2>
                <p className="text-gray-500 mt-1">Know About Our Initiatives</p>
              </div>
            </div>
          </Link>

          <Link href="/co-curricular" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <Users className="w-12 h-12 text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Co Curricular</h2>
                <p className="text-gray-500 mt-1">View Co-Curricular Department Activities</p>
              </div>
            </div>
          </Link>

          <Link href="/news-events" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <Calendar className="w-12 h-12 text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">News & Events</h2>
                <p className="text-gray-500 mt-1">View Upcoming Events</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[400px]">
                <Image 
                  src="/placeholder.svg?height=400&width=300"
                  alt="Student in school uniform"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[400px]">
                <Image 
                  src="/placeholder.svg?height=400&width=300"
                  alt="Student smiling"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
              <div className="bg-red-50 p-2 rounded-full">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Trusted by 2600</p>
                <p className="text-gray-600">Parents</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-red-500 mb-2">A very warm welcome to</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                ZAD Global School, <br />
                Rohtak
              </h1>
              <p className="text-gray-600 mb-8">
                In every child lies great potential; the promise of wonderful things to come. At ZAD Global School is where eternal values are cultivated in young and impressionable minds.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/about" 
              className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

