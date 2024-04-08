"use client";
import MeetingRoom from "@/components/MeetingRoom";
import Loader from "@/components/loader";
import MeetingSetup from "@/components/meetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Meeting = () => {
  const { id } = useParams();
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallingLoading } = useGetCallById(id);

  if (!isLoaded || isCallingLoading) return <Loader />;
  return (
    <main className="h-screen w-full pb-5">
      <StreamCall call={call}>
        <StreamTheme>
          {isSetupComplete ? (
            <MeetingRoom />
          ) : (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
