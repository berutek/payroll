import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const payrolls = [
      "2026-01-30T11:30:00.583Z",
      "2026-02-27T11:30:00.583Z",
      "2026-03-30T11:30:00.583Z",
      "2026-04-30T11:30:00.583Z",
      "2026-05-29T11:30:00.583Z",
      "2026-06-30T11:30:00.583Z",
      "2026-07-30T11:30:00.583Z",
      "2026-08-28T11:30:00.583Z",
      "2026-09-30T11:30:00.583Z",
      "2026-10-30T11:30:00.583Z",
      "2026-11-30T11:30:00.583Z",
      "2026-12-30T11:30:00.583Z",
    ];

    function init() {
      const currentDate = new Date();
      const nextPayroll = new Date(payrolls[currentDate.getMonth()]);

      const difference = nextPayroll - currentDate;

      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const remainingSeconds = seconds % 60;
      const remainingMinutes = minutes % 60;
      const remainingHours = hours % 24;

      setDays(days);

      setHours(remainingHours);

      setMinutes(remainingMinutes);

      setSeconds(remainingSeconds);
    }
    const interval = setInterval(() => {
      init();
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes]);

  return (
    <>
      <div>
        <img
          src="https://store-images.s-microsoft.com/image/apps.5376.7be5cb01-d529-4f7c-9973-8e1adbc5ff4a.eb585f3f-ef89-43f5-9011-6e2ebe089d9a.a81266aa-65b1-422d-a669-0cd57e45c56b.png"
          alt=""
        />
      </div>
      <h1>SugarCRM Next Payroll</h1>
      <div className="card">
        <span>{days} Days</span>
        <span className="seperator">•</span>
        <span>{hours} Hours</span>
        <span className="seperator">•</span>
        <span>{minutes} minutes</span>
        <span className="seperator">•</span>
        <span className="seconds">{seconds} Seconds</span>
      </div>
    </>
  );
}

export default App;
