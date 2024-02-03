import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
    return (
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
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Loginpage
