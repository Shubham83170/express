import React from 'react'

function Landingpage() {
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
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className='text-center'>
      <button type="button" class="btn btn-danger">Delete</button>
      <button type="button" class="btn btn-success ms-2">Edit</button>
      <button type="button" class="btn btn-warning ms-2">View</button>
      </td>
    </tr>
   
    
  </tbody>
</table>
        </div>
      </div>

    </div>
  )
}

export default Landingpage
