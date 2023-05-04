import { useState } from "react";
import ModalProject from "../Modal"

const MesTravaux = () => {

    const [displayModal, setDisplayModal] = useState(false);
    const [indexModal, setIndexModal] = useState(0)

    const infoCards = [
        ['Application Web - Ecommerce', 'React'],
        ['API Rest', 'Symfony'],
        ['Application Mobile', 'React Native'],
        ['Application Bureau Windows', 'C# .Net'],
        ['Application Web intranet', 'PHP']

    ]
    
    const showModal = (index) => {
        setIndexModal(index)
        setDisplayModal(true)
    }

    const removeModal= () => setDisplayModal(false);

    return (
        <div className='project'>
            <h2 className='projectTitle'> Mes travaux</h2>

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