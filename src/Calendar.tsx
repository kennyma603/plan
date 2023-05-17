import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarTileContent } from "./CalendarTileContent";
import { ContentType } from "./enums";
import { UserDefinedDate } from "./types";
import "react-calendar/dist/Calendar.css";
import { CalendarContainer } from "./styled";
import { CustomizedDialog } from "./CustomizedDialog";

// const userDefinedDates: UserDefinedDate = {
//   "2023-3-23": { type: ContentType.InOffice },
//   "2023-3-29": { type: ContentType.Exclude }
// };

export const CalendarApp = ({
  dates,
  user
}: {
  dates: object;
  user: object;
}) => {
  const userDefinedDates = dates;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getFormattedTileDate = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const renderTileContent = ({ date, view }) => {
    const formattedTileDate = getFormattedTileDate(date);

    if (view !== "month") {
      return null;
    }

    return (
      <CalendarTileContent
        type={userDefinedDates[formattedTileDate]}
        tileDate={formattedTileDate}
        isUserDefinedDate={userDefinedDates.hasOwnProperty(formattedTileDate)}
      />
    );
  };

  const onDayCellClicked = (date) => {
    setDate(date);
    handleClickOpen();
  };

  return (
    <div className="app">
      <CalendarContainer>
        <Calendar
          minDate={new Date("2023-5-1")}
          maxDate={new Date("2023-7-31")}
          className={["calendarApp"]}
          onChange={onDayCellClicked}
          value={date}
          tileContent={renderTileContent}
        />
      </CalendarContainer>
      {/* <div className="text-center">Selected date: {date.toDateString()}</div> */}
      <CustomizedDialog
        key={date.toString()}
        isOpen={open}
        handleClose={handleClose}
        selectedDate={date}
        type={userDefinedDates[getFormattedTileDate(date)]}
        user={user}
      />
    </div>
  );
};
