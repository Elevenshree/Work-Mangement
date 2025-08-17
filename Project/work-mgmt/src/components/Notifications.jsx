import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Notifications() {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080"); // <-- replace with your actual URL
    setWs(socket);

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      toast.info(data.message);
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

   
    return () => {
      socket.close();
    };
  }, []);

  return null; 
}
