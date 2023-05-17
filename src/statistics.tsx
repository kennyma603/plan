import { StatisticsContainer } from "./styled";
import { ContentType } from "./enums";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const WorkDayMap = {
  "2023-5": 23,
  "2023-6": 21,
  "2023-7": 21
};

export const Statistics = ({ dates }: { dates: { key: string } }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  const getNumberOfWorkDays = (monthString: string) => {
    let datesKey = Object.keys(dates);
    let matchDatesCount = WorkDayMap[monthString];
    datesKey.forEach((date) => {
      if (date.includes(monthString) && dates[date] === ContentType.Exclude) {
        matchDatesCount--;
      }
    });
    return matchDatesCount;
  };

  const getNumberOfInOfficeDays = (monthString: string) => {
    let datesKey = Object.keys(dates);
    let matchDatesCount = 0;
    datesKey.forEach((date) => {
      if (date.includes(monthString) && dates[date] === ContentType.InOffice) {
        matchDatesCount++;
      }
    });
    return matchDatesCount;
  };

  const numberOfWorkDays_May = getNumberOfWorkDays("2023-5");
  const numberOfInOfficeDays_May = getNumberOfInOfficeDays("2023-5");
  const percentageInOffice_May = Math.floor(
    (numberOfInOfficeDays_May / numberOfWorkDays_May) * 100
  );

  const numberOfWorkDays_June = getNumberOfWorkDays("2023-6");
  const numberOfInOfficeDays_June = getNumberOfInOfficeDays("2023-6");
  const percentageInOffice_June = Math.floor(
    (numberOfInOfficeDays_June / numberOfWorkDays_June) * 100
  );

  const numberOfWorkDays_July = getNumberOfWorkDays("2023-7");
  const numberOfInOfficeDays_July = getNumberOfInOfficeDays("2023-7");
  const percentageInOffice_July = Math.floor(
    (numberOfInOfficeDays_July / numberOfWorkDays_July) * 100
  );

  const numberOfWorkDays_Quarter =
    numberOfWorkDays_May + numberOfWorkDays_June + numberOfWorkDays_July;
  const numberOfInOfficeDays_Quarter =
    numberOfInOfficeDays_May +
    numberOfInOfficeDays_June +
    numberOfInOfficeDays_July;
  const percentageInOffice_Quarter = Math.floor(
    (numberOfInOfficeDays_Quarter / numberOfWorkDays_Quarter) * 100
  );

  return (
    <StatisticsContainer>
      <p>
        Work days: exclude holidays and PTO; Office days: include planned days:
      </p>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <h3>May 2023</h3>
            <div>Work Days: {numberOfWorkDays_May},</div>
            <div>Office Days: {numberOfInOfficeDays_May},</div>
            <div>In office: {percentageInOffice_May}%</div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>June 2023</h3>
            <div>Work Days: {numberOfWorkDays_June},</div>
            <div>Office Days: {numberOfInOfficeDays_June},</div>
            <div>In office: {percentageInOffice_June}%</div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>July 2023</h3>
            <div>Work Days: {numberOfWorkDays_July},</div>
            <div>Office Days: {numberOfInOfficeDays_July},</div>
            <div>In office: {percentageInOffice_July}%</div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <h3>Quarter Stat</h3>
            <div>
              Work Days: {numberOfWorkDays_Quarter}, Office Days:{" "}
              {numberOfInOfficeDays_Quarter}, In office:{" "}
              {percentageInOffice_Quarter}%
            </div>
          </Item>
        </Grid>
      </Grid>
    </StatisticsContainer>
  );
};
