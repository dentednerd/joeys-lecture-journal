// You are starting up your own music streaming service to rival Spotify.
// Your task is to write a createPlaylist factory function that produces playlist objects for your users to listen to.
// Your users should be able to name their playlists, add tracks to it by name, get the name of the current track and move on to the next track in the list.

// const partyAnthems = createPlayList('absolute bangers');
// partyAnthems.name // 'absolute bangers'
// partyAnthems.addTrack('superstition');
// partyAnthems.addTrack('uptown girl');
// partyAnthems.tracks // ['superstition', 'uptown girl']
// partyAnthems.getCurrentTrack() // `Now playing: superstition`
// partyAnthems.nextTrack()
// partyAnthems.getCurrentTrack() // 'uptown girl'

function addTrack(track) {
  this.tracks.push(track);
}

function getCurrentTrack() {
  return `Now playing: ${this.tracks[this.currentTrack]}`;
}

function nextTrack() {
  if(this.tracks.length - 1 > this.currentTrack) {
    this.currentTrack++;
  } else {
    this.currentTrack = 0;
  }
}

function createPlayList(name) {
  const playlist = {};
  playlist.name = name;
  playlist.tracks = [];
  playlist.currentTrack = 0;
  playlist.addTrack = addTrack;
  playlist.getCurrentTrack = getCurrentTrack;
  playlist.nextTrack = nextTrack;
  return playlist;
}

module.exports = createPlayList;
