import { FaVideo, FaClock, FaDownload } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
// const CourseCard = ({title,price,modules,duration,sales}) => {
const CourseCard = () => {
  return (
    <>
      <section id="courses">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-4">
            <div className="mt-2 h-auto">
              <img
                alt="course image"
                src="/Banner_4.jpg"
                className="h-auto w-full rounded-md object-cover"
              />
              <dl>
                {/* <div>
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm text-gray-500">Rs 60,000</dd>
                </div> */}

                <div className="mt-3">
                  <dt className="sr-only">Name</dt>

                  <dd className="font-medium"> Diploma in Cyber Forensics</dd>
                </div>
              </dl>

              {/* <div className="mt-6 flex items-center gap-8 text-xs mb-10">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaClock />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Duration</p>

                    <p className="font-medium">6 months</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaVideo />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Modules</p>

                    <p className="font-medium">14 Modules</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaDownload />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Sales</p>

                    <p className="font-medium">40+ Sales</p>
                  </div>
                </div>
              </div> */}
              <Link href="/course/6679a68c09e106e8800a1932" >
              <Button className="mt-3">View Course</Button>
              </Link>
              
            </div>
            <div className="mt-2 h-auto">
              <img
                alt=""
                src="/Banner_6.jpg"
                className="h-auto w-full rounded-md object-cover"
              />
              <dl>
                {/* <div>
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm text-gray-500">Rs 60,000</dd>
                </div> */}

                <div className="mt-3">
                  <dt className="sr-only">Name</dt>

                  <dd className="font-medium">Diploma In Cyber Security</dd>
                </div>
              </dl>

              {/* <div className="mt-6 flex items-center gap-8 text-xs mb-10">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaClock />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Duration</p>

                    <p className="font-medium">6 months </p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaVideo />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Modules</p>

                    <p className="font-medium">6 Modules</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaDownload />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Sales</p>

                    <p className="font-medium">60+ Sales</p>
                  </div>
                </div>
              </div> */}
              <div className="mt-3">
              <Link href="/course/66798faa09e106e8800a192f">
              <Button>View Course</Button>
              </Link>
              </div>
              
            </div>
            <div className="mt-2 h-auto">
              <img
                alt=""
                src="/Banner_5.jpg"
                className="h-auto w-full rounded-md object-cover"
              />
              <dl>
                {/* <div>
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm text-gray-500">Rs 1,20,000</dd>
                </div> */}

                <div className="mt-3">
                  <dt className="sr-only">Name</dt>

                  <dd className="font-medium">Diploma In Cyber Security</dd>
                </div>
              </dl>

              {/* <div className="mt-6 flex items-center gap-8 text-xs mb-10">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaClock />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Duration</p>

                    <p className="font-medium">1 year </p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaVideo />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Modules</p>

                    <p className="font-medium">14 Modules</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaDownload />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Sales</p>

                    <p className="font-medium">100+ Sales</p>
                  </div>
                </div>
              </div> */}

              <Link href="course/6686e47970323db81a81c0e7">
              <Button className="mt-3">View Course</Button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseCard;
