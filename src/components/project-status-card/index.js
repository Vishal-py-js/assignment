import React from 'react'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./projectcard.css"

function StatusCard({key1, key2, key3, key4, value1, handleClick}) {
    const history = useHistory()
    const clickHandler = () => {
        handleClick()

    }
  return (
    <Link style={{textDecoration:"none"}} to={`/project/${value1}`}>
    <div className='card' >
        <div className='sub-card'>
            <div className='card-content'>
                <h2>{key1}</h2>
                <div className='cls'>
                    {
                        value1==="Bhumipuja Completed"?<h2><strong>Bhumipuja completed</strong></h2>
                        :<h2>Bhumipuja completed</h2>
                    }
                    
                </div>
            </div>

            <div className='card-content'>
                <h2>{key2}</h2>
                <div className='cls'>
                    {
                        value1==="Foundation Completed"?<h2><strong>Foundation completed</strong></h2>
                        :<h2>Foundation completed</h2>
                    }
                </div>
            </div>

            <div className='card-content'>
                <h2>{key3}</h2>
                <div className='cls'>
                    {
                        value1==="Cement Ordered"?<h2><strong>Cement Ordered</strong></h2>
                        :<h2>Cement Ordered</h2>
                    }
                </div>
            </div>

            <div className='card-content'>
                <h2>{key4}</h2>
                <div className='cls'>
                    {
                        value1==="Iron Received"?<h2><strong>Iron Received</strong></h2>
                        :<h2>Iron Received</h2>
                    }
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default StatusCard