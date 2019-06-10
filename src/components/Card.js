import React from 'react'
import './card.css'

const Card = ({ name, username }) => {
    return (
            <div className='col-lg-3 col-md-6'>
                <div className="card mb-3 mx-auto">
                    <div className="card-header">
                        Username: {username}
                    </div>
                    <img src={`https://robohash.org/${name}?set=set2`} className="card-img-top rounded-circle p-2" alt="ifmage" />
                    <div className="card-body text-center bg-secondary text-dark">
                        <h5 className="card-text">{name}</h5>
                        <p className='text-primary'>{name}@test.com</p>
                    </div>
                </div>
            </div> 
        )
    }

export default Card
