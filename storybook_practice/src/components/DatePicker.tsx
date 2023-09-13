//date-fns를 적용해서 오늘 날짜를 표시하고
//
import { format } from "date-fns";

function DatePicker() {
  const formattedDate = format(new Date(), "yyyy-MM-dd");

  return (
    <div className=" text-[0.875rem] font-medium text-[#535884] flex justify-between rounded-[0.625rem] items-center w-[21.875rem] h-[3.125rem] bg-[#F6F6F6] px-[1.875rem] py-[0.625rem]">
      <div className="">{formattedDate}</div>
      <div className="">-</div>
      <div className="">{formattedDate}</div>
    </div>
  );
}
export default DatePicker;
