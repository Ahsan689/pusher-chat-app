import { pusher } from "../../../lib/pusher";

// presence channel handler
// export default async function handler(req, res) {
//   const { message, username, userLocation } = req.body;

//   // console.log(message,"messageeeee");
//   // trigger a new post event via pusher
//   await pusher.trigger("presence-channel", "chat-update", {
//     message,
//     username,
//     userLocation
//   });

//   res.json({ status: 200 });
// }

module.exports = async (req, res) => {
  const { message, username, userLocation } = req.body;

  // console.log(message,"messageeeee");
  // trigger a new post event via pusher
  await pusher.trigger("presence-channel", "chat-update", {
    message,
    username,
    userLocation
  });

  res.json({ status: 200 });
}
