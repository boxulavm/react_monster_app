import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => {
    return(
        <div className='container'>
            <div className='row'>
                {
                    monsters.map((user, i) => {
                        return(
                            <Card
                                key={i}
                                name={monsters[i].name}
                                username={monsters[i].username}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CardList;