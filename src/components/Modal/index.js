import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Row, Col, Container} from 'react-bootstrap';


const ModalProject = ({indexModal, removeModal}) => {


    const infosModal = [
        {
            title : 'Application Web - Ecommerce de café',
            techno : ['React', 'Bootstrap', 'Axios' ],
            features : [
                'Inscription / Connexion',
                'Niveaux d\'autorisations (admin, redacteur, consommateur)',
                'Gestion du catalogue (CRUD)',
                'Panier',
                'Suivi de commande',
                'Espace Commentaire',
                'Newsletter'
            ],
            img : 'imgProjetReact',
        },
        {
            title : 'API Rest',
            techno : ['Symfony', 'Sql'],
            features : [
                'Contrôle d\'accès via le JWT token',
                'Fourni une interface complète pour gérer le catalogue'
            ],
            img : 'imgProjetApi'
        },
        {
            title : 'Application Mobile, pour des serveurs de cafés',
            techno : ['React Native', 'Bootstrap', 'Axios'],
            features : [
                'Inscription / Connexion',
                'Gestion des états des commandes',
                'Liste des commandes',
                'Détails des commandes',
                'Déconnexion'
            ],
            img : 'imgProjetReactNative'
        },
        {
            title : 'Application bureau Windows, exécutant des requêtes Sql à interval souhaité afin d\'envoyer la réponse à son serveur',
            techno : ['C#', '.Net'],
            features : [
                'Connexion à sa BDD',
                'Connexion FTP/SFTP',
                'Espace création de requête',
                'Espace planification tâche',
                'Espace suppression tâche',
            ],
            img : 'imgProjetNextApp'
        },
        {
            title : 'Application Web intranet, pour gérer les visiteurs de l\'entreprise',
            techno : ['PHP', 'Bootstrap', 'Sql'],
            features : [
                'Espace Visiteur',
                'Espace Administrateur',
                '3 Niveaux d\'autorisations admin',
                'Gestion des utilisateurs (crud)',
                'Gestion des visites (crud)'
            ],
            img : 'imgProjetSilac'
        }
    ]

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

                <div className={infosModal[indexModal].img} />
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
                        <span style={{fontWeight:'bold'}}>Fonctionnalités :</span>
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