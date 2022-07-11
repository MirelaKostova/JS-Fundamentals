function meetings(meetingsData) {
  let appointments = {};

  for (const currLine of meetingsData) {
    let [weekday, name] = currLine.split(" ");

    if (!appointments.hasOwnProperty(weekday)) {
      appointments[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  }

  for (let meet in appointments) {
    console.log(`${meet} -> ${appointments[meet]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
