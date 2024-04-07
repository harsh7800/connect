import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MeetingCardProps {
  color: string;
  event?: () => void;
  logo: string;
  title: string;
  desc: string;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  color,
  event,
  logo,
  title,
  desc,
}) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-1/4 min-h-[260px] rounded-[14px] cursor-pointer",
        { [color]: color } // Dynamically applying color class based on the 'color' prop
      )}
      onClick={event} // Invoking the 'event' callback function on click
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={logo} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
