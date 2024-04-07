import MeetingType from "@/components/MeetingTypeList";
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
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover border-1 border-white">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism mwx-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at : 12:30
          </h2>
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
