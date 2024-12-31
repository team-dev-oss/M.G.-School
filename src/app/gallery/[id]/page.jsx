

"use client";
import { BlurFadeDemo } from "@/components/BlurFadeDemo";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/gallery/layout-grid";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { allImages } from "../../../../photos";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  const imagePath = `/team${i + 1}.jpg`; // Adjust the path and file names as needed
  return imagePath;
});
export default function Page({params}) {
  const {id} = params;
  
  const data = allImages[id]
  // console.log({data});

  return (
    <>
      <MaxWidthWrapper>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-36 mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
          <BlurFadeDemo
            images={data}
            title={id}
          />
         
        </div>
      </MaxWidthWrapper>
    </>
  );
}
