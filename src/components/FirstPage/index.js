import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';
import MesTravaux from '../MesTravaux';
import djangoImage from '../../images/django.png'
import reactImage from '../../images/react.png'
import trophySvg from '../../images/trophy.svg'


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
            <div className='divHome'>
                <Header />

                <h1 className="titrePrincipal">Web Developer</h1>
                <ToastContainer />


                <h2 className="sousTitre">
                    <img className='imgDjango' src={djangoImage}  />
                    <span style={{margin: '50px'}}> Django/ React JS</span>
                    <img className='imgReact' src={reactImage}  />
                </h2>


                <div className="imgDesktop" />
            </div>

            <div className="presentation">
                <h2 className="presentationTitle">Hi, I'm Sam</h2>
                <p>

After studying IT and working on several personal projects,
I ultimately chose to specialize in web development using the Django web framework,
which I find incredibly powerful. I have a strong foundation in web development and
thoroughly enjoy expanding my knowledge through courses, books, and personal projects.
                </p>
            </div>

            <div className="skills" >
                <div className='container' style={{paddingTop : '30px', paddingBottom : '30px'}}>
                    <div className='row'>
                        <div className="iconCode col-6" />
                        <div className='labelIcon col-6'>Technical skills</div>
                    </div>
                </div>

                <div class="containerSkills">
                    <div className="row">
                        <div class="columnSkills col-md-4">
                            <h2>Frontend</h2>
                            <p><img src={trophySvg} style={{width:'15%', paddingRight:'10px'}}/>
                                React JS
                            </p>
                            <p><img src={trophySvg} style={{width:'15%', paddingRight:'10px'}}/>
                                Tailwind Css
                            </p>
                            <p>HTML / CSS / JS</p>
                            <p>Bootstrap</p>
                        </div>
                        <div class="columnSkills col-md-4">
                            <h2>Backend</h2>
                            <p><img src={trophySvg} style={{width:'15%', paddingRight:'10px'}}/>
                                Python / Django
                            </p>
                            <p>DRF (Django Rest Framework)</p>
                            <p>PHP / Symfony (+twig/doctrine)</p>
                        </div>
                        <div class="columnSkills col-md-4">
                            <h2>Others</h2>
                            <p>PostgreSQL</p>
                            <p>Merise Database Modeling Methodology</p>
                            <p> Design Patterns </p>
                            <p>Git / Git Actions / Docker</p>
                            <p>OS preference : Linux / MacOs </p>
                            <p>Web 3 (Hardhat, Solidity)</p>

                        </div>
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
                                Advanced Diploma IT degree <br/>
                                    <span style={{fontSize: '15px'}}>(Louis Pergaud, Besancon, France)</span>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-6" style={{backgroundColor: '#f8f8f8', border: 'none'}}>
                            <div className="card-body cardDegree" >
                                <div className='centerDivTextDegree' style={{paddingTop:'20px'}}>Blockchain developer certification</div>
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