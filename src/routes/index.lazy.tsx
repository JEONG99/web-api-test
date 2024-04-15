import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ChangeEvent, useState } from "react";

const WebSpeech = () => {
  const [value, setValue] = useState("");
  const synth = window.speechSynthesis;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(value);
    synth.speak(utterance);
  };

  return (
    <div className="p-2 w-80">
      <Input
        className="inline-block my-2"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleSpeak}>Speak</Button>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: WebSpeech,
});
