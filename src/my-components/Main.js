import Person from './Person';
import AllStaff from './staff.json';
import Counter from './Counter';
import TempConverter from './TempConverter';
import Timer from './Timer';
import AutoSlideshow from './AutoSlideshow';
import ManualSlideshow from './ManualSlideshow';

import PostSearch from './search/PostSearch';

function Main() {
    //Variables
    const mainStyle = {
        minHeight: '50vh'
    };
    let staff = [
        {name:'Daniel Dang', email: 'ddang@eit.ac.nz', campus: 'Taradale'},
        {name:'Ian Allan', email: 'iallan@eit.ac.nz', campus: 'Tairawhiti'},
        {name:'Geffery Adams', email: 'gadams@eit.ac.nz', campus: 'Auckland'},
        {name:'Ian Purdon', email: 'ipurdon@eit.ac.nz', campus: 'Taradale'},
        {name:'Ken York', email: 'KYork@eit.ac.nz', campus: 'Tairawhiti'},
        {name:'Shafiq Alam', email: 'SAlam@eit.ac.nz', campus: 'Auckland'},
        {name:'Noor Alani', email: 'nanali@eit.ac.nz', campus: 'Taradale'},
        {name:'Tina Blumenthal', email: 'TBlumenthal@eit.ac.nz', campus: 'Tairawhiti'},
        {name:'John Jamieson', email: 'JJamieson@eit.ac.nz', campus: 'Taradale'},
        {name:'Graham Ward', email: 'GWard@eit.ac.nz', campus: 'Taradale'},
        {name:'Emre Erturk', email: 'EErturk@eit.ac.nz', campus: 'Taradale'},
        {name:'Istvan Lengyel', email: 'ILengyel@eit.ac.nz', campus: 'Taradale'}
    ];
    //Return UI
    return (
        <main style={mainStyle} >
            <h3>List of People: </h3>
            {/*Pass component props to the "child" component */}
            <div className="container">
                <div className="row">
                    <Person name="Daniel Dang" email="ddang@eit.ac.nz" campus="Taradale"/>
                    <Person name="Ian Allan" email="iallan@eit.ac.nz" campus="Tairawhiti"/>
                    <Person name="Ian Purdon" email="ipurdon@eit.ac.nz" campus="Taradale" />
                    <Person name="Geffery Adams" email="gadams@eit.ac.nz" campus="Auckland" />               
                </div>           
            </div>

            {/*Loop through all items in an array*/}
            <h3>List of People Loaded from an array: </h3>
            <div className="container">
                <div className="row">
                    {staff.map((staff,i) => (
                        <Person name={staff.name} email={staff.email} campus={staff.campus} key={i} />
                    ))}
                </div>
            </div>

            {/*Load all staff from staff.json file*/}
            <h3>List of People Loaded from a JSON File: </h3>
            <div className="container">
            <div className="row">
                {AllStaff.map((staff, i) => (
                    <Person name={staff.name} email={staff.email} campus={staff.campus} key={i}/>
                ))}
            </div>
            </div>

            <h3>Counter: </h3>
            <Counter />

            <h3>Temperature Converter: </h3>
            <TempConverter />

            <h3>Timer: </h3>
            <Timer />

            <h3>Auto slideshow: </h3>
            <AutoSlideshow />
            <ManualSlideshow />

            <h3>Post Search: </h3>
            <PostSearch />

        </main>
    )
}
export default Main;