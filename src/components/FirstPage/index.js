import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';
import MesTravaux from '../MesTravaux';


toast.warn(`Bienvenue sur mon portfolio !`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
});

const FirstPage = () => {


    return (
        <div>
            <Header />
            <h1 className="titrePrincipal">Blockchain Developer, ReactJS/Solidity.</h1>
            <ToastContainer />
            <h2 className="sousTitre">Développeur passionné par l'univers Web 3</h2>
            <div className="imgDesktop" />

            <div className="presentation">
                <h2 className="presentationTitle">Bonjour, je m'appelle Sam</h2>
                <p>
                    Passionné par l'informatique en général et plus spécifiquement par le développement d'application Web2/Web3, je travaille continuellement pour améliorer mes compétences. 
                </p>
            </div>
           
            <div className="skills" >
                <div className='container' style={{paddingTop : '30px', paddingBottom : '30px'}}>
                    <div className='row'>
                        <div className="iconCode col-6" />
                        <div className='labelIcon col-6'>Compétences techniques</div>
                    </div>
                </div>

                <div className='containerSkillsProgress'>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '85%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > React JS </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '80%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > PHP </div>
                    </div>
   
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '85%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > HTML </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '75%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > CSS </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '60%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > SQL </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '60%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > Symfony </div>
                    </div>

                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '40%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > React Native </div>
                    </div>

                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '30%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > C# .Net </div>
                    </div>  
                </div>
            </div>


            <div className='degree'>
                <h2 className='degreeTitle'> Certifications </h2>
                <div className='container' style={{marginTop : '45px'}}>
                    <div className='row'>
                        <div className="col-md-4" style={{backgroundColor: '#f8f8f8', border: 'none'}}>
                            <div className="card-body cardDegree">
                                <div className='centerDivTextDegree'>
                                    BTS Services informatiques aux organisations option développement
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-4" style={{backgroundColor: '#f8f8f8', border: 'none'}}>
                            <div className="card-body cardDegree">
                                <div className='centerDivTextDegree'>Ecole Alyra 
                                parcours développeur blockchain</div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{backgroundColor: '#f8f8f8', border: 'none'}}>
                            <div className="card-body cardDegree">
                                <div className='centerDivTextDegree'>
                                    Udemy <br/>  Formation complète React
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>

            </div>
            <MesTravaux/>
  
            <div className='discutTitle' style={{marginTop:'150px'}}>
               <span>Intéréssé pour travailler ensemble ?</span>    
            </div>
            <Link to='/contact'  style={{textDecoration:'none', color:'#ffffff'}}>
                <div className='contactBtn' style={{backgroundColor:'#141C3A'}}> Discutons-en </div>
            </Link> 
            

            <Footer/>

        </div>
    );
}

export default FirstPage;