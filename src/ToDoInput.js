import React from 'react'
import Navvv from './Navvv'
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate, useParams } from 'react-router-dom';

export default function ToDoInput() {
    const { id } = useParams()
    const [name, setName] = useState("");
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const asd = localStorage.getItem('data')
    const navigate = useNavigate()



    useEffect(() => {
        if (asd) {
            setData(JSON.parse(asd))
        } else { setData([]) }
    }, [])

    useEffect(() => {
        const local_data = JSON.parse(asd)
        if (local_data) {
            local_data.map((data, index) => {
                if (index == id) {
                    setEditIndex(index)
                    setName(data)
                }
            })
        }
    }, [])
    // console.log(name);




    const submitText = () => {
        let todo;
        if (editIndex !== null) {
            const newData = [...data];
            newData[editIndex] = name;
            setData(newData);
            todo = (newData[editIndex])
            setEditIndex(null);
            localStorage.setItem("data", JSON.stringify(newData))
        } else {
            todo = ([...data, name]);
            setData(todo)
            localStorage.setItem("data", JSON.stringify(todo))
        }
        navigate(`/ToDoList`)
        setName("");
    };
    return (
        <div>
            <Navvv />
            <div className='container'>
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <div>
                        <h1 className="centrr">Todo Input</h1>
                    </div>

                    <div className="card p-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-card-list"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                </svg>
                            </InputGroup.Text>
                            <Form.Control
                                required
                                placeholder="New ToDo"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </InputGroup>

                        <Button variant="contained" size="medium" onClick={submitText}>
                            {editIndex !== null ? "Update" : "Add New ToDo"}
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
