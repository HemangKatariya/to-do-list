import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Navvv from './Navvv'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  // const [editIndex, setEditIndex] = useState(null);
  const [check, setCheck] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    let asd = localStorage.getItem('data')
    if (asd) {
      setData(JSON.parse(asd))
    } else {
      setData([])
    }
  }, [])



  const removeName = (index) => {
    let wantDelete = JSON.parse(localStorage.getItem('data'));
    wantDelete.splice(index, 1);
    setData([...wantDelete]);
    localStorage.setItem("data", JSON.stringify(wantDelete));
  };


  const editName = (index) => {
    navigate(`/ToDoInput/${index}`)
    // window.location.href = '/ToDoInput';
    // setEditIndex(index);
    // setName(data[index]);
  };

  // const checked = (index) => {
  //   setCheck(index)
  // }

  return (
    <>
      <Navvv />
      <div className="container mt-5">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="card mt-2" >
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <div key={index} className="card m-2" style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ paddingLeft: "10px" }}>
                        <div>{item}</div>
                      </div>
                      <div>
                        <Button
                          className="m-2 p-2"
                          variant="contained"
                          size="small"
                          onClick={() => editName(index)}
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-pencil-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                          </svg>
                        </Button>

                        <Button
                          className="m-2 p-2"
                          variant="contained"
                          size="small"
                          onClick={() => removeName(index)}
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-trash3-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="card m-2" style={{ textAlign: "center" }}>
                <div className="p-3">Oops! No tasks found. </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}




