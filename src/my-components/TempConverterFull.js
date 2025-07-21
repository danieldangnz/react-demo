import { useState, useEffect } from 'react';
function TempConverterFull() {
    //States
    const [celsius, setCelsius] = useState('');//"state" & "setState"
    const [fahrenheit, setFahrenheit] = useState('');
    //Variables
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };
    //Handle events
    let convertCtoF = (event) => {
        setCelsius( Number.isNaN(parseFloat(event.target.value)) ? '0' : event.target.value );             
        console.log('Cel State in setState: ' + celsius);
        console.log('Cel read Input: ' + event.target.value);
        //--------------
        //NOW: Demonstrate that setState() is "ASYNCHRONOUS" method and cause ERROR to onChange() event.
        //setFahrenheit((parseFloat(celsius) * 9.0 / 5.0) + 32);
        //setState() is an "asynchronous" method => Error: onChange() in React doesn't capture 
        //     the last character of input text => Solution: useEfect() - a hook in React       
    }
    //useEffect() is a React Hook that lets us "SYNCHRONIZE" a component with an external system.
    //useEffect Hook syntax: useEffect(() => {}, [state]);
    useEffect( () => {
        //Here is correct value of "celsius" state
        console.log('Cel State in useEffect: ' + celsius);
        setFahrenheit((parseFloat(celsius) * 9.0 / 5.0) + 32);
        //setFahrenheit( Math.round(((parseFloat(celsius) * 9.0 / 5.0) + 32) * 1000 / 1000).toString() );
    }, [celsius]); //callback parameter

    let convertFtoC = (event) => {     
        setFahrenheit( Number.isNaN(parseFloat(event.target.value)) ? '0' : event.target.value );               
    }
    useEffect(() => { 
        setCelsius( Math.round(((parseFloat(fahrenheit) - 32) * 5.0 / 9.0) * 1000 / 1000).toString() ); 
    }, [fahrenheit]);
    //UI
    return(
        <div>
            <div className="row m-1">
                <label className="col-2">{scaleNames['c']}: </label>
                <input type="text" className="col-4" value={celsius} onChange={convertCtoF} />
            </div>
            <div  className="row m-1">
                <label className="col-2">{scaleNames['f']}: </label>
                <input type="text" className="col-4" value={fahrenheit} onChange={convertFtoC} />
            </div>
        </div>
    )
}
export default TempConverterFull;
