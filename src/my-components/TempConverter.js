import { useState, useEffect } from 'react';
function TempConverter() {
    //States: ["state", "setState"]
    const [celsius, setCelsius] = useState('0');
    const [fahrenheit, setFahrenheit] = useState('32');
    //Variables
    const scaleNames = {
        c: 'Celsius(C)',
        f: 'Fahrenheit(F)'
    };
    //Handle events
    let convertCtoF = (event) => {     
        //setCelsius(event.target.value);       
        setCelsius(Number.isNaN(event.target.value) ? '0' : event.target.value);       
        console.log('Cel State in setState: ' + celsius);
        console.log('Cel read Input: ' + event.target.value);
        //----------------------------------------------------------------------------------------------
        //HERE: Demonstrate that setState() is "ASYNCHRONOUS" method and cause ERROR to onChange() event.
        //setFahrenheit( Number.isNaN(parseFloat(celsius)) ? '0' : (parseFloat(celsius) * 9.0 / 5.0) + 32 );
        //setState() is an "asynchronous" method => Error: onChange() in React doesn't capture 
        //     the last character of input text => Solution: useEfect() - a hook in React 
        //----------------------------------------------------------------------------------------------      
    }

    //useEffect() is a React Hook that lets us "SYNCHRONIZE" a component with another component (or external system)
    //useEffect Hook syntax: useEffect(() => {}, [dependencies]);
    useEffect( () => {
        //Here is correct value of "celsius" state
        console.log('Cel State in useEffect: ' + celsius);
        setFahrenheit( Number.isNaN(parseFloat(celsius)) ? '0' : (parseFloat(celsius) * 9.0 / 5.0) + 32);
    }, [celsius]);

    //UI
    return(
        <div>
            <div className="row m-1">
                <label className="col-3 col-md-1">{scaleNames['c']}</label>
                <input type="text" className="col-6 col-md-3" value={celsius} onChange={convertCtoF} />
            </div>
            <div  className="row m-1">
                <label className="col-3 col-md-1">{scaleNames['f']}</label>
                <input type="text" className="col-6 col-md-3" value={fahrenheit} readOnly />
            </div>
        </div>
    )
}
export default TempConverter;