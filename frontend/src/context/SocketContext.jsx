import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

  const { user, isAuthenticated } = useContext(AuthContext);

  const [socket, setSocket] = useState(null);



  useEffect(() => {


  

    if (!isAuthenticated || !user) return;



    const newSocket = io(
      "https://skillsphere-2-h641.onrender.com",
      {
        withCredentials: true,
      }
    );



    setSocket(newSocket);







    
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