"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

const EndCallButton = () => {
  const { toast } = useToast();
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button
      className="bg-red-500"
      onClick={async () => {
        await call?.endCall();
        router.push("/");
        toast({ title: "Meeting ended" });
      }}
    >
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
