
// import TodoPage from "./TodoPage"
import { Link } from "react-router-dom"
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



function WelcomePage(){

    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // <AuthContext.Provider value={return}>

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (emailOrPhone === 'qwer' && password === '1234') {
            await login();
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };
    

    

    
    
    return(
       
        
       <div className="firstpage">

            <div className="welcome">
                <h1>Welcome</h1>
            </div>
            <div className="pass" onSubmit={handleSubmitLogin}>

                
                <input  id="inner" placeholder="emailOrMobile" onChange={handleChangeEmailOrPhone}/>

                <div className="line"></div>
                
                <input id="pass" type="text" placeholder="password" onChange={handleChangePassword}/>

                <div className="line"></div>

               

            </div>

            
                
            

            <div className="travel">
                
                
                

            <Link to={'/Todo'}><button id="pick" ><h2>LOG IN</h2></button></Link>

            </div>

       </div>

       
     )



     
}





export default WelcomePage