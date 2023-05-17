import { CalendarTileContentProps } from "./types";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import BusinessIcon from "@mui/icons-material/Business";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import { ContentType } from "./enums";

export const CalendarTileContent = ({
  type,
  tileDate,
  isUserDefinedDate
}: CalendarTileContentProps) => {
  const getIcon = (type: ContentType) => {
    switch (type) {
      case ContentType.InOffice:
        return <OtherHousesIcon color="success" />;
      case ContentType.Exclude:
        return <FolderOffIcon color="action" />;
    }
  };

  const day = tileDate.split("-")[2];

  return (
    <div className={`day ${type}`} aria-label={tileDate}>
      {day}
    </div>
  );
};
