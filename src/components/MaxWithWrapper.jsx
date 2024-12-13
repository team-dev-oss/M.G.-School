import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <>
      
      <div
      className={cn(
        "",
        className
      )}
    >
      {children}
    </div>
    </>
  
  );
};

export default MaxWidthWrapper;
