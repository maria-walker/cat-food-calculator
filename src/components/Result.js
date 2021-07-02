import React from "react";

const Result = ({ daysToNextOrder, hasBeenSubmitted, deliveryTime }) => {
  console.log(hasBeenSubmitted, daysToNextOrder);
  const daysToDisplay = Math.floor(daysToNextOrder);

  const today = new Date();
  const orderDate = new Date(
    new Date().setDate(new Date().getDate() + daysToDisplay)
  );

  const orderDateString = orderDate.toLocaleDateString();

  console.log(today, daysToDisplay, orderDateString, "<<dates");

  if (!hasBeenSubmitted) {
    return (
      <div>
        <p className="message">Enter the details and click 'Submit'.</p>
      </div>
    );
  } else if (
    hasBeenSubmitted &&
    daysToDisplay > 0 &&
    daysToDisplay !== Infinity
  ) {
    return (
      <div>
        <p className="message">
          <strong>Poppy says</strong>: Place your next cat food order in{" "}
          {daysToDisplay} days on <strong>{orderDateString}</strong>.
        </p>
      </div>
    );
  } else if (
    hasBeenSubmitted &&
    daysToDisplay < 1 &&
    daysToDisplay > -deliveryTime
  ) {
    return (
      <div>
        <p className="message">
          <strong>Poppy says</strong>: You don't have enough time to wait for an
          online delively, please make your way to the shops.
        </p>
      </div>
    );
  } else if (hasBeenSubmitted && daysToDisplay <= -deliveryTime) {
    return (
      <div>
        <p className="message">
          <strong>Poppy says</strong>: Run to the shops human!!!!
        </p>
      </div>
    );
  } else if (
    (hasBeenSubmitted && !daysToDisplay) ||
    (hasBeenSubmitted && daysToDisplay === Infinity)
  ) {
    return (
      <div>
        <p className="message">
          Please complete each field to see your result.
        </p>
      </div>
    );
  }
};

export default Result;
