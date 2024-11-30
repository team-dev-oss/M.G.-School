import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <div className="bg-white">
        <Accordion type="single" collapsible className="w-full px-5">
          <AccordionItem value="item-1" className="p-5">
            <AccordionTrigger className="font-semibold text-2xl text-left">
              How do I receive the program?
            </AccordionTrigger>
            <AccordionContent>
              The program is available through my website on the members only
              section after you have purchased. Go to the services page, choose
              a plan, make payment and enter all your personal details and I
              will start putting together your personalized program!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="p-5">
            <AccordionTrigger className="font-semibold text-2xl text-left">
              I don&apos;t need a brand strategist but I need help executing an
              upcoming campaign. Can we still work together?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="p-5">
            <AccordionTrigger className="font-semibold text-2xl text-left">
              Are your rates competitive?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="p-5">
            <AccordionTrigger className="font-semibold text-2xl text-left">
              Why do you have a monthly project cap?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
