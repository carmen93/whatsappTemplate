import { useEffect, useState } from "react";

interface MessageBalloonProps {
  me: boolean;
  message: string;
  message_Time: string;
  message_day: string;
  from_name: string;
  is_replay: boolean;
  replay_message: string;
  message_type: string;
}

export default function MessageBalloon(props: MessageBalloonProps) {
  const [time, setTime] = useState("");
  const { me, message, message_Time, message_day, from_name, is_replay, replay_message, message_type } = props;
  const flexAlignItems = me ? "items-end" : "items-start";
  const backgroundColor = me ? "bg-[#005c4b]" : "bg-[#202c33]";
  const borderRounded = me ? "rounded-tr-none" : "rounded-tl-none";

  useEffect(() => {
    setTime(refreshTime());
  }, [])

  function refreshTime() {
    const date = new Date();
    const formattedString = date.getHours() + ":" + date.getMinutes();
    return formattedString;
  }
  if (is_replay === true) {
    return (
      <div className={`flex flex-col ${flexAlignItems} w-full h-max`}>
          <div className={`flex flex-col min-w-[5%] max-w-[65%] h-max ${backgroundColor} p-2 text-white rounded-lg ${borderRounded} mb-3`}>
          <div className={`flex flex-col h-max rounded-lg ${borderRounded} mb-3 replayMess`}><span className="  p-2 text-white rounded-lg rounded-tl-none mb-3 text-xs">{replay_message}</span></div>
            <div className="flex justify-start text-[hsla(0,0%,100%,0.6)] text-xs mt-1"> {from_name}</div>
            <div className="flex flex-col w-full break-words">
              <span>{message}</span>
            </div>
            <div className="flex justify-end text-[hsla(0,0%,100%,0.6)] text-xs mt-1">
              <span>{message_day} - {message_Time}</span>
            </div>
          </div>
      </div>
    )
  } 
  else if ((message_type === "image" ) || (message_type === "gif" ) ){
    return (
      <div className={`flex flex-col ${flexAlignItems} w-full h-max`}>
        <div className={`flex flex-col min-w-[5%] max-w-[65%] h-max ${backgroundColor} p-2 text-white rounded-lg ${borderRounded} mb-3`}>
          <div className="flex justify-start text-[hsla(0,0%,100%,0.6)] text-xs mt-1"> {from_name}</div>
          <div className="flex flex-col w-full break-words">
            <div className="placeholder"></div>
            <span className="text-xs">{message}</span>
          </div>
          <div className="flex justify-end text-[hsla(0,0%,100%,0.6)] text-xs mt-1">
            <span>{message_day} - {message_Time}</span>
          </div>
        </div>
      </div>
    )
  }
  else if (message_type === "video" ){
    return (
      <div className={`flex flex-col ${flexAlignItems} w-full h-max`}>
        <div className={`flex flex-col min-w-[5%] max-w-[65%] h-max ${backgroundColor} p-2 text-white rounded-lg ${borderRounded} mb-3`}>
          <div className="flex justify-start text-[hsla(0,0%,100%,0.6)] text-xs mt-1"> {from_name}</div>
          <div className="flex flex-col w-full break-words">
            <div className="placeholderVideo"></div>
            <span className="text-xs">{message}</span>
          </div>
          <div className="flex justify-end text-[hsla(0,0%,100%,0.6)] text-xs mt-1">
            <span>{message_day} - {message_Time}</span>
          </div>
        </div>
      </div>
    )
  }else if (message_type === "audio" ){
    return (
      <div className={`flex flex-col ${flexAlignItems} w-full h-max`}>
        <div className={`flex flex-col min-w-[5%] max-w-[65%] h-max ${backgroundColor} p-2 text-white rounded-lg ${borderRounded} mb-3`}>
          <div className="flex justify-start text-[hsla(0,0%,100%,0.6)] text-xs mt-1"> {from_name}</div>
          <div className="flex flex-col w-full break-words">
            <div className="placeholderAudio"></div>
            <span className="text-xs">{message}</span>
          </div>
          <div className="flex justify-end text-[hsla(0,0%,100%,0.6)] text-xs mt-1">
            <span>{message_day} - {message_Time}</span>
          </div>
        </div>
      </div>
    )
  } else
  {
    return (
      <div className={`flex flex-col ${flexAlignItems} w-full h-max`}>
        <div className={`flex flex-col min-w-[5%] max-w-[65%] h-max ${backgroundColor} p-2 text-white rounded-lg ${borderRounded} mb-3`}>
          <div className="flex justify-start text-[hsla(0,0%,100%,0.6)] text-xs mt-1"> {from_name}</div>
          <div className="flex flex-col w-full break-words">
            <span>{message}</span>
          </div>
          <div className="flex justify-end text-[hsla(0,0%,100%,0.6)] text-xs mt-1">
            <span>{message_day} - {message_Time}</span>
          </div>
        </div>
      </div>
    )
  }
}