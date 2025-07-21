function Footer() {
    //Variables
    const footerStyle = {
        minHeight: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'      
    };
    //Return UI
    return (
        <footer className="bg-success" style={footerStyle} >
            <h4 className="text-center">Created By Daniel. @2024</h4>
        </footer>
    )
}
export default Footer;