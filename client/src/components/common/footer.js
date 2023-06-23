import React from 'react'

function Footer() {
  return (
    <>
      <div className="container">
        <ul className="nav col-md-4 mx-auto justify-content-center text-center">
          <li className="nav-item"><a href="#comp" className="nav-link px-2 text-body-secondary">Top Companies</a></li>
          <li className="nav-item"><a href="#cat" className="nav-link px-2 text-body-secondary">Categories</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Jobs</a></li>
          {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li> */}
          {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li> */}
        </ul>
        <footer className="d-flex flex-wrap justify-content-center py-3 border-top">
          <p className="col-md-4 mb-0 text-center text-body-secondary mx-auto">&copy; 2023 Company, Inc</p>
        </footer>
      </div>
    </>
  )
}

export default Footer