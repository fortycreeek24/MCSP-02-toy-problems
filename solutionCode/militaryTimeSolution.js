// original solution
function toMilitary(time) {
  // separate string into hour and minutes
  const hour = Number(time.split(":")[0]);
  const minutes = time.split(":")[1];
  const lastTwo = time.slice(-2);

  // if ends in pm and within hour 12
  if (lastTwo === "pm" && hour === 12) {
    // return time with letters sliced off
    return time.slice(0, time.length - 2);
    // if ends in pm (and not within hour 12)
  } else if (lastTwo === "pm") {
    // add twelve to old hour
    const newHour = hour + 12;
    // concatenate newHour with minutes
    const newTime = newHour + ":" + minutes;
    // return new time with letters sliced off
    return newTime.slice(0, newTime.length - 2);
    // if ends in am and within hour 12
  } else if (lastTwo === "am" && hour === 12) {
    // subtract twelve from old hour
    const newHour2 = hour - 12;
    // concatenate newHour with minutes
    const newTime2 = newHour2 + ":" + minutes;
    // return newTime without letters and pad start with 0's
    return newTime2.slice(0, newTime2.length - 2).padStart(5, "0");
    // if ends in am and not within hour 12
  } else if (lastTwo === "am") {
    // slice off last two letters
    const newTime3 = time.slice(0, time.length - 2);
    // return newtime padded with 0's
    return newTime3.padStart(5, "0");
  }
  // if already in correct format, return time
  return time;
}

console.log(`Test1 expected ${toMilitary("12:00am")} to be 00:00`); // - 12 (hour === 12, am)
console.log(`Test2 expected ${toMilitary("7:47pm")} to be 19:47`); // + 12 (hour < 12, pm)
console.log(`Test3 expected ${toMilitary("12:01am")} to be 00:01`); // - 12 (hour === 12, am)
console.log(`Test4 expected ${toMilitary("9:15am")} to be 09:15`); // na (padding with 0's)
console.log(`Test5 expected ${toMilitary("1:23am")} to be 01:23`); // na (padding with 0's)
console.log(`Test6 expected ${toMilitary("3:00pm")} to be 15:00`); // + 12 (hour < 12, pm)
console.log(`Test7 expected ${toMilitary("12:00pm")} to be 12:00`); // na (slice off letters)
console.log(`Test8 expected ${toMilitary("04:00")} to be 04:00`); // na (no change)
