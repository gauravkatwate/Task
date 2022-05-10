import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const InsertData = () => {
  const [formdata, setFormData] = useState([
    {
      Que1: "",
      Que2: "",
      Que3: "",
      Que4: "",
      Que5: "",
      Que6: "",
    },
  ]);

  const Addform = () => {
    setFormData([
      ...formdata,
      {
        Que1: "",
        Que2: "",
        Que3: "",
        Que4: "",
        Que5: "",
        Que6: "",
      },
    ]);
  };

  const adddata = () => {
    setHide(true);
    sethidecard(false);
  };

  const showdata = () => {
    setHide(false);
    sethidecard(true);
  };

  const handelonchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formdata];
    list[index][name] = value;
    setFormData(list);
  };

  const [hide, setHide] = useState(false);
  const [hidecard, sethidecard] = useState(true);
  return (
    <>
      <div className={hide === true ? "hideform" : "container formdetailes"}>
        {formdata.map((x, i) => {
          return (
            <form>
              <div className="mb-3 text-center">
                <h2 className="text-primary">Pain & Functional Description</h2>
                <p>
                  The description of the current situation gives your Optimum
                  Trainer a picture of and clues to the underlying causes of
                  your problems
                </p>
              </div>
              <div>
                <strong>
                  If you have problems with pain/aches,stiffness,weakness or
                  functional problems,describe this/these below.(List the
                  symptoms in descending order with the most troublesome first)
                </strong>
              </div>
              <div>
                <span>
                  {" "}
                  <p className="my-4">
                    <strong> Have you been diagnosed with this problem?</strong>{" "}
                    <span>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que1"
                          className="mx-2"
                          value="Not relevant"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>Not relevant</span>
                      </label>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que1"
                          className="mx-2"
                          value="Yes"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>Yes</span>
                      </label>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que1"
                          className="mx-2"
                          value="No"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>No</span>
                      </label>
                    </span>
                  </p>{" "}
                </span>
                <span>
                  {" "}
                  <p className="my-4">
                    <strong>
                      Did the problem start after a physical trauma?
                    </strong>{" "}
                    <span>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que2"
                          className="mx-2"
                          value="Not relevant"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>Not relevant</span>
                      </label>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que2"
                          className="mx-2"
                          value="Yes"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>Yes</span>
                      </label>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que2"
                          className="mx-2"
                          value="No"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>No</span>
                      </label>
                    </span>
                  </p>{" "}
                </span>
                <span>
                  {" "}
                  <p className="my-4">
                    <strong>
                      {" "}
                      Did the problem start after a mental trauma?
                    </strong>{" "}
                    <span>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que3"
                          className="mx-2"
                          value="Not relevant"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>Not relevant</span>
                      </label>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que3"
                          className="mx-2"
                          value="Yes"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>Yes</span>
                      </label>
                      <label className="l-radio mx-3">
                        <input
                          type="radio"
                          id="f-option"
                          name="Que3"
                          className="mx-2"
                          value="No"
                          onChange={(e) => handelonchange(e, i)}
                        />
                        <span>No</span>
                      </label>
                    </span>
                  </p>{" "}
                </span>
              </div>
              <strong>How often do you experience the problem? </strong>
              <br />
              <span>
                <label className="l-radio mx-3">
                  <input
                    type="radio"
                    id="f-option"
                    name="Que4"
                    className="m-2"
                    value="Not relevant"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <span>Not relevant</span>
                </label>
                <label className="l-radio mx-3">
                  <input
                    type="radio"
                    id="f-option"
                    name="Que4"
                    className="mx-2"
                    value="Daily"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <span>Daily</span>
                </label>
                <label className="l-radio mx-3">
                  <input
                    type="radio"
                    id="f-option"
                    name="Que4"
                    className="mx-2"
                    value="Several times/week"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <span>Several times/week</span>
                </label>
                <label className="l-radio mx-3">
                  <input
                    type="radio"
                    id="f-option"
                    name="Que4"
                    className="mx-2"
                    value="A few times/month"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <span>A few times/month</span>
                </label>
                <label className="l-radio mx-3">
                  <input
                    type="radio"
                    id="f-option"
                    name="Que4"
                    className="mx-2"
                    value="A few times/year"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <span>A few times/year</span>
                </label>
              </span>
              <div className="my-4">
                <strong>When do You experience the problem?</strong>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value="Not relevant"
                    name="Que5"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <label className="form-check-label">Not relevant</label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value="When lying down"
                    name="Que5"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <label className="form-check-label">When lying down</label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value="When sitting"
                    name="Que5"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <label className="form-check-label">When sitting</label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value="Under standing"
                    name="Que5"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <label className="form-check-label">Under standing</label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value="In walking"
                    name="Que5"
                    onChange={(e) => handelonchange(e, i)}
                  />
                  <label className="form-check-label">In walking</label>
                </div>
              </div>

              <div>
                <strong>
                  How intense is the experience of the problem on average on a
                  0-10 scale?
                </strong>{" "}
                <div className="form-check">
                  <span className="mx-4">1</span>{" "}
                  <span className="mx-4">2</span>{" "}
                  <span className="mx-4">3</span>{" "}
                  <span className="mx-4">4</span>{" "}
                  <span className="mx-4">5</span>{" "}
                  <span className="mx-4">6</span>{" "}
                  <span className="mx-4">7</span>{" "}
                  <span className="mx-4">8</span>{" "}
                  <span className="mx-4">9</span>{" "}
                  <span className="mx-4">10</span>
                </div>
                <div className="form-check">
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="1"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="2"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="3"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="4"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="5"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="6"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="7"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="8"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="9"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                  <span className="mx-4">
                    <input
                      type="radio"
                      id="f-option"
                      name="Que6"
                      value="10"
                      onChange={(e) => handelonchange(e, i)}
                    />
                  </span>
                </div>
              </div>
              <hr></hr>

              {/* <div className="text-center">
                <AiFillPlusCircle
                  size={30}
                  className="text-primary"
                  onClick={Addform}
                />
              </div>

              <hr></hr> */}
            </form>
          );
        })}
        <div className="text-center">
          <AiFillPlusCircle
            size={30}
            className="text-primary"
            onClick={Addform}
          />
        </div>
        <hr></hr>
      </div>
      <div className="container">
        {formdata.map((x, i) => {
          return (
            <div className={hidecard === true ? "hidecard" : ""}>
              <div className="card summerycard bg-white shadow-sm mt-5">
                <div className="card-body">
                  <h5 className="card-title text-center shadow-sm">Summery</h5>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">
                          Have you been diagnosed with this problem?{" "}
                        </th>
                        <td>{formdata[i].Que1}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Did the problem start after a physical trauma?{" "}
                        </th>
                        <td>{formdata[i].Que2}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Did the problem start after a mental trauma?{" "}
                        </th>
                        <td>{formdata[i].Que3}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          How often do you experience the problem?
                        </th>
                        <td>{formdata[i].Que4}</td>
                      </tr>
                      <tr>
                        <th scope="row">When do You experience the problem?</th>
                        <td>{formdata[i].Que5}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          How intense is the experience of the problem on
                          average on a 0-10 scale?
                        </th>
                        <td>{formdata[i].Que6}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center my-5">
        <button className="btn btn-primary mx-2" onClick={showdata}>
          BACK
        </button>
        <button className="btn btn-primary mx-2" onClick={adddata}>
          NEXT
        </button>
      </div>
    </>
  );
};

export default InsertData;
