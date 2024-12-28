/* eslint-disable @typescript-eslint/no-require-imports */
const amqp = require("amqplib");

async function connect() {
  try {
    const TcpConnection = await amqp.connect("amqp://localhost:5672");
    const channel = await TcpConnection.createChannel();
    await channel.assertQueue("video-transcoder");

    // Set prefetch to 1 to process one message at a time
    channel.prefetch(1);

    console.log("Waiting for messages...");
    channel.consume("video-transcoder", (message) => {
      if (message !== null) {
        const video = JSON.parse(message.content.toString());
        console.log(video);
        console.log("Message received from the queue");

        // Wait for 7 seconds before acknowledging
        setTimeout(() => {
          if (video.video_id === "2") {
            console.log("Message processed and acknowledged after 7 seconds");
            channel.ack(message); // Acknowledge the message after the delay
          }
          //channel.ack(message); // Acknowledge the message after the delay
          console.log("Message processed and acknowledged after 7 seconds");
        }, 5000);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

connect();
