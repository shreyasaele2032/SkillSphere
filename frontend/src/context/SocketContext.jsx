import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

  const { user, isAuthenticated } = useContext(AuthContext);

  const [socket, setSocket] = useState(null);



  useEffect(() => {


    // Connect socket only after login

    if (!isAuthenticated || !user) return;



    const newSocket = io(
      "http://localhost:8006",
      {
        withCredentials: true,
      }
    );



    setSocket(newSocket);



    // Send user id to server
    // (we will use this later for notifications)

    // newSocket.emit(
    //   "join",
    //   user._id
    // );




    // Cleanup when logout/unmount

    return () => {


      newSocket.disconnect();

      setSocket(null);


    };


  }, [isAuthenticated, user]);





  return (

    <SocketContext.Provider value={{ socket }}>

      {children}

    </SocketContext.Provider>

  );

};




export const useSocket = () => 
  useContext(SocketContext);