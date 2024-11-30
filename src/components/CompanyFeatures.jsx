import Image from 'next/image';

const features = [
  {
    src: '/Group 418.png',
    alt: 'Structured, industry vetted curriculum',
    text: 'Structured, industry vetted curriculum',
    bgColor: 'bg-blue-500',
  },
  {
    src: '/Group 421.png',
    alt: 'Live classes by faculty who have been there, done that',
    text: 'Live classes by faculty who have been there, done that',
    bgColor: 'bg-pink-500',
  },
  {
    src: '/Group 417.png',
    alt: 'Practical experience through real-life projects',
    text: 'Practical experience through real-life projects',
    bgColor: 'bg-green-500',
  },
  {
    src: '/Group 416.png',
    alt: 'Regular 1:1 mentorship from industry veterans',
    text: 'Regular 1:1 mentorship from industry veterans',
    bgColor: 'bg-blue-300',
  },
  {
    src: '/Group 420.png',
    alt: 'Career support via a dedicated recruitment team, alumni network, etc.',
    text: 'Career support via a dedicated recruitment team, alumni network, etc.',
    bgColor: 'bg-yellow-500',
  },
  {
    src: '/Group 419.png',
    alt: 'Aspirational peer group of 2,000+ Scaler students & alumni',
    text: 'Aspirational peer group of 2,000+ Scaler students & alumni',
    bgColor: 'bg-purple-500',
  },
];

const FeatureCard = ({ src, alt, text, bgColor }) => (
  <blockquote className={`rounded-lg ${bgColor} text-white shadow-lg p-4 flex items-center md:flex-col md:p-10 md:w-1/3`}>
    <div className="mr-4 md:mr-0 md:mb-3">
      <Image src={src} alt={alt} width={40} height={40} className="md:w-20 md:h-20" />
    </div>
    <h1 className="font-semibold text-lg md:text-center">
      {text}
    </h1>
  </blockquote>
);

const CompanyFeatures = () => {
  return (
    <>
      <div className="flex flex-col justify-center my-10 md:my-16 gap-8 md:gap-12">
        <div className="flex flex-col w-full mt-8 md:mt-0 justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-center">
            Master Problem Solving & System Design
          </h1>
        </div>
        <div className="flex flex-col gap-4 mx-4 md:hidden">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="hidden md:flex md:flex-col md:gap-6">
          <div className="flex gap-10">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="flex gap-10">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyFeatures;
