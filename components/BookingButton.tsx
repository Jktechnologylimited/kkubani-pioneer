import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrangeButton() {
  return (
    <div className="flex justify-center items-center py-10">
      <Link href="/booking" passHref>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
         Book Your Appointment
        </Button>
      </Link>
    </div>
  );
}
