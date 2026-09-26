import { useState } from 'react'
import { DoublyLinkedList } from '../utils/DoublyLinkedList';
import './HistoryPage.css';

const pages = [
  { url: "https://google.com", title: "Google" },
  { url: "https://wikipedia.org", title: "Wikipedia" },
  { url: "https://github.com", title: "GitHub" },
  { url: "https://stackoverflow.com", title: "Stack Overflow" },
  { url: "https://developer.mozilla.org", title: "MDN Web Docs" },
];

function HistoryPage() {
  const history = new DoublyLinkedList();

  pages.forEach((page) => {
    history.append(page);
  });

  const [currentPage, setCurrentPage] = useState(history.head);

  function goBack() {
    if (currentPage.prev) {
      setCurrentPage(currentPage.prev);
    }
  }

  function goForward() {
    if (currentPage.next) {
      setCurrentPage(currentPage.next);
    }
  }

  return (
    <div className="browser-wrapper">
      <div className="browser-window">
        <div className="browser-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="browser-toolbar">
          <button
            className="nav-icon"
            onClick={goBack}
            disabled={!currentPage.prev}
          >
            ←
          </button>
          <button
            className="nav-icon"
            onClick={goForward}
            disabled={!currentPage.next}
          >
            →
          </button>
          <div className="address-bar">{currentPage.value.url}</div>
        </div>

        <div className="browser-content">
          <h1>{currentPage.value.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;