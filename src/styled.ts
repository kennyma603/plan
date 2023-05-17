import styled from "styled-components";

export const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */

  /* https://dribbble.com/shots/7239982-Calendar-App-design/attachments/217275?mode=media */
  width: 100%;
  min-height: 180px;
  background: #6fbedc;
  border-radius: 25px;
  padding: 0 0 40px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 50px;

  .react-calendar {
    width: 100%;
    background: none;
    border: none;
  }

  .react-calendar__month-view__days__day abbr {
    display: none;
  }

  .react-calendar__month-view__days__day .day {
    display: block;
    /* padding: 10px; */
    /* height: 40px; */
    width: 38px;
    padding: 10px 0px;
    border: 1px solid transparent;
    border-radius: 22px;
    color: #fff;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day .InOffice {
    background: #f97173;
  }

  .react-calendar__month-view__days__day .PlanToComeInOffice {
    background: rgb(249, 113, 115, 0.7);
  }

  .react-calendar__month-view__days__day .Exclude {
    background: #1f365e;
  }

  .react-calendar__month-view__days__day {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: none;
  }

  .react-calendar__tile:enabled:hover .day {
    border: 1px solid #fec868;
  }

  .react-calendar__tile--active,
  .react-calendar__tile--now {
    background: none;
  }

  .react-calendar__tile--now .day {
    border: 1px solid #fff;
  }

  .react-calendar__navigation button:disabled {
    background: none;
  }

  .react-calendar__tile:disabled {
    background-color: #6fbedc;
  }

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }

    button:enabled:hover,
    button:enabled:focus {
      background-color: #6fbedc;
    }
  }
`;

export const StatisticsContainer = styled.div`
  background: #fff;
  border-radius: 25px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 50px;
  padding: 20px 20px;
  margin-top: -20px;
`;
