import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
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

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (date === "") {
             toast.error('date field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/product")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container-fluid">
            <img className ="card-img bg-cover" src="/assets/panday.jpg" alt="bgimg" height="700px"/>
                <section className='card-img-overlay mt-5 d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5 text-light bg-success rounded bg-opacity-75" style={{ width: "30%" }}>
                        <h3 className='text-center text-light col-lg-6'>Sign Up</h3>
                        <Form className='fw fw-bold'>
                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                              <label htmlFor="name">
                                <i className="fa fa-user"></i> USERNAME
                              </label>

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                              <label htmlFor="email">
                              <i class="fa fa-envelope"></i> EMAIL
                              </label>

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                              <label htmlFor="dob">
                                DATE OF BIRTH
                              </label>


                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                              <label htmlFor="password">
                                PASSWORD
                              </label>

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-12' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3 text-light'>Already Have an Account? <span><NavLink to="/login" className="bg-warning rounded p-1">Sign In</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Register