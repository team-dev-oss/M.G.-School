import { GraduationCap,Building, Users,  } from "lucide-react";
import BookingForm from "@/components/BookingForm";

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
  

export default function SchoolDistinctiveness() {
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
      <section className="relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <p className="text-sm uppercase tracking-wider mb-4">
                Make an Enquiry
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fill This Form To Request{" "}
                <span className="text-yellow-400">
                  Prospectus & Fee Schedule.
                </span>
              </h2>
              <p className="text-gray-300">
                Please complete the following enquiry form to get a call back
                from our staff.
              </p>
            </div>
          </div>
        </div>
        <div className="md:absolute md:top-10 md:right-[20rem]  flex justify-center ">
            <BookingForm/>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="bg-red-600 rounded-full p-4 shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Transform Access To Education
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Times Are Changing, But What About Your Child&apos;s
                  Education. ZAD Global School Promotes Interactive Learning
                  With Our E-Learning System.
                </p>
              </div>
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
