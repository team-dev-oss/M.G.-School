import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { fetchStudenReviews, fetchStudenReviewsMobile } from "@/lib/data";
import Pagination from "@/components/ui/dashboard/pagination/pagination";
import StudentTestimonial from "@/components/StudentTestimonial";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import WorkedWith from "@/components/workedwith";
import DirectorLetter from "../../components/letter";
import InAssociation from "@/components/Inassociation"
export default async function Page({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { studenReviews, count } = await fetchStudenReviews(q, page, 3);
  const { mobilestudenReviews, mobilecount } = await fetchStudenReviewsMobile(
    q,
    page,
    1
  );
  return (
    <>
    <MaxWidthWrapper>
      <div className="mx-8 md:mx-28">
        <section>
          <h1 className="md:text-6xl text-3xl font-bold mt-10 md:mt-20 ">
            Our{" "}
            <span className="text-red-700 font-bold text-3xl md:text-6xl">
              Directors
            </span>
          </h1>

          <div className="mt-16 sm:flex-col md:flex md:flex-row gap-14">
            <div>
              <Image
                className="rounded-lg"
                src="/director.png"
                alt="Director"
                width="400"
                height="450"
              />
            </div>
            <div className="md:w-3/5">
              <div className="font-semibold text-2xl mt-1 md:mt-0 md:text-4xl ">
                Mr. Vikash
              </div>
              <div className="font-normal opacity-45 text-lg md:text-xl mt-7">
                Mr. Vikash, Founder and CEO of M Cyber Academy, is a dedicated
                cybersecurity specialist who has established a learning
                environment for students to study from industry-leading
                professionals. M CyberAcademy, led by him, has established
                itself as a top educational institution, renowned for its
                cybersecurity teaching and innovation. As Vice President of
                Akhil Bhatia Cyber Suraksha Sangthan in Haryana, he has overseen
                the resolution of over a thousand cybercrime cases. Mr. Vikash,
                a dedicated volunteer for i4c, has encountered several insects
                across various websites. He has successfully educated over
                10,000 college students in cybersecurity and forensics. His
                expertise includes Red and Blue teaming, cybercrime choices, and
                pen-testing. Mr. Vikash has created over 100 free cyber risk
                awareness workshops for kids, government organizations, and
                banking officials, enabling him to become an independent
                cybercrime research and studies analyst.
              </div>
            </div>
          </div>
              <div className="mt-10 flex gap-6 justify-center md:justify-start">
                <ul className="flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
                  <li>
                    <a href="mailto:vikash@mcyberacademy.com">
                      <IoIosMail size={40} />
                    </a>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/vikash-dhankhar-a6931a306/">
                      <FaLinkedin size={40} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg">
                      <FaYoutube size={40} />
                    </Link>
                  </li>
                </ul>
              </div>
        </section>
        <WorkedWith/>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 lg:pt-10">
            <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
              What Student&apos;s Say
            </h2>
            <div>
              <div className="hidden mt-8 md:grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                {studenReviews.map((item) => (
                  <div key={item.id}>
                    <StudentTestimonial
                      username={item.username}
                      review={item.review}
                      profession={item.profession}
                    />
                  </div>
                ))}
              </div>
              <div className="hidden md:flex justify-center mt-3">
                <Pagination count={count} items={3} />
              </div>
            </div>
            
            <div>
              <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 md:hidden">
                {mobilestudenReviews.map((item) => (
                  <div key={item.id}>
                    <StudentTestimonial
                      username={item.username}
                      review={item.review}
                      profession={item.profession}
                    />
                  </div>
                ))}
              </div>
              <div className="flex md:hidden justify-center mt-3">
                <Pagination count={mobilecount} items={1} />
              </div>
            </div>
          </div>
        </section>
        <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
        Associated{" "}
            <span className="text-red-700 font-bold text-3xl md:text-4xl">
              Partners
            </span>
          </h2>
        <InAssociation/>
        <section>
          <div className="flex justify-center my-16">
            <h1 className="flex font-bold justify-self-center text-2xl  md:text-4xl">
              Words for Students
            </h1>
          </div>
          {/* <div className="flex flex-col px-10 md:px-44 mt-16">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione dolores laborum labore provident impedit
              esse recusandae facere libero harum sequi.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ratione dolores laborum labore
              provident impedit esse recusandae facere libero harum sequi.Lorem
              ipsum dolor sit amet.
            </p>
            <p className="text-center mt-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione dolores laborum labore provident impedit
              esse recusandae facere libero harum sequi.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ratione dolores laborum labore
              provident impedit esse recusandae facere libero harum sequi.Lorem
              ipsum dolor sit amet.
            </p>
          </div> */}
          
          <DirectorLetter/>
        </section>
      </div>
      </MaxWidthWrapper>
    </>
  );
}
