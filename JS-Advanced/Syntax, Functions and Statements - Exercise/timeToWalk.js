function timeToWalk(steps, length, speed) {
  let distance = steps * length;
  let speedToSec = speed / 3.6;
  let rest = Math.floor(distance / 500) * 60;
  let time = distance / speedToSec + rest;

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = Math.round(time - minutes * 60);

  console.log(
    `${hours < 10 ? `0${hours}` : `${hours}`}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
  );
}

timeToWalk(4000, 0.6, 5);
// 00:32:48

timeToWalk(2564, 0.7, 5.5);
// 00:22:35
