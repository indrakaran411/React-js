import React, { useState } from 'react';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Song 1', artist: 'Artist 1', src: 'song1.mp3' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', src: 'song2.mp3' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', src: 'song3.mp3' }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <div>
        <h3>{songs[currentSongIndex].title} - {songs[currentSongIndex].artist}</h3>
        <audio controls autoPlay={isPlaying} onEnded={playNext}>
          <source src={songs[currentSongIndex].src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div>
          <button onClick={playPrev}>Previous</button>
          <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={playNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
