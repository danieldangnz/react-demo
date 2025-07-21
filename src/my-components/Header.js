import flowerImage from './Images/flower.jpg';

function Header() {
    //Variables
    const headerStyle = {
        minHeight: '30vh',
        //backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg")',
        backgroundImage: `url(${flowerImage})`,//Display image store in "Images" folder
        backgroundSize: '100% 100%',
        //Centralize both vertical and horizontal
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'       
    };
    //UI
    return (
        <header className="bg-danger p-3 text-center" style={headerStyle}>
            <h1 className="text-warning">THIS IS HEADER COMPONENT</h1>
        </header>
    )
}

export default Header;