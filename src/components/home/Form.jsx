import React,{useEffect, useState} from 'react'
const API = 'https://randomuser.me/api/'

const Form = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setData(data.results))
        .catch(err => console.log(err))
    }, [])
    if(Data.length === 0 ){
        return <p>There was a Error</p>
    }
    const sendData = ( e ) => {
        e.preventDefault()
    }

    return (
        <section className="Form">
            <h2>Contact</h2>
            <form onSubmit={(e)=> sendData(e)}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type='text' value={Data[0].name.first}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type='email' value={Data[0].email}/>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea type='text' value={`Hi, this is my cel: ${Data[0].cell}`}></textarea>
                </div>
                <input type='submit' value='Send' className='Send'/>
            </form>
        </section>
    )
}

export default Form