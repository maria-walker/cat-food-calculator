import React from "react";
import { useState } from "react";
import Result from "./Result";

const Questions = () => {
  const [feedsPerDay, setFeedsPerDay] = useState("");
  const [gramsPerFeed, setGramsPerFeed] = useState("");
  const [tinSize, setTinSize] = useState("");
  const [remainingTins, setRemainingTins] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [daysToNextOrder, setDaysToNextOrder] = useState(0);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  return (
    <div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            setDaysToNextOrder((currDays) => {
              const result =
                (remainingTins * tinSize) / (gramsPerFeed * feedsPerDay) -
                deliveryTime;
              console.log(result);
              return result;
            });

            setHasBeenSubmitted(() => {
              return true;
            });
          }}
        >
          <ul>
            <li>
              <label htmlFor="feeds-a-day">Feeds per day</label>
              <input
                id="feeds-a-day"
                value={feedsPerDay}
                onChange={(event) => setFeedsPerDay(event.target.value)}
                placeholder="e.g. 2 times/day"
              ></input>
            </li>
            <li>
              <label htmlFor="grams-per-feed">Grams per feed</label>
              <input
                id="grams-per-feed"
                value={gramsPerFeed}
                onChange={(event) => setGramsPerFeed(event.target.value)}
                placeholder="e.g. 30g"
              ></input>{" "}
            </li>
            <li>
              <label htmlFor="tin-size">Tin size</label>
              <input
                id="tin-size"
                value={tinSize}
                onChange={(event) => setTinSize(event.target.value)}
                placeholder="e.g. 100g"
              ></input>{" "}
            </li>
            <li>
              <label htmlFor="tins-remaining">Tins Remaining</label>
              <input
                id="tins-remaining"
                value={remainingTins}
                onChange={(event) => setRemainingTins(event.target.value)}
                placeholder="e.g. 12 tins"
              ></input>{" "}
            </li>
            <li>
              {" "}
              <label htmlFor="delivery-time">Delivery Time</label>
              <input
                id="delivery-time"
                value={deliveryTime}
                onChange={(event) => setDeliveryTime(event.target.value)}
                placeholder="e.g. 2 days"
              ></input>{" "}
            </li>
            <button>Submit </button>
          </ul>
        </form>
      </div>
      <Result
        daysToNextOrder={daysToNextOrder}
        hasBeenSubmitted={hasBeenSubmitted}
        deliveryTime={deliveryTime}
      />
    </div>
  );
};

export default Questions;
