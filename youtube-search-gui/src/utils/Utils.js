export function isYouTubeLink(url) {
  if (url.includes("https://www.youtube.com")) {
    if (url.match(/watch\?v=([a-zA-Z0-9\-_]{11})/)) {
      return true;
    }
  } else if (url.includes("https://youtu.be")) {
    if (url.match(/([a-zA-Z0-9\-_]{11})/)) {
      return true;
    }
  }
  return false;
}

export function transformKeys(key) {
  const KEYS_SHARP = {
    "1A": "G# minor",
    "2A": "D# minor",
    "3A": "A# minor",
    "4A": "F minor",
    "5A": "C minor",
    "6A": "G minor",
    "7A": "D minor",
    "8A": "A minor",
    "9A": "E minor",
    "10A": "B minor",
    "11A": "F# minor",
    "12A": "C# minor",
    "1B": "B major",
    "2B": "F# major",
    "3B": "C# major",
    "4B": "G# major",
    "5B": "D# major",
    "6B": "A# major",
    "7B": "F major",
    "8B": "C major",
    "9B": "G major",
    "10B": "D major",
    "11B": "A major",
    "12B": "E major"
    };
  return KEYS_SHARP[key];
}