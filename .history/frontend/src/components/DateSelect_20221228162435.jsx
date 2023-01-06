import {React,useSta} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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