import { AiFillAppstore } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { GrSchedulePlay } from "react-icons/gr";
import { IoIosCalculator } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";

const links = [
  { id: 1, name: "Workspace", icon: <AiFillAppstore />, path: "workspace" },
  { id: 2, name: "Client", icon: <IoIosPeople />, path: "client" },
  {
    id: 3,
    name: "Profile ",
    icon: <GrSchedulePlay />,
    path: "profile",
  },
  { id: 4, name: "Payments", icon: <IoIosCalculator />, path: "#" },
  { id: 5, name: "Tasks", icon: <FaTasks />, path: "#" },
  { id: 5, name: "Message", icon: <AiOutlineMessage />, path: "#" },
  { id: 5, name: "Reports", icon: <TbReportAnalytics />, path: "#" },
];

export default links;
