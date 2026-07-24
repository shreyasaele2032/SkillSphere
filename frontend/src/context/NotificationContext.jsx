import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "./SocketContext";

export const NotificationContext = createContext();


export const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([]);

  const { socket } = useSocket();


  useEffect(() => {

    if (!socket) return;


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




  const addNotification = (notification) => {

    setNotifications((prev) => [
      notification,
      ...prev,
    ]);

  };



 
  const removeNotification = (id) => {

    setNotifications((prev) =>
      prev.filter(
        (notification) => notification.id !== id
      )
    );

  };



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




export const useNotifications = () => {

  return useContext(NotificationContext);

};