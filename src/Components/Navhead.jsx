import { Container, Badge, Image } from "react-bootstrap";
import { AiOutlineBell } from "react-icons/ai";
import Profilepic from "../Asset/profile.jpeg";
import links from "../utils/dashboardlinks";
import { NavLink } from "react-router-dom";

export default function Navhead() {
  return (
    <div className="bg-white p-2">
      <div className="d-flex justify-content-end align-items-center gap-4">
        <div className="position-relative">
          <AiOutlineBell size="30px" />
          <Badge
            pill
            bg="danger"
            className="mx-2 position-absolute top-0 start-50 translate-middle"
          >
            2
          </Badge>
        </div>
        <h1 className="fs-6 fw-bold">Kelin</h1>
        <Image
          src={Profilepic}
          className="rounded-circle"
          style={{ width: "60px", height: "60px" }}
        />
      </div>
    </div>
  );
}
