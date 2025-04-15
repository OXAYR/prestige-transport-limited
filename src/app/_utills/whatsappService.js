/** @format */

export const openWhatsAppChat = (type, data = {}) => {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  let message = "";

  switch (type) {
    case "bookingForm":
      if (
        !data.whereFrom ||
        !data.whereTo ||
        !data.date ||
        !data.time ||
        !data.passengers ||
        !data.baggage
      ) {
        console.error("Missing booking form details");
        return;
      }

      const timeArray = data.time.split(":");
      let hour = parseInt(timeArray[0]);
      const minute = timeArray[1];
      let formattedTime =
        hour >= 12
          ? `${hour > 12 ? hour - 12 : hour}:${minute} PM`
          : `${hour === 0 ? 12 : hour}:${minute} AM`;

      message = `Booking Details
  
  Where From: ${data.whereFrom}
  Where To: ${data.whereTo}
  Date: ${data.date}
  Time: ${formattedTime}
  Number of Passengers: ${data.passengers}
  Number of Baggage: ${data.baggage}
  
  What price would you offer?`;
      break;

    case "contactUs":
      message =
        "Hello, I would like to get in touch with you to book your service.";
      break;

    case "bookThisRide":
      if (!data.ride) {
        return;
      }
      message = `I want to book this ride:
  Ride: ${data?.ride?.name}
  Seating Capacity: ${data?.ride?.seats}
  
  Can you give me a qoute for this ride?`;
      break;

    default:
      console.error("Invalid message type");
      return;
  }

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};
