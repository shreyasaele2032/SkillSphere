import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ChatList = () => {

  const [chats, setChats] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    const fetchChats = async () => {

      try {

        const res = await api.get("/chat");

        setChats(res.data.chats);

      } catch(error) {

        console.log(error);

      }

    };


    fetchChats();

  }, []);



  return (

    <div className="space-y-4">

      {
        chats.map((chat)=>(

          <div
            key={chat._id}
            onClick={() =>
              navigate(`/chat/${chat._id}`)
            }
            className="bg-white p-4 rounded-lg shadow cursor-pointer"
          >

            {
              chat.participants.map(
                (person)=>person.name
              ).join(" & ")
            }

          </div>

        ))
      }

    </div>

  );

};


export default ChatList;