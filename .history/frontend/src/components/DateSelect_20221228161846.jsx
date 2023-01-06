import React from 'react'

function DateSelect() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      placeholderText="Select a date"
    />
  );
}

export default DateSelect