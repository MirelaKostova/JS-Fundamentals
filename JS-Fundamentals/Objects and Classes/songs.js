function songs(arr) {
  class Song {
    constructor(typeList, songName, time) {
      this.typeList = typeList;
      this.songName = songName;
      this.time = time;
    }
  }

  let numberSongs = arr.shift();
  let allSongsList = [];
  let type = arr.pop();
  let areAllSongs = false;
  //   console.log(type);

  for (let el of arr) {
    let currSong = el.split("_");
    let typeList = currSong[0];
    let songName = currSong[1];
    let songTime = currSong[2];
    let newSong = new Song(typeList, songName, songTime);

    if (typeList == type) {
      console.log(newSong.songName);
    } else if (type === "all") {
      areAllSongs = true;
      allSongsList.push(newSong);
    }
  }

  if (areAllSongs) {
    for (let songOfAll of allSongsList) {
      console.log(songOfAll.songName);
    }
  }
}

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
