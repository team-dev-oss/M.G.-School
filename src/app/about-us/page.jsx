import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";

export default function AboutPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-9">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              About M.G. Public School
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
              <span className="text-red-500">About M.G. Public School</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            ABOUT M.G. Public SCHOOL
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
              <span className="font-medium text-gray-800">
                Welcome to M.G. Public School
              </span>
              , Dubaldhan, District Jhajjar, Haryana, where we are committed to
              providing quality education for an encouraging future leaders. Our
              mission is to shape young minds into individuals who can lead with
              knowledge, humanity, and honesty.
            </p>

            <p>
              At MG Public School, we believe in creating an environment that
              fosters overall development. Our modern infrastructure,
              well-equipped classrooms, science labs, libraries, sports
              facilities, and technology-driven learning spaces ensure that
              students have everything they need for their academic and personal
              growth.
            </p>
            <p>
              We focus on delivering a comprehensive education that encourages
              critical thinking, creativity, and character building. Our
              dedicated and experienced teachers work hard to ignite a passion
              for learning in each child, preparing them to face the challenges
              of tomorrow.
            </p>
            <p>
              We take pride in the success of our alumni who have made their
              mark in various fields. Through a wide range of extracurricular
              activities, leadership programs, and community service, we promote
              qualities of leadership and social responsibility among our
              students.
            </p>
            <p>
              Located in the heart of Dubaldhan, MG Public School is a place
              where students bloom academically and personally. We aim to equip
              them with the skills, values, and leadership qualities necessary
              for a successful future.
            </p>

            <p className="font-medium text-gray-800 italic">
              Be a part of this enriching journey towards a brighter tomorrow!
            </p>
          </div>
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
