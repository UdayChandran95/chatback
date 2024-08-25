import { PrettyChatWindow } from "react-chat-engine-pretty"
import "../src/chatpage.css";

const ChatsPage = (props) =>{
  
    return (
    <div className="window">
       <PrettyChatWindow
          projectId="60e0cb55-aa67-452a-95d8-6a5f4bb1e982"
          username={props.user.username}
          secret= {props.user.secret}
          style= {{height:"100%"}}
          messageStyle={{ fontFamily: "'Roboto', sans-serif" }} 
       />
    </div>
    )
}

export default ChatsPage