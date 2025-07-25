import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeEdit = () => {
    //States
    const[id, setID]=useState("");
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[phone, setPhone]=useState("");
    const[active, setActive]=useState(true);
    const[validation, valchange]=useState(false);

    //Logic
    const { employeeID } = useParams();   
    useEffect(() => {
        fetch("http://localhost:8080/employee/" + employeeID)
        .then((res) => {
            return res.json();})
        .then((resp) => {
            setID(resp.id);
            setName(resp.name);
            setEmail(resp.email);
            setPhone(resp.phone);
            setActive(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [employeeID]);

    const navigate=useNavigate();

    const handlesubmit=(e)=> {
      e.preventDefault();
      const employeeData = {id, name, email, phone, active};
      //
      fetch("http://localhost:8080/employee/" + employeeID, {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(employeeData)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/employee-manager');
      }).catch((err)=>{
        console.log(err.message)
      })
    }

    //UI
    return(
    <div className="container">
     <div className="row">
       <div className="offset-lg-3 col-lg-6">

        <form className="container" onSubmit={handlesubmit}>
          <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title">
              <h2>Employee Edit</h2>
            </div>
            <div className="card-body">
              <div className="row">

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input value={id} disabled="disabled" className="form-control"></input>
                   </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input required value={name} onMouseDown={e=>valchange(true)} 
                                onChange={e=>setName(e.target.value)} className="form-control" />
                        {name.length===0 && validation && <span className="text-danger">Enter name</span>}
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Phone</label>
                        <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" />
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-check">
                    <input checked={active} onChange={e=>setActive(e.target.checked)} 
                            type="checkbox" className="form-check-input" />
                        <label  className="form-check-label">Is Active</label>                        
                    </div>
                </div>

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
export default EmployeeEdit;
