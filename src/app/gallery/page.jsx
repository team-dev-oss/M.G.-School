// import PhotoLayout from "@/components/ui/gallery/photoLayout"
// import {LayoutGrid} from "@/components/ui/gallery/layout-grid"

// export default function Page() {
//   return (
//     <>
//     <div className="my-10 md:my-32">
//     <PhotoLayout/>
//     <LayoutGrid/>
//     </div>

//     </>
//   );
// }

"use client";
import { BlurFadeDemo } from "@/components/BlurFadeDemo";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/gallery/layout-grid";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWithWrapper";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  const imagePath = `/team${i + 1}.jpg`; // Adjust the path and file names as needed
  return imagePath;
});
export default function Page() {
  const title = "Gallery";
  const title2 = "Our Events";
  const title3 = "Our Campus";
  const title4 = "Media Coverage";

  return (
    <>
      <MaxWidthWrapper>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-36 mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
          <BlurFadeDemo
            images={[
              "1.jpg",
              "2.jpg",
              "3.jpg",
              "4.jpg",
              "5.jpg",
              "6.jpg",
              "7.jpg",
              "8.jpg",
              "9.jpg",
              "10.jpg",
              "11.jpg",
              "12.jpg",
              "13.jpg",
              "14.jpg",
              "15.jpg",
              "16.jpg",
              "17.jpg",
              "18.jpg",
              "20.jpg",
              "21.jpg",
              "22.jpg",
              "23.jpg",
              "28.jpg",
              "19.jpg",
              "24.jpg",
              "29.jpg",
              "25.jpg",
              "26.jpg",
              "27.jpg",
              "30.jpg",
              "31.jpg",
              // "32.jpg",
              "33.jpg",
              "34.jpg",
              "35.jpg",
              "36.jpg",
            ]}
            title={title}
          />
          {/* <BlurFadeDemo images={["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg", "e5.jpg", "e6.JPG", "e7.JPG", "e8.JPG", "e9.JPG", "e10.JPG",  "e11.jpg", "e12.jpg","e13.jpg",  "e14.jpeg", "e15.jpeg", "e16.jpeg", "e17.jpeg"]} title={title2} /> */}
          {/* <BlurFadeDemo images={["campus1.jpg", "campus2.jpg", "campus3.jpg", "campus4.JPG","campus5.JPG","campus6.jpg","campus7.jpeg", "campus8.jpeg", "campus9.jpeg", "campus10.jpeg", "campus11.jpeg","campus12.jpeg"]} title={title3} /> */}
          {/* <BlurFadeDemo images={["media1.jpg", "media2.jpg", "media3.jpg", "media4.jpg"]} title={title4} /> */}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
