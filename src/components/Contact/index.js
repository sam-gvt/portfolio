import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer,toast } from 'react-toastify';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';





const Contact = () => {


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser

        if (e.target.name.value !== '' && e.target.email.value !== '' && e.target.message.value !== '')
        {
            const id = toast.loading("Envoi en cours...")

            emailjs.sendForm(`service_i0z03v9`, 'template_ogjn699', e.target, 'FtKBVcmp30G62gPgX')
            .then(() => {
                toast.update(id, {
                    render: "Envoyé ! ", 
                    type: "success", 
                    isLoading: false, 
                    autoClose: 3000, 
                    hideProgressBar: false,
                    closeOnClick: true
                });
            })
            .catch(() => {
                toast.update(id, {
                    render: "Erreur", 
                    type: "error", 
                    isLoading: false,
                    autoClose: 3000, 
                    hideProgressBar: false,
                    closeOnClick: true
                });
            });
        }

    };

     
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <Link className="navbar-brand" to="/">
                    <button className="buttonHeader" style={{marginLeft:'54px'}}><span>Portfolio</span></button>
                </Link>
            </nav>

            <ToastContainer/>

            <h1 className="contactTitle">Contact</h1>

            <form className="contactForm mt-4" style={{marginBottom:'0px'}} onSubmit={handleSubmit} >
                <Container>
                    <Row>
                        <Col md={6}>
                            <div><label style={{marginBottom:'10px', color:'#727885'}}>Nom</label></div>
                            <input style={{width:'100%', padding:'10px', border: 'none'}} type='text' name="name" id="name" required/>
                        </Col>

                        <Col md={6}>
                            <div><label style={{marginBottom:'10px', color:'#727885'}}>Email</label></div>
                            <input style={{width:'100%', padding:'10px', border:'none'}} type='email' id="email" name="email" required/>
                        </Col>

                        <Col md={12} className="mt-4">
                            <div><label style={{marginBottom:'10px', color:'#727885'}}>Message</label></div>
                            <textarea style={{width:'100%', height: '200px', border:'none'}} name="message" type='text' id="mesage" required/>
                        </Col>
                        <button type="submit" className="contactBtn"  style={{width:'200px', marginTop:'50px', marginBottom:'200px'}} >Envoyer</button>
                    </Row>
                </Container>
            </form>        
        </div>
    );
}

export default Contact;