import React from 'react'
import './SearchBtn.css';

const SearchBtn: React.FC = () => {
    return (
        <div className="search-box">
                <input className="search-txt" type="text" name=""></input>
                <label className="search-btn"><i className="fas fa-search"/></label>  
            </div>
    )
    
}

export default SearchBtn