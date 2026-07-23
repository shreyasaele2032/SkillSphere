import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "./SocketContext";

export const NotificationContext = createContext();


export const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([]);

  const { socket } = useSocket();


  useEffect(() => {

    if (!socket) return;


    // Receive notification from backend
    const handleNotification = (notification) => {
    setNotifications((prev) => [
    notification,
    ...prev,
  ]);
};

socket.on("receive_notification", handleNotification);

return () => {
  socket.off("receive_notification", handleNotification);
};


  }, [socket]);



  // Add notification manually
  const addNotification = (notification) => {

    setNotifications((prev) => [
      notification,
      ...prev,
    ]);

  };



  // Remove single notification
  const removeNotification = (id) => {

    setNotifications((prev) =>
      prev.filter(
        (notification) => notification.id !== id
      )
    );

  };



  // Clear all notifications
  const clearNotifications = () => {

    setNotifications([]);

  };



  return (

    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearNotifications,
      }}
    >

      {children}

    </NotificationContext.Provider>

  );

};



// Custom hook
export const useNotifications = () => {

  return useContext(NotificationContext);

};