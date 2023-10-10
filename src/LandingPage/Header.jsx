import { useEffect, useState } from "react";
import chain from "../assets/chain.png";
import explosion from "../assets/explosion.png";
import Button from "../components/Button";

export function Header() {
  const targetDate = new Date("2023-12-31T23:59:59"); // Set your target date and time here
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    let intervalId;

    if (isRunning && timeRemaining.total > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(targetDate)); 
      }, 1000); // Update timer every 1 second
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, timeRemaining, targetDate]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeRemaining(calculateTimeRemaining(targetDate));
    setIsRunning(false);
  };

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();
    if (timeDifference <= 0) {
      setIsRunning(false);
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return {
      total: timeDifference,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  return (
    <div className="header headerMain">
      <div className="container header">
        <div className="top">
          <p>
            Igniting a Revolution in{" "}
            <span className="revolution"> HR Innovation </span>
          </p>
        </div>
        <main className="header__main main">
          <div className="main__left">
            <div className="info">
              <h2>getlinked Tech</h2>
              <div className="image">
                <h2 className="image__text">
                  Hackathon <span>1.0</span>
                </h2>
                <img src={chain} alt="" />
                <img src={explosion} alt="" />
              </div>
              <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Button link={"/register"} />
              <div className="timer">
                {timeRemaining.days > 1 ? (
                  <span className="days">
                    {timeRemaining.days}
                    <span className="tag">D</span>
                  </span>
                ) : (
                  ""
                )}

                <span className="hours">
                  {timeRemaining.hours > 12
                    ? timeRemaining.hours
                    : `0${timeRemaining.hours}`}

                  <span className="tag">H</span>
                </span>
                <span className="minutes">
                  {timeRemaining.minutes > 0
                    ? timeRemaining.minutes
                    : `0${timeRemaining.minutes}`}{" "}
                  <span className="tag">H</span>
                </span>
                <span className="secs">
                  {timeRemaining.seconds} <span className="tag">S</span>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
