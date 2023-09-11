import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="border border-2 border-slate-950 w-full h-full flex items-center justify-center">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;
