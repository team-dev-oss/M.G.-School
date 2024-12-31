import Image from "next/image";

export default function DirectorMessage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column with Image and Red Bar */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[600px] w-full">
              <Image
                src="/Director.jpg"
                alt="Ms. Prachi Garg speaking at podium"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-0 top-20 rounded-e-lg bottom-0 w-10 h-3/4 bg-yellow-600 flex items-center justify-center">
              <span className="text-white font-medium transform -rotate-90 whitespace-nowrap text-lg tracking-wider">
                MESSAGE FOR PARENTS
              </span>
            </div>
          </div>

          {/* Right Column with Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-blue-600 text-lg font-medium mb-2">
                Director/Principal
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Mr. Ajay Bhardwaj
              </h1>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Education at MG Public School is not just classes and books, but
                it is more about building characters, opening young minds, and
                giving those children experiences they will never forget.
              </p>

              <p>
                As the Director, I would like to assure you that we would always
                give you our best resources for helping the students to get
                better, do their best, and increase their abilities. We care to
                provide the latest methods of learning in a safe, modern setting
                to help them grow.
              </p>
              <p>
                We strive to build a generation of students who not only pass
                the tests but make a better world and society.
              </p>
              <p>
                I wish all our parents and fans to come visit our schools and be
                part of the success story. Together, we can continue to inspire
                our students and guide them onto the right path. I promise to
                meet the expectations of parents and students and set higher
                standards for quality education.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Warm Regards</p>
              {/* <Image
                src="/"
                alt="Ajay Bhardwaj signature"
                width={200}
                height={100}
                className="object-contain"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column with Image and Red Bar */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[600px] w-full object">
              <Image
                src="/Pincipal.jpg"
                alt="Ms. Prachi Garg speaking at podium"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-0 top-20 rounded-e-lg  w-10 h-3/4  bg-yellow-600 flex items-center justify-center">
              <span className="text-white font-medium transform -rotate-90 whitespace-nowrap text-lg tracking-wider">
                MESSAGE FOR PARENTS
              </span>
            </div>
          </div>

          {/* Right Column with Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-blue-600 text-lg font-medium mb-2">
                Vice Principal
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Miss Meetali Bhardwaj
              </h1>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                As the Vice Principal, I am delighted to extend my heartfelt
                greetings to all our students, parents, and the entire school
                community. Modern Gurukul Public School is dedicated to
                fostering an environment where every child can thrive
                academically, socially, and emotionally.
              </p>

              <p>
                Our commitment to excellence is reflected in our diverse
                academic programs, innovative teaching methods, and a wide range
                of extracurricular activities. We believe in nurturing the
                unique potential of each student and providing them with the
                tools they need to succeed in an ever-changing world.
              </p>

              <p>
                To our students, I encourage you to embrace every learning
                opportunity, strive for excellence, and never hesitate to ask
                questions or seek support. Your hard work and determination are
                the keys to unlocking a bright future.
              </p>

              <p>
                Let us continue to work hand in hand to make Modern Gurukul
                Public School a beacon of knowledge, growth, and success.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Warm Regards</p>
              {/* <Image
                src="/placeholder.svg?height=100&width=200"
                alt="Vijay Bhardwaj signature"
                width={200}
                height={100}
                className="object-contain"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column with Image and Red Bar */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[600px] w-full">
              <Image
                src="/VicePrincipal.jpg"
                alt="Ms. Prachi Garg speaking at podium"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-0 top-20 rounded-e-lg  w-10 h-3/4  bg-yellow-600 flex items-center justify-center">
              <span className="text-white font-medium transform -rotate-90 whitespace-nowrap text-lg tracking-wider">
                MESSAGE FOR PARENTS
              </span>
            </div>
          </div>

          {/* Right Column with Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-blue-600 text-lg font-medium mb-2">
                Director/Manager
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Mr. Vijay Bhardwaj
              </h1>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                &quot;Success comes to those who work hard and stays with those
                who don&apos;t rest on their past achievements.&quot; A school
                should be a happy place, full of learning, and it should feel
                like a second home for every child. A good education system is
                the base of any country. Learning helps us become more aware,
                set goals, and achieve them—not just for ourselves but also for
                the good of everyone around us.
              </p>

              <p>
                At MG Public School, we work hard at creating a fun and exciting
                environment for learning. We encourage students to challenge
                themselves and celebrate their creativity, leadership, and
                uniqueness. We make sure every student gets a chance to grow and
                succeed, both in the classroom and outside through other
                activities. We help them develop both those visible skills and
                personal strengths to face challenges.
              </p>
              <p>
                Our objective would be to encourage children to grow in all
                spheres of life and win at everything they do. Let us go forward
                with energy and commitment.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Warm Regards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
