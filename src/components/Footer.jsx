import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
    <>
      <footer className="bg-white mt-10 md:flex md:flex-row flex-col">
        <div className="mx-auto max-w-screen-xl space-y-2 px-4 py-6 sm:px-6 lg:space-y-4 lg:px-2">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
            <div>
              <div className="text-teal-600 flex justify-center md:justify-normal">
                <Image  src="/massmatic.jpg" alt="Logo" width="200" height="120" />
              </div>

              <ul className="ml-6 -mt-6 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61550268785044">
                    <FaFacebook size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/mcyberacademy/">
                    <FaInstagram size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/mcyberacademy/">
                    <FaLinkedin size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg">
                    <FaYoutube size={23} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap- sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">

                  <li>
                    <a
                      href="/directors"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Directors{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/careers/jobs"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Jobs{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/careers/summertraining"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Summer Training{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/placementcell"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Placement Cell{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Courses</p>

                <ul className="mt-6 space-y-4 text-sm w-36">
                  <li>
                    <a
                      href="/course/6679a68c09e106e8800a1932"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      6 Months Diploma Program In Cyber Forensic{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/course/66798faa09e106e8800a192f"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      6-Month Diploma Program In Cybersecurity{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/course/6686e47970323db81a81c0e7"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      One-Year Diploma Program In Cybersecurity{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p id="contactUs" className="font-medium text-gray-900">Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Blogs{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Gallery{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/refund-cancellation"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refund-cancellation"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Refund Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Contact Info</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <div
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      +91 9653533324{" "}
                    </div>
                  </li>

                  <li>
                    <a
                      href="mailto:info@mcyberacadmey.com"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      info@mcyberacadmey.com{" "}
                    </a>
                  </li>

                  <li>
                    <div
                      
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      2nd Floor, Plot No - 129L, Maheshwara Complex, Model Town , Rohtak, Haryana ,India ,124001
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <p className="text-xs text-gray-500 text-center">
            &copy; 2024. M Cyber Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
