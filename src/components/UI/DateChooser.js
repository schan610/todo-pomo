import { DatePicker } from "@mui/x-date-pickers";

import dayjs from "dayjs";
const DateChooser = () => {
  const popperSx = {
    "&.MuiFormControl-root": {
      width: "12rem",
    },
    "& .MuiInputBase-root": {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
    },

    "& .MuiInputBase-input": {
      paddingLeft: "0",
      paddingRight: "0",
      padding: "0",
      textAlign: "right",
    },
    "& .MuiIconButton-root": {
      border: "none",
      padding: "0",
      fontSize: "14px",
      overflow: "hidden",
    },
    "& .MuiSvgIcon-root": {
      height: "1.8rem",
      width: "1.8rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };
  return (
    <div className="datepickers">
      <DatePicker
        defaultValue={dayjs()}
        sx={popperSx}
        slotProps={{
          textField: {
            size: "small",
          },
        }}
      />
    </div>
  );
};

export default DateChooser;
