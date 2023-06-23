<<<<<<< HEAD
import './App.css';
// import JobListing from './pages/JobListing';
import Landing from './pages/Landing';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      {/* <JobListing/> */}
      <Landing />
    </>
=======
import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
>>>>>>> origin/om
  );
}

export default App;
