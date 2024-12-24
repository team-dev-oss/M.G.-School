import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
            OUR HISTORY
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
              <span className="text-red-500">OUR HISTORY</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            OUR HISTORY
          </h2> */}

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
              Our school has been serving the nation for over ten years. It was
              established on 23rd March 2014, following the vision of the Late
              Shri Om Prakash Bhardwaj. The school is affiliated with the
              Central Board of Secondary Education (CBSE), and we teach in
              English, making sure our students are prepared for the modern
              world.
            </p>

            <p>
              We aim to provide a balanced education that focuses on both
              academics and overall development. Our school has a wide range of
              facilities to support this vision. We have a well-established
              kindergarten for young children, where they can begin their
              learning journey in a fun and safe environment. Along with this,
              we have a spacious library filled with books to help students
              learn and explore different subjects.
            </p>
            <p>
              The school also has well-equipped science and computer
              laboratories, allowing students to experience hands-on learning.
              These labs help our students understand subjects in a practical
              way and make learning more interesting. Our classrooms are
              designed to be interactive and engaging, with the latest
              technology to support lessons and make learning enjoyable.
            </p>
            <p>
              Sports play an important role in our school as well. We believe in
              the value of physical activity and teamwork, which is why we offer
              various sports facilities. Whether it’s cricket, football,
              basketball, or athletics, our students have the opportunity to
              participate in many games and develop important life skills such
              as discipline, teamwork, and leadership.
            </p>
            <p>
              At our school, we are committed to providing a well-rounded
              education, which includes extracurricular activities like music,
              dance, art, and drama. These activities help students discover
              their hidden talents and express themselves creatively. We believe
              in building not only academic knowledge but also confidence,
              teamwork, and social skills.
            </p>

            <p>
              Our school has always focused on excellence in all areas,
              including academics, sports, and extracurricular activities. We
              encourage our students to work hard and aim high, providing them
              with the tools and support they need to succeed. We believe that
              every student has the potential to do great things, and we are
              here to help them achieve their goals.
            </p>

            <p>
              Overall, our school is a place where students are nurtured,
              encouraged, and supported to reach their full potential. We strive
              to create a positive and safe environment where learning is
              exciting, and every child feels valued and motivated to do their
              best.
            </p>
          </div>
        </main>
      </div>
    </MaxWidthWrapper>
  );
}