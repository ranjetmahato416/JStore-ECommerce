import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';
import Navbar from './Navbar';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password

                });

                if (userlogin.length === 0) {
                  toast.error('Invalid UserName or Password.', {
                    position: "top-center",});
                } else {
                    console.log("user login succesfully");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/product")
                }
            }
        }

    }

    return (
        <>
            <div className="container-fluid">
              <img className ="card-img bg-cover" src="/assets/panday.jpg" alt="bgimg" height="700px"/>
                <section className='card-img-overlay mt-5 d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5 text-light bg-success rounded bg-opacity-75" style={{ width: "35%", height: "85%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form className="fw fw-bold">

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <label htmlFor="email">
                                <i class="fa fa-envelope"></i> EMAIL
                              </label>

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <label htmlFor="password">
                                PASSWORD
                              </label>

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>New User? <span><NavLink to="/register" className="bg-warning rounded p-1">Register Now</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login