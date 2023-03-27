import { DatePicker, message } from "antd";
import { useState } from "react";

export default function DatePickerExample() {
  const [date, setDate] = useState(null);
  const handleChange = (value: any) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <>
      <DatePicker onChange={handleChange} />
    </>
  );
}
