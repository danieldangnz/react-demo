import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmployeeCreate = () => {
    //States
    const[id, setId]=useState("");
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[phone, setPhone]=useState("");
    const[active, setActive]=useState(true);    
    //Use useNavigate hook to navigate to another page
    const navigate = useNavigate();
    //Validate input: use "validation" state to track the validation process
    const[validation, setValidation]=useState(false);

    //Logic
    const handlesubmit = (e) => {
        e.preventDefault();
        //console.log({id, name, email, phone, active});//just for testing
        //Create an object employeeData storing all data retrieve from HTML form
        const employeeData = {name, email, phone, active};
        //Use fetch function to send POST request
        fetch('http://localhost:8080/employee', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify(employeeData)
        })
        .then( (res) => {
            alert("Save New Employee Successfully!");
            //Use useNavigate hook to navigate to another page
            navigate('/employee-manager');
        } )
        .catch( (error) => {console.log(error.message)} );
    }
    //UI
    return(
     <div className="container">
       <div className="row">
         <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit} >
               <div className="card">
                  <div className="card-title">
                     <h2>Employee Data:</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {/*ID input - hidden */}  
                      <div className="col-lg-12">
                        <div className="form-group" style={{display: 'none'}}>
                            <label>ID</label>
                            <input disabled="disabled" className="form-control" value={id} onChange={e=>setId(e.target.value)}  />
                        </div>
                      </div>
                      {/*Name input */}
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input className="form-control" value={name} onChange={e=>setName(e.target.value)} required 
                                 onMouseDown={ e=>setValidation(true) } />
                          {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                        </div>
                      </div>
                      {/*Email input */}
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required 
                                  onMouseDown={ e=>setValidation(true) } />
                          {email.length===0 && validation && <span className="text-danger">Enter the email</span>}
                        </div>
                      </div>
                      {/*Phone input */}
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Phone</label>
                          <input className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} required 
                                 onMouseDown={ e=>setValidation(true) } />
                          {phone.length===0 && validation && <span className="text-danger">Enter the phone</span>}       
                        </div>
                      </div>
                      {/*Checkbox input */}
                      <div className="col-lg-12">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" checked={active} 
                                  onChange={e=>setActive(e.target.value)} />
                          <label  className="form-check-label">Is Active</label>                      
                        </div>
                      </div>
                      {/*Two Buttons: Save and Back */}
                      <div className="col-lg-12">
                        <div className="form-group">
                           <button className="btn btn-success" type="submit">Save</button>
                           <Link to="/employee-manager" className="btn btn-danger">Back</Link>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export default EmployeeCreate;
