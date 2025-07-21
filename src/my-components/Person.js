function Person(props) {
    //Variables
    let bgColor = {};
    let campus = props.campus;
    //Logic
    switch(campus.toLowerCase()) {
        case "taradale": bgColor = {backgroundColor: 'gray'}; break;
        case "tairawhiti": bgColor = {backgroundColor: 'pink'}; break;
        case "auckland": bgColor = {backgroundColor: 'cyan'}; break;
        default: bgColor = {backgroundColor: 'red'};
      }
    //UI  
    return (
        <div className ="col-12 col-md-6 col-lg-4 p-1">
            <div style={bgColor} >
                <h4>Name: {props.name}</h4>
                <p>Email: {props.email}</p>
                <p>Campus: {props.campus}</p>
            </div>
        </div>
    )
}
export default Person;

