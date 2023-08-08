import React from "react";
import profile from "../Asset/unkown user.png";
import Table from "react-bootstrap/Table";

export default function Profile() {
  return (
    <div className=" mt-3 p-5">
      <h1 className="fw-bold fs-4">Clients</h1>
      <p className="text-black-50">View Client profile here</p>
      <div className="bg-white p-3">
        <p>Client's Picture</p>
        <div className="d-flex gap-3">
          <img src={profile} alt="profilepic" className="profile-pic" />
          <div>
            <p>
              <b>Odusote Mayokun</b>
            </p>
            <p>adegoketemitope1909@gmail.com</p>
            <div className="d-flex gap-4">
              <p>Female</p>
              <p>54 years old</p>
              <p>Nigerian</p>
            </div>
          </div>
        </div>
        <Table hover className="mt-4 table-borderless">
          <thead>
            <tr>
              <th className="text-black-50">Full name</th>
              <th className="text-black-50">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Odusote Mayokun</td>
              <td className="fw-bold">adegoketemitope1909@gmaol.com</td>
            </tr>
            <tr>
              <td className="text-black-50">
                Applicants Fullname{" "}
                <span className="text-danger mx-2">(as shown in passport)</span>
              </td>
              <td className="text-black-50">Gender</td>
            </tr>
            <tr>
              <td className="fw-bold">Odusote Mayokun Kemi</td>
              <td className="fw-bold">Female</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex gap-5">
                  <div>
                    <p className="text-black-50">Place of birth</p>
                    <p className="fw-bold">Nigeria</p>
                  </div>
                  <div>
                    <p className="text-black-50">Date of birth</p>
                    <p className="fw-bold">04/11/2012</p>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-black-50">Country of Citenzenship</p>
                  <p className="fw-bold">Nigeria, Uganda</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="text-black-50">Marital Status</p>
                  <p className="fw-bold">Married</p>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-black-50">
                    Education
                    <span className="text-danger mx-2">
                      (Clients highest level oof Education)
                    </span>
                  </p>
                  <p className="fw-bold">Bachelor's Degree</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="text-black-50">Current Occupation</p>
                  <p className="fw-bold">Engineer</p>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-black-50">Phone Number</p>
                  <p className="fw-bold">+234(0)8160730668</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="text-black-50">Residential Address</p>
                  <p className="fw-bold">
                    No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-black-50">Mailing Address</p>
                  <p className="fw-bold">
                    No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="text-black-50">Country of Interest</p>
                  <p className="fw-bold">Iceland</p>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-black-50">Purpose of Travelling</p>
                  <p className="fw-bold">Trading</p>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="d-flex justify-content-end">
          <button className="profile-btn">Back</button>
        </div>
      </div>
    </div>
  );
}
