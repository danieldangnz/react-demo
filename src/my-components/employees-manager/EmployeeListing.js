import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListing = () => {
    //States
    const [employeeData, setEmployeeData] = useState([]);
    const navigate = useNavigate();

    //Logic
    //Format of userEffect hook: useEffect(() => {}, []);
    useEffect(() => {
        //Fetch data from json-server (API endpoint) using Fetch method
        fetch('http://localhost:8080/employee') //get data from API endpoint
            .then((res) => { return res.json(); }) //then convert to json format
            .then((res) => {
                setEmployeeData(res);//Update data when ready
                console.log(res);
            })
            .catch((error) => { console.log(error.message) });
    }, []);
    //Implement loadDetail()
    const loadDetail = (id) => {
        //use hook useNavigate to open "/employee/detail/:id" link
        navigate('/employee/detail/' + id);
    }
    //Implement loadEdit()
    const loadEdit = (id) => {
        //use hook useNavigate to open "/employee/detail/:id" link
        navigate('/employee/edit/' + id);
    }
    //Implement removeEmployee()
    const removeEmployee = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8080/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();//refresh the page
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    //UI
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    {/*Add button "ADD NEW" */}
                    <div>
                        <Link className="btn btn-success" to="/employee/create" >+ ADD NEW</Link>
                    </div>

                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/*Load employee data from json server (API endpoint) */}
                            {
                                //Need to use directive condition to check if employeeData is available?
                                //Then map (loop) all data to display them on table rows
                                employeeData && employeeData.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>
                                            <a className="btn btn-success"
                                                onClick={() => loadEdit(employee.id)} >EDIT</a>
                                            <a className="btn btn-danger"
                                                onClick={() => removeEmployee(employee.id)} >REMOVE</a>
                                            <a className="btn btn-primary"
                                                onClick={() => loadDetail(employee.id)} >DETAIL</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
export default EmployeeListing;