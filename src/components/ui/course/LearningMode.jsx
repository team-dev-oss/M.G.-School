import { FaVideo, FaClock, FaDownload } from "react-icons/fa6";
import { Button } from "../button";
import Image from "next/image";
import Joinnow from "@/components/Joinnow";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const CourseCard = async ({
  disabled,
  firstname,
  lastname,
  email,
  course,
  user,
  content,
  amount
}) => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  return (
    <>
      <section className="px-4 py-8">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row flex-wrap justify-around gap-4 sm:gap-6 lg:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/monitor.png"
                alt="1-To-1 Training"
                width="50"
                height="50"
              />
            </div>
            <div>
              <h1 className="text-center mt-3 font-semibold">
                1-To-1 Training
              </h1>
              <p className="mt-4 text-gray-700 text-sm text-center font-light">
              Cyber threats on the rise? Get a personalized training plan (free consultation).
              </p>
            </div>
            <div className="flex justify-center mt-6">
              {isLoggedIn ? (
                <Joinnow
                  content="Get Started"
                  course={course}
                  user={user}
                  firstname={firstname}
                  lastname={lastname}
                  email={email}
                  amount={amount}
                  mode="1-To-1 Training"
                />
              ) : (
                <Joinnow disabled={true} content="Get Started" />
              )}
            </div>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/monitor.png"
                alt="Online Training"
                width="50"
                height="50"
              />
            </div>
            <div>
              <h1 className="text-center mt-3 font-semibold">
                Online Training
              </h1>
              <p className="mt-4 text-gray-700 text-sm text-center font-light">
              Become a Cyber Hero: Train Online, Secure Your Future!
              </p>
            </div>
            <div className="flex justify-center mt-6">
              {isLoggedIn ? (
                <Joinnow
                  content="Get Started"
                  course={course}
                  user={user}
                  firstname={firstname}
                  lastname={lastname}
                  email={email}
                  amount={amount}
                  mode="Online Training"
                />
              ) : (
                <Joinnow disabled={true} content="Get Started" />
              )}
            </div>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/monitor.png"
                alt="Offline Training"
                width="50"
                height="50"
              />
            </div>
            <div>
              <h1 className="text-center mt-3 font-semibold">
                Offline Training
              </h1>
              <p className="mt-4 text-gray-700 text-sm text-center font-light">
              Unplug & Focus: Master Cybersecurity Skills in an Immersive Learning Environment.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              {isLoggedIn ? (
                <Joinnow
                  content="Get Started"
                  course={course}
                  user={user}
                  firstname={firstname}
                  lastname={lastname}
                  email={email}
                  amount={amount}
                  mode="Offline Training"
                />
              ) : (
                <Joinnow disabled={true} content="Get Started" />
              )}
            </div>
          </blockquote>
        </div>
        <h1 className="mt-14 text-2xl md:text-3xl font-bold text-center">
          Course{" "}
          <span className="text-red-600">Features</span>
        </h1>
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/diverse.png"
                alt="Diverse Course Categories"
                width="50"
                height="50"
              />
            </div>
            
            <div>
              <h1 className="text-center mt-3 font-semibold">
                Diverse Course Categories
              </h1>
              <p className="mt-4 text-gray-700 text-sm text-center font-light">
              cybersecurity Threats Evolving? We Have the Courses to Stay Ahead!
              </p>
            </div>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/self-paced.png"
                alt="Self-Paced Learning"
                width="50"
                height="50"
              />
            </div>
            <div>
              <h1 className="text-center mt-3 font-semibold">
                Self-Paced Learning
              </h1>
              <p className="mt-4 text-gray-700 text-sm text-center font-light">
              Become a Self-Made Security Pro: Start Your Cybersecurity Journey Today!
              </p>
            </div>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8 drop-shadow-2xl w-full md:w-1/4">
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/certified.png"
                alt="Certified Instructors"
                width="50"
                height="50"
              />
            </div>
            <div>
              <h1 className="text-center mt-3 font-semibold">
                Certified Instructors
              </h1>
              <p className="mt-4 text-gray-700 text-sm text-center font-light">
              Get Certified, Get Ahead: Train with Cybersecurity Experts!

              </p>
            </div>
          </blockquote>
        </div>
      </section>
    </>
  );
};

export default CourseCard;
