import { useState } from "react";
import ModalProject from "../Modal"
import linkSvg from '../../images/link.svg'
import { hover } from "@testing-library/user-event/dist/hover";

const MesTravaux = () => {

    const [displayModal, setDisplayModal] = useState(false);
    const [indexModal, setIndexModal] = useState(0)

    const infoCards = [
        ['Web3 Democratic Vote', 'Solidity NextJs'],
        ['Web3 Dao Donation', 'Solidity NextJs'],
        ['Afterworks app Web', 'React'],
        ['Afterworks Rest API', 'Symfony'],
        ['Afterworks app Mobile', 'React Native'],
        ['Windows Desktop Application', 'C# .Net'],
        ['Intranet Web Application', 'PHP'],
    ]

    const infoNewCards = [
        ['Social network', 'Django', 'https://github.com/sam-gvt/social_network_django'],
        ['Tracker Expense', 'Django', 'https://github.com/sam-gvt/tracker_expense_django'],
        ['Recipe API', 'DRF', 'https://github.com/sam-gvt/recipe_app_api'],
        ['Pdf Generator', 'Django', 'https://github.com/sam-gvt/pdf_generator_django'],
        ['Ecommerce app', 'Django', 'https://github.com/sam-gvt/ecommerce_django'],
        ['Copy instagram website', 'Tailwind Css', 'https://github.com/sam-gvt/instagram_tailwind'],
        ['Copy tesla website', 'Tailwind Css', 'https://github.com/sam-gvt/tesla_tailwindcss'],
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
                    infoNewCards.map((infoNewCard, index) => {
                        return (
                            <div className="col-md-4"  key={index}>
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="iconProgramming" />
                                        </div>
                                        <div className="badge"> <span>{infoNewCard[1]}</span> </div>
                                    </div>
                                    <div className="mt-5">
                                        <a href={infoNewCard[2]} style={{textDecoration:'none', color:'inherit'}}>
                                            <h3 className="heading"> {infoNewCard[0]}
                                            <img src={linkSvg} style={{width:'8%', paddingLeft:'10px'}}/>
                                            </h3>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                    }
                </div>
            </div>

            <h2 className='projectTitle'> Old works </h2>
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