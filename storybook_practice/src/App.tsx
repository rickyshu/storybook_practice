import { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <div className="border border-2 border-slate-950 w-full h-full flex items-center justify-center">
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) => format(date, "d")}
        locale="en-GB"
        selectRange={true}
        minDetail="month"
      />
    </div>
  );
}

export default App;
