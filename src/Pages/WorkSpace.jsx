import React from "react";
import { Col, Row } from "react-bootstrap";

export default function WorkSpace() {
  return (
    <div className="mt-5 px-4">
      <h1 className="fs-4 fw-bold">Your Workspace</h1>
      <p className="text-secondary">Welcome, xxx</p>
      <div>
        <p className="mt-4 fw-bold">Overview</p>
        <Row className="g-4 gap-5">
          <Col md={5}>
            <div className="shadow bg-white">
              <div style={{ border: "5px solid orange" }} />
              <div>
                <p className="fw-bold love p-2">Today's Agenda</p>
                <p className="small p-4">
                  You haven't added any event schedule for today.{" "}
                  <span className="text-warning">Add</span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="shadow bg-white">
              <div style={{ border: "5px solid orange" }} />
              <div>
                <p className="fw-bold love p-2">Activity Report</p>
                <p className="small p-4">
                  __________________ Tuesday(18th sep. 2019 you added a anew
                  client). <span className="text-warning">Status Pending</span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="shadow bg-white">
              <div style={{ border: "5px solid orange" }} />
              <div>
                <p className="fw-bold love p-2">Task that are due</p>
                <p className="small p-4 fw-bold love">
                  follow up with. <span className="text-warning">Odusote</span>
                  <p>
                    Due on:1/12/2021{"   "}
                    <span>Created on 1/15/2021</span>
                  </p>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
