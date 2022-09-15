import React from 'react'
import { Link } from 'react-router-dom';
import "./card.css"


function Card({key1, value1, key2, value2, key3, value3, key4, value4}) {
    
    return (
        <Link style={{textDecoration:"none"}} to={`/project/${value1}`}>
            <div className='card' >
                <div className='sub-card'>
                    <div className='card-content'>
                        <h2>{key1}</h2>
                        <div className='cls'>
                            <h2>: {value1}</h2>
                        </div>
                    </div>

                    <div className='card-content'>
                        <h2>{key2}</h2>
                        <div className='cls'>
                            <h2>: {value2}</h2>
                        </div>
                    </div>

                    <div className='card-content'>
                        <h2>{key3}</h2>
                        <div className='cls'>
                            <h2>: {value3}</h2>
                        </div>
                    </div>

                    <div className='card-content'>
                        <h2>{key4}</h2>
                        <div className='cls'>
                            <h2>: {value4}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card