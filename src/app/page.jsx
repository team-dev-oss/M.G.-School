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
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const slideshowSettings = {
    background_background: "slideshow",
    background_slideshow_gallery: [
      {
        id: "12",
        url: "/lgog-bg.png",
      },
      {
        id: "28",
        url: "/2.jpg",
      },
      {
        id: "29",
        url: "/12.jpg",
      },
      {
        id: "36",
        url: "/slider1.jpg",
      },
      {
        id: "37",
        url: "/slider.jpg",
      },
      
      
    ],
    background_slideshow_ken_burns: "yes",
    background_slideshow_ken_burns_zoom_direction: "out",
    background_slideshow_loop: "yes",
    background_slideshow_slide_duration: 5000,
    background_slideshow_slide_transition: "fade",
    background_slideshow_transition_duration: 500,
  };


  return (
    <>
      {/* <Alert /> */}
      <div className="overflow-x-hidden ">
        <MaxWidthWrapper className="mx-auto w-full  z-0">
          <main className="relative  gap-5 md:gap-28 h-[45rem]   overflow-hidden">
          <BackgroundSlideshow settings={slideshowSettings} />
            <motion.div
              className="absolute top-0 left-0   h-3/5 md:h-screen rounded-r-[100px]"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className=" z-10 container mx-auto px-16 md:py-12 flex justify-center text-center items-center md:min-h-screen">
              <div className="md:grid flex flex-col lg:grid-cols-1 justify-center  items-center">
                <div className="space-y-6 relative">
                  <div>
                    <motion.p
                      className="text-black text-2xl italic mb-2"
                      style={{ fontFamily: "cursive" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Welcome to
                    </motion.p>
                    <motion.h1
                      className={`${montserrat.className} text-5xl text-blue-700 md:text-6xl lg:text-7xl font-bold leading-tight`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Modern gurukul Public
                      <br />
                      School
                    </motion.h1>
                  </div>

                  <motion.p
                    className="text-black text-lg md:text-xl max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Where eternal values are cultivated in young and
                    impressionable minds
                  </motion.p>

                  <motion.button
                    className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
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
