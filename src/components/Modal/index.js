import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Row, Col, Container} from 'react-bootstrap';
import fleche from '../../images/caret-right.svg';

const ModalProject = ({indexModal, removeModal}) => {


    const infosModal = [
        {
            title : 'Web3 Democratic vote',
            techno : ['Solidity', 'NextJS', 'ChakraUi', 'Wagmi' ],
            features : [
                'Deploy on Goerli & Hardhat network',
                'Authorization levels (admin, voter, visitor)',
                'Register Voter',
                'Change workflow status',
                'Send proposals',
                'Vote for a proposal',
                'Get the winning proposal'
            ],
            img : [
                'imgConnectWalletVote',
                'imgRegisterVoter'
            ]
        },
        {
            title : 'Web3 Dao charitable donation',
            techno : ['Solidity', 'NextJS', 'ChakraUi', 'Wagmi' ],
            features : [
                'Project in Development...',
            ],
            img : [

            ]
        },
        {
            title : 'Web Application - Ecommerce coffee',
            techno : ['React', 'Bootstrap', 'Axios' ],
            features : [
                'Registration / Login',
                'Authorization levels (admin, redactor, consumer)',
                'Catalog management (CRUD)',
                'Shopping cart',
                'Order tracking',
                'Comment area',
                'Newsletter'
            ],
            img : ['imgProjetReact'],
        },
        {
            title : 'Rest API',
            techno : ['Symfony', 'Sql'],
            features : [
                'Access control via JWT token',
                'Provides a complete interface to manage the catalog.'
            ],
            img : ['imgProjetApi']
        },
        {
            title : 'Mobile Application, for coffee waiters',
            techno : ['React Native', 'Bootstrap', 'Axios'],
            features : [
                'Registration / Login',
                'Order status management',
                'Order list',
                'Order details',
                'Logout'
            ],
            img : ['imgProjetReactNative']
        },
        {
            title : 'Windows desktop application, executing Sql queries at the desired interval in order to send the response to its server',
            techno : ['C#', '.Net'],
            features : [
                'DB connection',
                'FTP/SFTP connection',
                'Query creation area',
                'Job scheduling area',
                'Job delete area',
            ],
            img : ['imgProjetNextApp']
        },
        {
            title : 'Intranet Web application to manage company visitors',
            techno : ['PHP', 'Bootstrap', 'Sql'],
            features : [
                'Visitor Area',
                'Administrator Area',
                '3 levels of admin permissions',
                'User management (crud)',
                'Visit management (crud)'
            ],
            img : ['imgProjetSilac']
        }
    ]

    const [indexImage, setIndexImage] = useState(0);
    const handleClick = () => {
        if(indexImage == 0) {
            setIndexImage(1)
        } else {
            setIndexImage(0)
        }

    }

    return (

      <Modal
        size="lg"
        show={true}
        onHide={() => removeModal(false)}

      >
        <Modal.Header closeButton style={{backgroundColor:'#f8f8f8'}}>
          <Modal.Title>
                {infosModal[indexModal].title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" style={{backgroundColor:'#f8f8f8'}}>

                <div className={infosModal[indexModal].img[indexImage]} />
                <div style={{textAlign:'center', marginTop:'5px'}}>
                    { (infosModal[indexModal].img.length > 1) && (
                        <button onClick={handleClick} className="btn btn-md btn-custom"  style={{backgroundColor:'none',border:'2px solid black', fontWeight:'bold'}}>
                        Next image
                        <img src={fleche} alt="Image SVG" />
                    </button>
                    )}

                </div>

                <Container>
                <Row>
                <Col md={4}>
                    <div className='mt-4'>
                        <span style={{fontWeight:'bold'}}>Techno : </span>
                        <ul>
                        {
                            infosModal[indexModal].techno.map((tech, index) => {
                                return <li key={index}> {tech} </li>
                            })
                        }
                        </ul>
                    </div>
                </Col>
                <Col md={8}>
                    <div className='mt-4'>
                        <span style={{fontWeight:'bold'}}>Features :</span>
                        <ul>
                        {
                            infosModal[indexModal].features.map((feature, index) => {
                                return <li key={index}> {feature} </li>
                            })
                        }
                        </ul>

                    </div>
                </Col>
                </Row>

            </Container>
        </Modal.Body>
      </Modal>

  );
}

export default ModalProject;