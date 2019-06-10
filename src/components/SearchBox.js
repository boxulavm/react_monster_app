import React from 'react';

const SearchBox = ({ searchChange }) => {
        return (
            <div className='col-lg-3 col-md-6 col-sm-6 mx-auto mb-4'>
                <input 
                    className="form-control" 
                    type='search' 
                    placeholder='search monsters name'
                    onChange={ searchChange } 
                    />
            </div>
        )
    }

export default SearchBox;