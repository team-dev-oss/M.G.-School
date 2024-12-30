import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              Principal Desk
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
              <span className="text-blue-600">Principal-Desk</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="container flex flex-col items-center mx-auto px-4 py-12">
          <div className="flex justify-center">
            <Image alt="Principal" src="/Ajay.png" width={500} height={500} />
          </div>
          <div className="md:w-2/3 flex justify-center items-center mt-7">
            <div className="space-y-6 text-gray-600 leading-relaxed ">
              <p>
                Dear Parents, We feel pleasure and pride that you and your child
                have a wish to be a member of the M.G. Family. M.G. PUBLIC
                SCHOOL is being run by OM EDUCATION SOCIETY (Regd.) having a
                broader aim. Regarding education, the vision of M.G. is to
                develop the virtues of the three H&aos;s (HEALTH, HEART, HAND) in
                your child that can develop your child as a responsible citizen
                of our country and society and its foundation is our Sanskar -
                Culture. The whole world regards our Sanskar - Education
                provided in Gurukuls when our country was called Vishavguru. But
                new techniques and inventions are being introduced in the world.
                We cannot neglect these new scientific inventions and
                approaches. Both Sanskar and Modern Approach are the need of the
                hour.
              </p>
              <p>
                CONGRATULATIONS! You are going to be a member of an institution
                that has a vision to develop Sanskar with a Modern Approach. Its
                name, M.G., means Modern Gurukul.
              </p>
              <p>Warm regards, Ajay Bhardwaj</p>
            </div>
          </div>
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
