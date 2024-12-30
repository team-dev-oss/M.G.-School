import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";

export default function MissionPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              MISSION & VISSION
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
              <span className="text-blue-600">MISSION & VISSION</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            ABOUT M.G. Public SCHOOL
          </h2> */}

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
              Our school’s name reflects our goal: we want to inspire students
              with true knowledge, mixing our rich culture with today’s modern
              world. In today’s times, it’s important for young people to learn
              both academic knowledge and moral values. Both are needed to
              become successful and good individuals.
            </p>
            <p>
              We work hard to shape our students into responsible, honest, and
              caring people. From the beginning, we teach our students about our
              culture and values. We celebrate important days by holding annual
              ceremonies and host monthly competitions to help them learn and
              grow in different ways. We believe that “heroes aren’t born, they
              are made,” which means we help our students develop the qualities
              of a hero, like courage, kindness, and honesty.
            </p>
            <p className="font-medium text-gray-800 italic">
              Our ultimate goal is for every student of our school, known as a
              Modern Gurukulite, to become a good and responsible person, ready
              to face the challenges of the world while staying true to their
              values.
            </p>
          </div>
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
