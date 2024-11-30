import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function ApplyJob({title,id}) {
    return (
        <>
            <div className="flex px-5 py-2 justify-between bg-gray-200 items-center mt-5">
                <h1>{title}</h1>
                <Button>
                <Link href={`/careers/jobs/${id}`}>Apply</Link></Button>

            </div>
        </>
    );
}