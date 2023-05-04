import { Link } from "react-router-dom";
const ErrorPage = () => {
    
    const centerh2 = {
        textAlign : 'center',
        color : '#141c3a',
        fontSize : 'sans-serif',
        fontWeight : 'bold',
        paddingTop : '10%',
        paddingBottom : '100px'
    }

    return (

        <div className="containerError">
            <h1 style={centerh2}>
                404, page introuvable.
            </h1>
            <div className="imgError" />
            <Link to='/'  style={{textDecoration:'none', color:'#ffffff'}}>
                <div className='errorBtn' style={{backgroundColor:'#141C3A'}}> Retour au portfolio </div>
            </Link> 
        </div> 
    
    );
}


export default ErrorPage;