import {Link} from 'react-router-dom';

function Navbar() {
    //Return UI
    return (
        <div>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>HOME</Link> 
                <Link to="/employee-manager" style={linkStyle}>EMPLOYEE MANAGER</Link>  
                <Link to="/contact-us" style={linkStyle}>CONTACT US</Link>                  
            </nav>
        </div>
    )
}
//Define CSS variables
const navStyle = {
  minHeight: '5vh',
  backgroundColor: '#CCC',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const linkStyle = {
  color: 'black',
  fontWeight: 'bold',
  margin: '2px',
  padding: '1.0em',
  border: '1px black solid',
  textDecoration: 'none'  
};
export default Navbar;