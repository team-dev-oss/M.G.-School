import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";

export default function CurriculumPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              PROGRAMS & CURRICULUM
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
              <span className="text-blue-600">PROGRAMS & CURRICULUM</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          PROGRAMS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
              Every year, we start our celebrations with a big Republic Day
              event. It&apos;s a special day where we honor our country. We also
              celebrate Vasant Panchami and Makar Sankranti with beautiful
              rituals on campus, making the day full of happiness and
              spirituality for everyone. By the time the academic year ends in
              mid-March, students are busy practicing for our big Annual Day and
              felicitation ceremony, which happens every year on 23rd March.
              It’s a time to showcase the hard work and achievements of the
              students.
            </p>
            <p>
            When the new academic year begins, we organize many intra-school competitions. These activities are not just about studies but also help students learn about different cultures and skills beyond academics.
            </p>
            <p>
              We also celebrate many important festivals in our school. We
              celebrate Janmashtami, Maha Shivratri, and Rakshabandhan with
              special events that teach us about our culture and traditions. Our
              grand celebrations for Independence Day and Diwali are always a
              big highlight of the year.
            </p>
            <p className="font-medium text-gray-800 italic">
              These events and celebrations help bring joy, excitement, and a
              sense of togetherness to our school, making it a lively place to
              learn and grow.
            </p>
          </div>
          </div>
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          CURRICULUM
          </h2>
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-left text-gray-800 mb-12">
          ACADEMICS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed mb-20">
            <p>
            Our diverse academic approach frees students from conventional boundaries, enabling them to learn comprehensively through various perspectives, innovative platforms, and methodologies.
            </p>
            <p>
            Modern Gurukul Public School is dedicated to academic excellence by crafting and executing policies that maintain a balance of academic pursuits.
            </p>
            <p>
            Our educational framework encompasses studies, curriculum, academic benchmarks, textual resources, supplementary documents, extracurricular activities, and capacity-building programs to foster holistic development in children.
            </p>
           
          </div>
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-left text-gray-800 mb-12">
          GROOMING
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed mb-20">
            <p>
            Expert professionals conduct grooming sessions aimed at building confidence, enhancing communication, and developing specialized language skills, interests, passions, and abilities.
            </p>
            <p>
            Modern Gurukul Public School is dedicated to academic excellence by crafting and executing policies that maintain a balance of academic pursuits.
            </p>
            <p>
            The faculty also emphasizes teaching students proper etiquette, and politeness, adding elegance to their appearance, speaking and walking skills, and fostering overall positivity and liveliness.
            </p>
           
          </div>
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-left text-gray-800 mb-12">
          CAREER COUNSELLING SESSIONS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed mb-20">
            <p>
            At Modern Gurukul Public School, we offer counseling and support services for both students and their parents. Experts from various fields visit the school to deliver special lectures and conduct awareness programs about different career options.
            </p>
            <p>
            We also have distinctive programs designed to help children relieve stress and address their challenges with swift and open-minded learning.
            </p>
            <p>
            Counselors and psychologists engage in thorough discussions and sessions with parents to equip them with strategies for managing any issues that might arise while raising their children at home.
            </p>
           
          </div>
          </div>
        </main>
      </div>
    </MaxWidthWrapper>
  );
}




// 
// 
// 
// 
