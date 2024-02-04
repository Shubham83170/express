import React, { useEffect, useState } from 'react'

function Landingpage() {

  const [mydata, setdatafunc] = useState([])

  useEffect(() => {
    fetch('http://localhost:8900/getalldata')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setdatafunc(data)
      })
  }, [])


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <div className="card text-dark bg-warning mb-3" >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text-dark bg-warning mb-3" >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text-dark bg-warning mb-3" >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text-dark bg-warning mb-3" >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">S.no.</th>
                <th scope="col">MongodbId</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                mydata.map((d,s) => {
                  return (
                    <tr>
                      <th scope="row">{++s}</th>
                      <td>{d._id}</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td className='text-center'>
                        <button type="button" className="btn btn-danger">Delete</button>
                        <button type="button" className="btn btn-success ms-2">Edit</button>
                        <button type="button" className="btn btn-warning ms-2">View</button>
                      </td>
                    </tr>
                  )
                })
              }



            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Landingpage
