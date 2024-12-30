import Image from "next/image";

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

              </div>

            <div className="grid grid-cols-1 gap- sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">

                  <li>
                    <a
                      href="/fees"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Fees Structure{" "}
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
                <p className="font-medium text-gray-900">Contact Info</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <div
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      8397095777 / 9991603366{" "}
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
                      Siwana road , Dubaldhan , Jhajjar,Haryana
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <p className="text-xs text-gray-500 text-center">
            &copy; 2024. M.G Public School. All rights reserved. <span>Designed By OSS & CONSULTING</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
