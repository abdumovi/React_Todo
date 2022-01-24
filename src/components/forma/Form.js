import React, { useState } from 'react';
const Form = ({data,setData}) => {
    const [dataList,setDataList] = useState({fname:'',lname:'',releyt:'',phone:''});
    const getFormValu = (e) =>{
        e.preventDefault()
        setData([...data,dataList]);
        setDataList({fname:'',lname:'',releyt:'',phone:''})
    }
    return (
        <form className="form col-xs-6">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" onChange={(e)=> setDataList({...dataList,fname:e.target.value})} value={dataList.fname} className="form-control input" autoComplete="off" required id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">last Name</label>
                <input type="text" onChange={(e)=> setDataList({...dataList,lname:e.target.value})} value={dataList.lname} className="form-control input" autoComplete="off" required id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">RelationShip</label>
                <input type="text"  onChange={(e)=> setDataList({...dataList,releyt:e.target.value})} value={dataList.releyt} className="form-control input" autoComplete="off" list="rel-list" required id="exampleInputPassword1" />
                <datalist id="rel-list">
                    <option value="Famliy" />
                    <option value="School" />
                    <option value="Friend" />
                </datalist>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone <span className="span1"> </span></label>
                <input type="number" onChange={(e)=> setDataList({...dataList,phone:e.target.value})} value={dataList.phone} className="form-control input" autoComplete="off" required id="exampleInputPassword1" />
            </div>
            <button onClick={getFormValu} type="submit" className="btn btn2 btn-primary">Submit</button>
        </form>
    );
};

export default Form;