"use client";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { Montserrat } from "next/font/google";
import Welcome from "@/components/home/welcome";
import { motion } from "motion/react";
import Alert from "@/components/Alert";
import DirectorMessage from "@/components/home/authorityPerson";
import SchoolDistinctiveness from "@/components/home/enquiry";
import { TestimonialsSection } from "@/components/home/testimonials";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  

  return (
    <>
      {/* <Alert /> */}
      <div className="overflow-x-hidden ">
        <MaxWidthWrapper className="mx-auto w-full  z-0">
          <main className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-28 h-[50rem] md:h-screen bg-gray-100 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-4/5 md:w-1/2  h-3/5 md:h-screen bg-black rounded-r-[100px]"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className=" z-10 container mx-auto px-16 md:py-12 flex items-center md:min-h-screen">
              <div className="md:grid flex flex-col lg:grid-cols-1  items-center">
                <div className="space-y-6 relative">
                  <div>
                    <motion.p
                      className="text-red-600 text-2xl italic mb-2"
                      style={{ fontFamily: "cursive" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Welcome to
                    </motion.p>
                    <motion.h1
                      className={`${montserrat.className} text-5xl text-white md:text-6xl lg:text-7xl font-bold leading-tight`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      M.G. Public
                      <br />
                      School
                    </motion.h1>
                  </div>

                  <motion.p
                    className="text-gray-600 text-lg md:text-xl max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Where eternal values are cultivated in young and
                    impressionable minds
                  </motion.p>

                  <motion.button
                    className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    DISCOVER MORE
                  </motion.button>
                </div>

               
              </div>
            </div>
            <motion.div
                  className="flex w-full justify-center items-center  z-40 "
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src="/logo.jpg"
                    alt="Student in red uniform"
                    width={570}
                    height={600}
                    className="rounded-lg  hidden md:flex"
                    priority
                  />
                  <Image
                    src="/logo.jpg"
                    alt="Student in red uniform"
                    width={100}
                    height={100}
                    className="rounded-lg w-1/2 h-60 flex md:hidden"
                    priority
                  />
                </motion.div>
          </main>

          <section>
            <Welcome />
          </section>
          <section>
            <DirectorMessage />
          </section>
          <section>
            <SchoolDistinctiveness />
          </section>
          <section>
            <TestimonialsSection />
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Home;
