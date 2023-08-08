import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Client() {
  return (
    <div className="container px-4 ">
      <h1 className="fw-bold fs-4">Clients</h1>
      <p className="text-black-50">Heres the client's list</p>
      <div>
        <div className="clients bg-white ">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <input
              type="search"
              autoFocus
              className="rounded-2 w-75 position-relative "
              placeholder="Search by name email "
            />
            <AiOutlineSearch className="position-absolute top-50 start-0" />
            <button
              style={{ height: "3rem" }}
              className="w-15 text-white bg-warning border-0 rounded-3"
            >
              Add new client
            </button>
          </div>
        </div>
      </div>
      <div>
        <table className="tab">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Residential Address</th>
          </tr>
          <tr>
            <td>Adegoke Oluwadamilare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2 Olonade Close, Monato, Ibadan Oyo State Nigeria</td>
          </tr>
          <tr>
            <td>Adegoke Oluwadamilare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2 Olonade Close, Monato, Ibadan Oyo State Nigeria</td>
          </tr>
          <tr>
            <td>Adegoke Oluwadamilare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2 Olonade Close, Monato, Ibadan Oyo State Nigeria</td>
          </tr>
          <tr>
            <td>Adegoke Oluwadamilare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2 Olonade Close, Monato, Ibadan Oyo State Nigeria</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
