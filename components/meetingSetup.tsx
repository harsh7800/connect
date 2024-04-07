import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamTogledOn, setIsMicCamTogledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("useCall must be called inside a StreamCall component");
  }

  useEffect(() => {
    if (isMicCamTogledOn) {
      call?.camera?.disable();
      call?.microphone?.disable();
    } else {
      call?.camera?.enable();
      call?.microphone?.enable();
    }
  }, [isMicCamTogledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label
          className="flex items-center select-none cursor-pointer justify-center gap-0 font-medium"
          htmlFor="Toggle-Mic/Camera"
        >
          <Checkbox
            className="border-1 bg-white rounded-md px-3 py-3 "
            id="Toggle-Mic/Camera"
            checked={isMicCamTogledOn}
            onCheckedChange={(e: boolean) => {
              setIsMicCamTogledOn(e);
            }}
          />
          Join with Muted and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="bg-green-500 rounded-md px-4"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
