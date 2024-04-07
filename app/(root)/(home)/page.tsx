import MeetingType from "@/components/MeetingTypeList";
import UpComingCard from "@/components/UpComingCard";
import React from "react";

const Home = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDateFormatted = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="max-h-[500px] w-full rounded-[20px] bg-hero bg-cover border-1 border-white">
        <div className="flex h-full flex-col space-y-5 justify-between max-md:px-5 max-md:py-4 lg:p-8">
          <UpComingCard type="upcoming" />
          <div className="sm:pl-5 flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {currentTime}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {currentDateFormatted}
            </p>
          </div>
        </div>
      </div>
      <MeetingType />
    </section>
  );
};

export default Home;
