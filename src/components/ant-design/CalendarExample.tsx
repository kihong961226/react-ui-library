import { Calendar, Modal } from "antd";
import { Reducer, useReducer, useState } from "react";

function useSState() {
  const [a, setA] = useState(0);

  return [a, setA] as const;
}

interface ReducerState {
  a: number;
  b: number;
}

function useAmolangReducer<T extends {}>(initialState: T) {
  const result = useReducer<Reducer<T, Partial<T>>>(
    (prev, action) => ({ ...prev, ...action }),
    initialState
  );

  return result;
}

export default function CalendarExample() {
  const [b, setB] = useSState();

  const [amolang, dispatchAmolang] = useAmolangReducer<ReducerState>({
    a: 1,
    b: 2,
  });
  const [amolang2, dispatchAmolang2] = useAmolangReducer<{
    c: number;
    d: string;
  }>({ c: 0, d: "" });
  const [open, setOpen] = useState(false);
  const [pickValue, setPickValue] = useState({ year: 0, month: 0, date: 0 });
  // const [date, setDate] = useState(0);
  // const [month, setMonth] = useState(0);
  // const [year, setYear] = useState(0);

  const onSetDate = () => {
    setPickValue((prev) => ({ ...prev, date: 100 }));
  };
  const onSetMonth = () => {
    setPickValue((prev) => ({ ...prev, month: 100 }));
  };

  const handleClickCalendar = (date: any) => {
    setOpen(true);
    setPickValue({
      year: date.$y,
      month: date.$M + 1,
      date: date.$D,
    });
    // setDate(date.$D);
    // setMonth(date.$M + 1);
    // setYear(date.$y);
    // console.log(date.$D); // 날짜
    // console.log(date.$M + 1); // 월
  };
  const clickButtonInModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpen(false);
  };
  return (
    <div
      style={{
        paddingLeft: 100,
        paddingRight: 100,
      }}
    >
      <Calendar onSelect={handleClickCalendar} />
      <Modal
        title="Modal Test"
        open={open}
        onOk={clickButtonInModal}
        cancelText="닫기"
        cancelButtonProps={{ danger: true, type: "primary" }}
        onCancel={clickButtonInModal}
        centered
      >
        <p>선택한 년 : {pickValue.year}</p>
        <p>선택한 월 : {pickValue.month}</p>
        <p>선택한 일 : {pickValue.date}</p>
      </Modal>
    </div>
  );
}
