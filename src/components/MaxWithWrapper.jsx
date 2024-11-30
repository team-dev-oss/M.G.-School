import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic'
 
// const DynamicHeader = dynamic(() => import('../components/Header'), {
//   ssr: false,
// })
import Header from "../components/Header"

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <>
      {/* <DynamicHeader/> */}
      <Header/>
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
