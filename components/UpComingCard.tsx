//@ts-nocheck
"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";
import React from "react";

const UpComingCard = ({ type }: { type: "upcoming" }) => {
  const { upcomingCalls, isLoading } = useGetCalls();

  const getCalls = () => {
    switch (type) {
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  return (
    <div className="scroll-remove space-y-3">
      {upcomingCalls && upcomingCalls.length >= 0 ? (
        upcomingCalls?.map((meeting: Call) => {
          return (
            <h2
              key={meeting.id}
              className="glassmorphism mwx-w-[270px] rounded py-2 text-center text-base font-normal"
            >
              Upcoming Meeting at &nbsp;
              {new Date((meeting as Call).state?.startsAt).toLocaleString(
                "en-US",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
              {/* -{" "}
              {(meeting as Call).state?.custom?.description ||
                "Personal Meeting"} */}
            </h2>
          );
        })
      ) : (
        <h1 className="glassmorphism mwx-w-[270px] rounded py-2 text-center text-base font-normal">
          No Upcoming Calls Found!
        </h1>
      )}
    </div>
  );
};

export default UpComingCard;
