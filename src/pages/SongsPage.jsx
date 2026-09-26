import { useState } from 'react'
import { LinkedList } from '../utils/LinkedList';
import './SongsPage.css';

const songs = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Imagine", artist: "John Lennon" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Billie Jean", artist: "Michael Jackson" },
  { title: "Thriller", artist: "Michael Jackson" },
];

function SongsPage() {
  const list = new LinkedList();

  songs.forEach((song) => {
    list.append(song);
  });

  const [currentSong, setCurrentSong] = useState(list.head);

  function goToNextSong() {
    if (currentSong.next) {
      setCurrentSong(currentSong.next);
    }
  }

  return (
    <div className="player">
      <div className="card">
        <p className="artist">{currentSong.value.artist}</p>
        <h1 className="title">{currentSong.value.title}</h1>
        <button className="next-button" onClick={goToNextSong}>
          Next Song ▶
        </button>
      </div>
    </div>
  );
}

export default SongsPage;