import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Loginpage() {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-sm-5'>
                        <form className='border p-3  bg-light shadow'>
                            <h3 className='text-center'>Login Page</h3>
                            <div class="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone No</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" />

                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="mydasboard" type="submit" className="btn btn-success m-2">Dasboard</Link>
                            <Link to="mydasboard" type="submit" className="btn btn-danger m-1"  data-bs-toggle="modal" data-bs-target="#registor">Registor</Link>
                        </form>
                    </div>
                </div>

            </div>

            {/* ========================================== MODAL ============================================ */}
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="modal fade" id="registor" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 ms-auto " id="exampleModalLabel">User Registor Page</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control"  {...register("firstname", { required: true })} />
                                        {errors.firstname && <span className='text-danger'>This field is required</span>}
                                    </div>
                                    <div className='col-6'>
                                        <label className="form-label">Last name</label>
                                        <input type="text" className="form-control" {...register("lastname")} />
                                    </div>

                                    <div className='col-6'>
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control"  {...register("email")} />
                                    </div>
                                    <div className='col-6'>
                                        <label className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" {...register("phonenumber")} />
                                    </div>

                                    <div className='col-6'>
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" {...register("password")} />
                                    </div>
                                    <div className='col-6'>
                                        <label className="form-label">Confirm Password</label>
                                        <input type="text" className="form-control" {...register("confirmpassword")} />
                                    </div>

                                    <div className='col-12'>
                                        <label className="form-label">Address</label>
                                        <textarea className="form-control" value="" {...register("address")}>type comment here</textarea>
                                    </div>

                                    <div className='col-12'><h3>Gender</h3></div>
                                </div>


                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" {...register("male")} />
                                    <label className="form-check-label" >Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" {...register("female")} />
                                    <label className="form-check-label" >Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" {...register("Other")} />
                                    <label className="form-check-label" >Other</label>
                                </div>


                            </div>
                        </div>

                        <div className="modal-footer justify-content-center">
                            {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cencel</button> */}
                            <button type="submit" className="btn btn-success">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>


        </>
    )
}

export default Loginpage
