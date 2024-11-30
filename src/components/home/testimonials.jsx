import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      title: "Teaching Skills",
      content: "The teaching skills they are using, are very updated and the management is very supportive. The building is very fine & the playground is very wide.",
      author: {
        name: "Ms. Sapna",
        role: "Sister",
        image: "/placeholder.svg?height=40&width=40"
      }
    },
    {
      title: "Supportive Teachers",
      content: "We are fully satisfied with the ZAD Global School management and with the teachers as well. They all are much supportive of our child.",
      author: {
        name: "Mr. Rajesh",
        role: "Parent",
        image: "/placeholder.svg?height=40&width=40"
      }
    },
    {
      title: "Personal Growth",
      content: "However, my son is very naughty but the teachers are very hardworking with him. They did a lot for the personal growth of our child.",
      author: {
        name: "Ms. Kavita",
        role: "Parent",
        image: "/placeholder.svg?height=40&width=40"
      }
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-900 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-500 mb-2">Our testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Parents Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

