import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeDetail = () => {
    //States    
    const [employeeData, setEmployeeData] = useState([]);
    //Logic
    //Extract "id" attached on "Link" when sending from other link
    const {employeeID} = useParams();//get "id" on Link
    //Use the hook useEffect and fetch function to retrieve data with that "id"
    useEffect(() => {
        //Fetch data from json-server (API endpoint) using Fetch method
        fetch('http://localhost:8080/employee/' + employeeID) //get data from API endpoint
        .then( (res) => {return res.json();} ) //then convert to json format
        .then( (res) => {
            setEmployeeData(res);//Update data when ready
            console.log(res);
        })
        .catch( (error) => {console.log(error.message)} );
    }, [employeeID]);

    //UI
    return(
        <>
            <div className="container">
                <h3>Employee Detail: </h3>
                {/*Use directive Condition to render data */}
                {employeeData && <div> 
                                    <p>Name: {employeeData.name} (id={employeeData.id}) </p>
                                    <p>Email: {employeeData.email} </p>
                                    <p>phone: {employeeData.phone} </p>
                                    <p>Active: {employeeData.active ? 'true' : 'false'} </p>
                                    <Link to="/employee-manager" className="btn btn-warning">
                                         BACK TO EMPLOYEE LISTING</Link>
                                 </div>    
                }                
            </div>        
        </>
    );
}
export default EmployeeDetail;