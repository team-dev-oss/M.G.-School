import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function TestimonialCard({ title, content, author }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <h3 className="text-red-600 text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed">{content}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-gray-500">{author.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      title: "Teaching Skills",
      content:
        "The teaching skills they are using, are very updated and the management is very supportive. The building is very fine & the playground is very wide.",
      author: {
        name: "Ms. Sapna",
        role: "Sister",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      title: "Supportive Teachers",
      content:
        "We are fully satisfied with the School management and with the teachers as well. They all are much supportive of our child.",
      author: {
        name: "Mr. Rajesh",
        role: "Parent",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      title: "Personal Growth",
      content:
        "However, my son is very naughty but the teachers are very hardworking with him. They did a lot for the personal growth of our child.",
      author: {
        name: "Ms. Kavita",
        role: "Parent",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
  ];

  return (
    <section className=" py-16 md:py-24">
     
      <div className="max-w-7xl mx-auto px-4">
     
        <div className="text-center mb-12">
          <p className="text-red-500 mb-2">Our testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What Our Parents Say
          </h2>
        </div>
        <div className="mt-8 mx-3 hidden lg:grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="mt-8 mx-auto w-full max-w-md lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <TestimonialCard key={index} {...testimonial} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="sr-only" />
            <CarouselNext className="sr-only" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
