/* eslint-disable @typescript-eslint/no-require-imports */
const amqp = require("amqplib");

const video_details = {
  video_id: "2",
  video_url: "https://www.youtube.com",
  clientID: "2",
};

async function connect() {
  try {
    const TcpConnection = await amqp.connect("amqp://localhost:5672");
    const channel = await TcpConnection.createChannel();
    await channel.assertQueue("video-transcoder");

    channel.sendToQueue(
      "video-transcoder",
      Buffer.from(JSON.stringify(video_details))
    );

    console.log("Message sent to the queue");
  } catch (error) {
    console.error(error);
  }
}

connect();
