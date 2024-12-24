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
              <div className="text-teal-600 flex justify-center items-center md:justify-normal">
                <Image  src="/logo.jpg" alt="Logo" width="120" height="120" />
              </div>

              <ul className=" mt-6 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
                <li>
                  <Link href="">
                    <FaFacebook size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaInstagram size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaLinkedin size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="">
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
                      href="/mission-and-vission"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Mission & Vission{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/our-history"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Our History{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs-and-curriculum"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Curriculum{" "}
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
                      href="/"
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
                      +91 XXXXXXXXX{" "}
                    </div>
                  </li>

                  <li>
                    <a
                      href="mailto:info@mcyberacadmey.com"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      info@gmail.com{" "}
                    </a>
                  </li>

                  <li>
                    <div
                      
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Rohtak, Haryana ,India ,124001
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
