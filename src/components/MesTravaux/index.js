import { useState } from "react";
import ModalProject from "../Modal"

const MesTravaux = () => {

    const [displayModal, setDisplayModal] = useState(false);
    const [indexModal, setIndexModal] = useState(0)

    const infoCards = [
        ['Web3 Democratic Vote', 'Solidity NextJs'],
        ['Web3 Dao Donation', 'Solidity NextJs'],
        ['Web Application - Ecommerce', 'React'],
        ['Rest API', 'Symfony'],
        ['Mobile Application', 'React Native'],
        ['Windows Desktop Application', 'C# .Net'],
        ['Intranet Web Application', 'PHP'],
    ]
    
    const showModal = (index) => {
        setIndexModal(index)
        setDisplayModal(true)
    }

    const removeModal= () => setDisplayModal(false);

    return (
        <div className='project'>
            <h2 className='projectTitle'> My works </h2>

            <div className="container">
                <div className="row">

                    {
                    infoCards.map((infoCard, index) => {
                        return (
                            <div className="col-md-4"  key={index} onClick={() => showModal(index)}>
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="iconProgramming" />
                                        </div>
                                        <div className="badge"> <span>{infoCard[1]}</span> </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading"> {infoCard[0]} </h3> 
                                    </div>
                                </div>
                      
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            { displayModal ? <ModalProject  removeModal={removeModal} indexModal={indexModal}/> : null}
            
        </div>
    )
}

export default MesTravaux;