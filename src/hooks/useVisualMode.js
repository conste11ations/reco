import { useState } from "react";

export default function useVisualMode (defaultMode) {
  const [mode, setMode] = useState(defaultMode);
  const [history, setHistory] = useState([defaultMode]);

  const transition = (newMode, replace = false) => {
    replace ? setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]) : setHistory(prev => ([...prev, newMode]));
  }

  const back = () => {
    history.length >= 2 ? setHistory(prev => [...prev.slice(0, history.length - 1)]) : setMode(defaultMode)
  }

  return { mode: history[history.length - 1], transition, back };
}