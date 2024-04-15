import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

const NotificationPage = () => {
  const [onInterval, setOnInterval] = useState(false);

  useEffect(() => {
    if (!onInterval) return;
    const notiInterval = setInterval(() => {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hi there!", {
            body: "Notification body",
            icon: "/vite.svg",
          });
        }
      });
    }, 5000);
    return () => {
      clearInterval(notiInterval);
    };
  }, [onInterval]);

  return (
    <div className="flex items-center p-2">
      <Switch
        className="mr-2"
        checked={onInterval}
        onCheckedChange={setOnInterval}
      />
      <span className="font-semibold">{onInterval ? "ON" : "OFF"}</span>
    </div>
  );
};

export const Route = createFileRoute("/notification")({
  component: NotificationPage,
});
