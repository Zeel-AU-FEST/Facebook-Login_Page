import { useState } from "react";
import "./Form.css"
export default function Form()
{
    let [FormData,setFormData]=useState({
        Email:"",
        Password:"",
    })
    function changeHandler(e)
    {
        setFormData({[e.target.name]:e.target.value});
    }
    return <div className="formclass">
        <form>
            <input type="email" name="Email" id="Email" placeholder="Email address or Phone Number" onChange={(e)=>changeHandler(e)}/>
            <br />
            <input type="Password" name="Password" id="Password" placeholder="Password" onChange={(e)=>changeHandler(e)} />
            <br />
            <button className="Login">Log in</button>
            <a href="#"className="para">Forgotten PassWord?</a>
            <hr className="line"/>
            <button className="Account">Create new account</button>
        </form>
            <p className="para2"><b>Create a Page </b>for a celebrity, brand or business.</p>
    </div>
}