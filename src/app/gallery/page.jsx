import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const data = {
  "event":[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
  ],
}

const galleryItems = [
  {
    title: "event",
    imageSrc: "/4.jpg",
    alt: "CES Vidya Utsav 2024 event",
  },
  {
    title: "event",
    imageSrc: "/2.jpg",
    alt: "Teachers Excellence Awards ceremony",
  },
  {
    title: "event",
    imageSrc: "/5.jpg",
    alt: "Performing arts show",
  },
  {
    title: "event",
    imageSrc: "/6.jpg",
    alt: "Outdoor learning activities",
  },
  {
    title: "event",
    imageSrc: "/8.jpg",
    alt: "Investiture ceremony",
  },
  {
    title: "event",
    imageSrc: "/10.jpg",
    alt: "Grandparents day celebration",
  },
  {
    title: "event",
    imageSrc: "/12.jpg",
    alt: "Annual day performances",
  },
  {
    title: "event",
    imageSrc: "/14.jpg",
    alt: "Swasti Shubharambh ceremony",
  },
  {
    title: "event",
    imageSrc: "/23.jpg",
    alt: "CES Vidya Utsav 2023 event",
  },
];

export default function AboutPage() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#1a1a1a] py-9">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              About Modern gurukul Public School
            </h1>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-blue-600">Gallery</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            School Events Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                <Link href="/">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, (max-width: 1000px) 40vw, 30vw"
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-center line-clamp-2">
                      {item.title}
                    </h2>
                  </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
