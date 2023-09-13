import { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import DatePicker from "./components/DatePicker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <div className="border border-2 border-slate-950 w-full h-full flex items-center justify-center flex-col gap-y-20">
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) => format(date, "d")}
        locale="en-GB"
        selectRange={true}
        minDetail="month"
        showFixedNumberOfWeeks={true}
        prev2Label
        next2Label
      />
      <DatePicker />
    </div>
  );
}

export default App;

/*
1. 먼저 위 저화살표 버튼 없애고
2. 그 다음 저 동그라미를 도전해보자!
*/
