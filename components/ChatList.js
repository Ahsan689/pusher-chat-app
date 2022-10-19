const ChatList = ({ chat, currentUser }) => {

  // console.log(chat,'chatttt');
  const flexClasses =
    chat.username !== currentUser ? "flex flex-col justify-start items-start" : "flex flex-col justify-end items-end";

  const chatBgClasses =
    chat.username === currentUser
      ? "bg-gray-900 text-white w-full"
      : "bg-purple-200 w-full text-gray-700";

  return (
    <div className={flexClasses} style={{height:'100%'}}>
     
      <div
        className={`${chatBgClasses} max-w-xs rounded-md mt-2 px-3 py-3 text-sm`}
      >
        <p>{chat.message}</p>
      </div>
      <div
        className={`${
          chat.username !== currentUser ? "w-full text-left" : ""
        } text-purple-900`}
      >
        <small>{chat.username}</small>
      </div>
      
    </div>
  );
};

export default ChatList;
