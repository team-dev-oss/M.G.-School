import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";

export default function AboutPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl font-bold text-center">
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
              , We feel pleasure and proud that you and your child have a wish
              to be the member of M.G. Family. M.G. PUBLIC SCHOOL is being run
              by OM EDUCATION SOCIETY (Regd.) having a broader aim. Regarding
              education, the vision of M.G. is to develop such virtues of three
              H&apos;s (HEALTH, HEART, HAND) in your child that can develop your
              child as a responsible citizen of our country and society and its
              foundation is our Sanskar-Based Culture. The whole world regards
              our Sanskar-Based Education that was provided in Gurukuls when our
              country was called Vishavguru. But new techniques and inventions
              are being introduced in the world. We cannot neglect these new
              scientific inventions and approaches. Both Sanskar and Modern
              Approach are the need of the hour.
            </p>

            <p>
              CONGRATULATION! you are going to be a member of such type of
              institution that has a vision to develop Sanskar with Modern
              Approach, so it is named M.G. means Modern Gurukul.
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
