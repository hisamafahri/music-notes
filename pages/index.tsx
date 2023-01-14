import { useEffect, useState } from "react";

const Home = () => {
  const [currentNote, setCurrentNote] = useState("");
  const NOTES: string[] = [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
  ];
  const getRandomNotes = () => {
    return NOTES[Math.floor(Math.random() * NOTES.length)];
  };
  useEffect(() => {
    setCurrentNote(getRandomNotes());
    const keyDownHandler = (event: any) => {
      if (event.key === " ") {
        setCurrentNote(getRandomNotes());
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <h2
      style={{
        textAlign: "center",
        fontSize: "96px",
      }}
    >
      {currentNote}
    </h2>
  );
};

export default Home;
