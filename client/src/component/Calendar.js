import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DtPicker } from 'react-calendar-datetime-picker'
import { setSelectedDate } from '../features/formSlice2';

function Calendar() {
    const selectedDate = useSelector((state) => state.calendar.selectedDate);
    const dispatch = useDispatch();
  
    const handleDateChange = (date) => {
      dispatch(setSelectedDate(date));
    };
  
    return (
      <DtPicker
        selected={selectedDate}
        onChange={handleDateChange}
        display="dropdown"
      />
    );
}
export default Calendar;