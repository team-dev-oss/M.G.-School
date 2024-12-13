import Image from 'next/image'

export default function DirectorMessage() {
  return (
    <>
         <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column with Image and Red Bar */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[600px] w-full">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Ms. Prachi Garg speaking at podium"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute left-0 top-20 rounded-e-lg bottom-0 w-10 h-3/4 bg-red-600 flex items-center justify-center">
            <span className="text-white font-medium transform -rotate-90 whitespace-nowrap text-lg tracking-wider">
              MESSAGE FOR PARENTS
            </span>
          </div>
        </div>

        {/* Right Column with Content */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-red-600 text-lg font-medium mb-2">
              Director
            </h2>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Ajay Bhardwaj
            </h1>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              To my mind an educational institute is not just about bricks, mortar and concrete, but about building character, enriching minds and about varied experiences that last a lifetime. As the Director, I can assure you that our Schools will continue to avail all the resources needed to further the cause for even greater Student achievement. Offering our students the latest in curriculum enhancements in a safe and state of the art learning environment will continue to serve as our primary focus. We are sincerely committed to educate and bring up an emerging generation who possesses a global perceptive and will be positive contributors to the society.
            </p>

            <p>
              It is in the spirit of meeting this challenge that I invite all our Parents and well-wishers to visit our ZGS campuses spread in three prime areas of the city and continue being our path guiders, as always. We are pledged to fulfill the aspirations of our Parent and Student community and set a benchmark that is unparalleled in the field of quality education.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Warm Regards</p>
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Ms. Prachi Garg's signature"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column with Image and Red Bar */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[600px] w-full">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Ms. Prachi Garg speaking at podium"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute left-0 top-20 rounded-e-lg  w-10 h-3/4  bg-red-600 flex items-center justify-center">
            <span className="text-white font-medium transform -rotate-90 whitespace-nowrap text-lg tracking-wider">
              MESSAGE FOR PARENTS
            </span>
          </div>
        </div>

        {/* Right Column with Content */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-red-600 text-lg font-medium mb-2">
              Director
            </h2>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Ms. Prachi Garg
            </h1>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              To my mind an educational institute is not just about bricks, mortar and concrete, but about building character, enriching minds and about varied experiences that last a lifetime. As the Director, I can assure you that our Schools will continue to avail all the resources needed to further the cause for even greater Student achievement. Offering our students the latest in curriculum enhancements in a safe and state of the art learning environment will continue to serve as our primary focus. We are sincerely committed to educate and bring up an emerging generation who possesses a global perceptive and will be positive contributors to the society.
            </p>

            <p>
              It is in the spirit of meeting this challenge that I invite all our Parents and well-wishers to visit our ZGS campuses spread in three prime areas of the city and continue being our path guiders, as always. We are pledged to fulfill the aspirations of our Parent and Student community and set a benchmark that is unparalleled in the field of quality education.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Warm Regards</p>
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Ms. Prachi Garg's signature"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

