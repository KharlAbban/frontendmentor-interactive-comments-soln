import React from 'react'

const TimeCreated = ({createdAt}) => {
    let duration, timeValue, timeLabel;

    let currentDate = new Date();
    let timeCreated = new Date(createdAt);

    const timeObject = {
        year: currentDate.getFullYear() - timeCreated.getFullYear(),
        month: currentDate.getMonth() - timeCreated.getMonth(),
        day: currentDate.getDay() - timeCreated.getDay(),
        hour: currentDate.getHours() - timeCreated.getHours(),
        minute: currentDate.getMinutes() - timeCreated.getMinutes(),
        second: currentDate.getSeconds() - timeCreated.getSeconds(),
    }

    for (let key in timeObject) {
        if (timeObject[key] > 0) {
            if (key === "day" && timeObject[key] > 7) {
                timeLabel = "week";
                timeValue = Math.floor(timeObject[key] / 7);
            } else {
                timeLabel = key;
                timeValue = timeObject[key];
            }
            duration = `${timeValue} ${timeLabel}${timeValue > 1 ? "s" : ""} ago`;
            break;
        }
    }

    if (!timeValue) duration = "Now";

  return (
    <p className="text-sm">{duration}</p>
  )
}

export default TimeCreated
