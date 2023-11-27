import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';
import MesTravaux from '../MesTravaux';


toast.warn(`Welcome to my portfolio !`, {
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
            <h1 className="titrePrincipal">Web Developer, NextJS/Solidity/PHP.</h1>
            <ToastContainer />
            <h2 className="sousTitre">I build modern Applications with frameworks like NextJs. </h2>
            <div className="imgDesktop" />

            <div className="presentation">
                <h2 className="presentationTitle">Hi, I'm Sam</h2>
                <p>
                Passionate about Web2/Web3 application development, I'm constantly working to improve my skills.                </p>
            </div>
           
            <div className="skills" >
                <div className='container' style={{paddingTop : '30px', paddingBottom : '30px'}}>
                    <div className='row'>
                        <div className="iconCode col-6" />
                        <div className='labelIcon col-6'>Technical skills</div>
                    </div>
                </div>

                <div className='containerSkillsProgress'>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '95%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > React JS / NextJS </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '95%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > Solidity </div>
                    </div>
   
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '85%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > HTML / CSS </div>
                    </div>

                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '85%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > PHP </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '60%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > Symfony </div>
                    </div>
                    <div className="progress" style={{height:'30px'}}>
                        <div className="progress-bar" role="progressbar" 
                        style={{width: '60%', backgroundColor: '#39ff14', color: '#141C3A', fontWeight: 'bold'}}  > SQL </div>
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
                        <div className="col-md-6" style={{backgroundColor: '#f8f8f8', border: 'none'}}>
                            <div className="card-body cardDegree">
                                <div className='centerDivTextDegree' style={{paddingTop:'20px'}}>
                                     "BTS Services informatiques aux organisations option développement" <br/>
                                    <span style={{fontSize: '15px'}}>(Two-year post-secondary IT degree)</span>
                                   
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-6" style={{backgroundColor: '#f8f8f8', border: 'none'}}>
                            <div className="card-body cardDegree" >
                                <div className='centerDivTextDegree' style={{paddingTop:'20px'}}>"Ecole Alyra 
                                parcours développeur blockchain"</div>
                                <span style={{fontSize: '15px'}}>(Web3 specialized certification)</span>
                            </div>
                        </div>
                        
                    </div>  
                </div>

            </div>
            <MesTravaux/>
  
            <div className='discutTitle' style={{marginTop:'150px'}}>
               <span>Interested in working together ?</span>    
            </div>
            <Link to='/contact'  style={{textDecoration:'none', color:'#ffffff'}}>
                <div className='contactBtn' style={{backgroundColor:'#141C3A'}}> Let's discuss </div>
            </Link> 
            

            <Footer/>

        </div>
    );
}

export default FirstPage;