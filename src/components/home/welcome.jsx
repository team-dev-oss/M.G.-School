import { Lightbulb, Users, Calendar, CheckCircle } from 'lucide-react'
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
  const features = [
    "Modern Facilities: Our school is equipped with the latest infrastructure so that learning is enjoyable and effective",
    "Focus on Social Skills: We teach children good manners and important life skills.",
    "Recognize each child's strength: We understand and support each child's unique ability.",
    "Hands-on learning: We believe in learning through fun activities and real-life experiences.",
    "Caring and skilled teachers: Our teachers are passionate and well-trained to help your child develop.",
    "Safe and Comfortable Campus with CCTV: A secure place for your child to learn and grow.",
  ]

  return (
    <main className="min-h-screen pt-10 bg-white">
    {/* Quick Links Section */}
    <section className="container mx-auto flex justify-center items-center px-4 py-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 max-w-5xl  gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { href: "/initiatives", icon: Lightbulb, title: "Initiatives", description: "Know About Our Initiatives" },
          { href: "/co-curricular", icon: Users, title: "Co Curricular", description: "View Co-Curricular Department Activities" },
          { href: "/news-events", icon: Calendar, title: "News & Events", description: "View Upcoming Events" },
        ].map((item, index) => (
          <motion.div
            key={item.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.href} className="p-6 bg-white border-b-8 border-yellow-500 border rounded-lg shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-start h-20  space-x-4">
                <item.icon className="w-12 h-12 text-gray-700 hover:text-blue-800" />
                <div className='w-52'>
                  <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-gray-500 mt-1">{item.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Welcome Section */}
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Images */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="gap-4">
            <motion.div 
              className="relative h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/3.jpg"
                alt="Student in school uniform"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            {/* <motion.div 
              className="relative h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/placeholder.svg?height=400&width=300"
                alt="Student smiling"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div> */}
          </div>
          
          {/* Trust Badge */}
          <motion.div 
            className="absolute bottom-1 right-2 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="bg-red-50 p-2 rounded-full">
              <Users className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Trusted by 2600</p>
              <p className="text-gray-600">Parents</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            <motion.p 
              className="text-blue-500 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A very warm welcome to
            </motion.p>
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              M.G Public School, <br />
              Jhajjar
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              At MG Public School, Jhajjar, we believe every child is a great potential and here for us to grow and succeed in their lives.
            </motion.p>
          </div>

          <motion.ul 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <Link 
              href="/about" 
              className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              KNOW MORE
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </main>
  )
}

