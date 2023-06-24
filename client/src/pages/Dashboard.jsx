import React from 'react';
import '../css/dashboard.css';

function Dashboard() {
  return (
    <div id="Form">
            <form className='submit' >
              <h1>POST A JOB</h1>
              Enter the Job: <input type="text" name="title" placeholder="Enter your name" />
              <br />
              Type of job: <input type="text" name="job type" placeholder="Enter type of job" />
              <br />
              Job Description: <textarea name="comment" form="usrform">Enter text here...</textarea>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
  )
}

export default Dashboard