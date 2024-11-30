import React from 'react';
import Image from 'next/image';

const DirectorLetter = () => {
  return (
    <div className="flex justify-center m-4">
      <div className="director-letter bg-white border border-gray-300 rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/Vikas.jpg" // Replace with the actual image path
            alt="Vikash Kumar - Director, M Cyber Academy"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
            className="rounded-full object-cover"
          />
          <div className="text-center mt-2">
            <h2 className="text-xl font-bold">Mr. Vikash Kumar</h2>
            <p className="text-sm">
              Cybersecurity Analyst & Researcher, Founder and CEO of M Cyber Academy. 15+ Years of experience in information security and digital forensics. Vice president at Akhil Bhartiya Cyber Surksha Sangathan.
            </p>
          </div>
        </div>
        <div className="letter-content text-base leading-loose">
          <p>
            In an age where technological advancements are reshaping our world at an unprecedented pace, the importance of cybersecurity professionals cannot be overstated. As the Director of M Cyber Academy, with over 15 years of experience in the cybersecurity domain, I extend a warm welcome to you.
          </p>
          <p>
            Cybersecurity is a vast and dynamic field, continually evolving to counteract the ever-growing threats of digital crime. At M Cyber Academy we recognize the critical need for well-trained professionals who can navigate this landscape adeptly.
          </p>
          <p>
            Choosing a career in cybersecurity promises long-term relevance and demand. Rest assured that, in the next 40-50 years, no machine, tool, technology, or AI will replace the indispensable role of cybersecurity experts. This assertion stems from our commitment to staying at the forefront of industry trends and innovations.
          </p>
          <p>
            We understand that embarking on this journey without proper guidance can be daunting. Hence, we have meticulously crafted career-oriented curricula tailored to various cybersecurity job roles. Our diploma and master programs offer a structured roadmap, ensuring that you progress from foundational to advanced levels of cybersecurity proficiency.
          </p>
          <p>
            As you consider your educational and career aspirations, remember that the realm of cybersecurity holds vast opportunities for those willing to invest in their skills and knowledge. I extend my sincerest wishes for your future achievements and a successful career in cybersecurity.
          </p>
          <div className="signature flex justify-end items-center mt-4">
            <p className="text-sm mr-2">Sincerely,</p>
            <p className="text-sm">Vikash Kumar</p>
            <Image
              src="/sign.png" // Replace with the actual image path
              alt="Vikash Kumar Signature"
              width={100} // Adjust width as needed
              height={50} // Adjust height as needed
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorLetter;
