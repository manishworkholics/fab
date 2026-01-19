import { APP_ROLES, Item } from "@/utils/constant";
import BagIcon from "../icons/BagIcon";
import ChatIcon from "../icons/ChatIcon";
import CommunityIcon from "../icons/CommunityIcon";
import FileIcon from "../icons/FileIcon";
import HomeIcon from "../icons/HomeIcon";
import NoteHalfIcon from "../icons/NoteHalfIcon";

export const sideNavData: Item[] = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    label: "/dashboard",
    role: [
      APP_ROLES.FABS_EMS,
      APP_ROLES.FABS_PM,
      APP_ROLES.FABS_TALENT_MANAGER,
      APP_ROLES.FABS_TALENTS,
      APP_ROLES.FABS_BOM,
    ],
  },
  {
    id: 2,
    name: "RFQ Management",
    icon: <NoteHalfIcon />,
    label: "/pm/rfq",
    role: [APP_ROLES.FABS_PM],
  },
  {
    id: 3,
    name: "EMS Companies",
    icon: <NoteHalfIcon />,
    label: "/view-ems",
    role: [APP_ROLES.FABS_PM],
  },
  {
    id: 4,
    name: "Quote Management",
    icon: <NoteHalfIcon />,
    label: "/ems/manage-quote",
    role: [APP_ROLES.FABS_EMS],
  },
  {
    id: 5,
    name: "Projects",
    icon: <BagIcon width="16px" height="16px" fill="#344054" />,
    label: "/pm/projects",
    role: [APP_ROLES.FABS_EMS, APP_ROLES.FABS_PM],
  },
  {
    id: 6,
    name: "Messages",
    icon: <ChatIcon />,
    label: "/pm/message",
    role: [
      APP_ROLES.FABS_EMS,
      APP_ROLES.FABS_PM,
      APP_ROLES.FABS_TALENT_MANAGER,
      APP_ROLES.FABS_TALENTS,
    ],
  },
  {
    id: 7,
    name: "Files",
    icon: <FileIcon />,
    label: "/files",
    role: [APP_ROLES.FABS_EMS, APP_ROLES.FABS_PM],
  },
  {
    id: 8,
    name: "Community",
    icon: <CommunityIcon />,
    label: "/community",
    role: [APP_ROLES.FABS_PM],
  },
  {
    id: 9,
    name: "Bom Checker",
    icon: <NoteHalfIcon />,
    label: "/bom-checker",
    role: [APP_ROLES.FABS_BOM, APP_ROLES.FABS_PM],
  },
];
