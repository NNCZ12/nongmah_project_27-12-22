import {React,useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Form

} from "react-bootstrap";
function DateSelect() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Form.Group>
    <DatePicker className='bg-white border text-black'
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      placeholderText="Select a date"
      
    /></Form.Group>
  );
}

export default DateSelect