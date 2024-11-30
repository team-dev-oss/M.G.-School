import Image from "next/image";

const CourseFeatures = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-10 md:my-16 gap-8 md:gap-32 ">
        <div className="flex flex-col gap-6 mx-4">
          <blockquote className="rounded-lg bg-gray-50 shadow-lg p-4 drop-shadow-2xl w-full md:w-96 flex gap-6">
            <div className="flex items-center justify-center">
              <Image
                src="/diverseCourse.png"
                alt="image"
                width="80"
                height="80"
              />
            </div>
            <div>
              <h1 className="font-semibold">Diverse Courses</h1>
              <p className="mt-2 text-gray-700 text-xs font-light w-3/4">
                From Beginner to Pro: Dive into M Cyber Academy&apos;s
                Cybersecurity Course Universe!
              </p>
            </div>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 shadow-md p-4 drop-shadow-xl w-full md:w-96 flex gap-6 md:ml-16">
            <div className="flex items-center justify-center">
              <Image
                src="/selfpacedCourse.png"
                alt="image"
                width="80"
                height="80"
              />
            </div>
            <div>
              <h1 className="font-semibold">Self-Paced Courses</h1>
              <p className="mt-2 text-gray-700 text-xs font-light w-3/4">
                Fit Security Training into Your Life: Self-Paced Courses for
                Work Professionals.
              </p>
            </div>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 shadow-lg p-4 drop-shadow-2xl w-full md:w-96 flex gap-6">
            <div className="flex items-center justify-center">
              <Image
                src="/interactiveCourse.png"
                alt="image"
                width="80"
                height="80"
              />
            </div>
            <div>
              <h1 className="font-semibold">Interactive Courses</h1>
              <p className="mt-2 text-gray-700 text-xs font-light w-3/4">
                Hack Like a Hacker, Defend Like a Firewall: - Its cyber security
              </p>
            </div>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 shadow-md p-4 drop-shadow-xl w-full md:w-96 flex gap-6 md:ml-16">
            <div className="flex items-center justify-center">
              <Image
                src="/certifiedCourse.png"
                alt="image"
                width="80"
                height="80"
              />
            </div>
            <div>
              <h1 className="font-semibold">Certified Courses</h1>
              <p className="mt-2 text-gray-700 text-xs font-light w-3/4">
                Boost Your career in certified cyber professional courses.
              </p>
            </div>
          </blockquote>
        </div>
        <div className="flex flex-col w-full md:w-2/6  mt-8 md:mt-0 justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-center">
            A vibrant e-learning <br/> platform for you
          </h1>
          <p className="mt-5 text-sm font-light text-center mx-4">
            M Cyber Academy is your gateway to a thrilling career in
            cybersecurity. We offer an engaging and dynamic e-learning platform
            packed with:Interactive courses, Real-world scenarios:, Expert
            instructors, Vibrant community.
          </p>
          {/* <p className="mt-5 text-sm font-light">
      Embrace life&apos;s vastness, venture forth, and discover the
      wonders waiting beyond.{" "}
    </p> */}
        </div>
      </div>
    </>
  );
};

export default CourseFeatures;
