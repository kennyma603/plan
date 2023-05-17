import Typography from "@mui/material/Typography";

export const Intro = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Back to office Planner
      </Typography>
      <Typography variant="body1" gutterBottom>
        This little app can calculate In-Office percentage for you.
        <ul>
          <li>Add the dates that you were in office,</li>
          <li>Add the dates that you are planning to come in office,</li>
          <li>Eclude any PTO, Sick days, Stat holidays,</li>
          <li>
            You In-Office Pecentage = (# of days in office + # of Planned days
            in office) / (Total workdays - Excluded days)
          </li>
        </ul>
      </Typography>
    </>
  );
};
