import { DateCalendar } from "@mui/x-date-pickers";

const Calendar = () => {
  // Styling
  const popperSx = {
    "& .MuiPickersCalendarHeader-root": {
      backgroundColor: "#fff",
      margin: 0,
      paddingTop: 4,
      paddingBottom: 4,
    },
    "& .MuiDayCalendar-header, &  .MuiPickersSlideTransition-root": {
      backgroundColor: "#fff",
    },

    "& .MuiPickersCalendarHeader-labelContainer": {
      fontSize: 16,
    },

    "& .MuiPickersCalendarHeader-switchViewIcon": {
      width: 25,
      height: 25,
    },
    "& .MuiIconButton-root": {
      fontSize: 20,
    },

    "& .MuiPickersDay-root, & .MuiDayCalendar-weekDayLabel": {
      width: 50,
      height: 50,
      fontSize: 14,
    },
    "& .MuiDayCalendar-slideTransition": {
      minHeight: 310,
    },
    "&.MuiDateCalendar-root": {
      width: "100%",
      maxHeight: "100%",
      margin: 0,
    },
  };
  return <DateCalendar sx={popperSx} />;
};

export default Calendar;
