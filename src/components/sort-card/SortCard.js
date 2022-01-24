import React from 'react';
import { useState } from 'react/cjs/react.development';
import Card from '../card/Card';
const SortCard = ({data}) => {
    const [filterList,setFilterList] = useState('');
    console.log(filterList);
    return (
        <div className="col-xs-6 mt-4">
            <select onChange={(e)=>setFilterList(e.target.value)} className="form-select mb-3" aria-label="Default select example">
                <option value="">All</option>
                <option value="Famliy">Famliy</option>
                <option value="School">School</option>
                <option value="Friend">Friend</option>
            </select>
            <div className="in__list">
                {filterList !== "" ? data
                    .filter((item)=>(item.releyt === filterList))
                    .map((i)=>(
                    <Card 
                    key={i.fname}
                    fname={i.fname} 
                    lname={i.lname}
                    phone={i.phone}
                    releyt={i.releyt}
                    />
                ))
                :
                data.map((i)=>(
                    <Card 
                    key={i.fname}
                    fname={i.fname} 
                    lname={i.lname}
                    phone={i.phone}
                    releyt={i.releyt}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default SortCard;