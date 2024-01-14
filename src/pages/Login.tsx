import React, { useState } from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useLoginStore } from '../store/useLoginStore';
import { LoginService } from '../service/LoginService';
import { useNavigate } from 'react-router';

export default function Login() {
    const { login,setLogin,setToken } = useLoginStore();
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const navigate = useNavigate();
    const Login =(email:string,password:string)=>{
        const profileInformation ={email,password}
        let loginService = new LoginService()

        return (loginService.login(profileInformation).then((result) => {
            setToken(result.data.accessToken);
            setLogin(true);
            navigate('/home'); // login başarılı olduktan sonra /home sayfasına yönlendir
          })

        )

        

    }


    return (
        <div className="card">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Email</label>
                        <InputText id="username" type="text" className="w-12rem" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText id="password" type="password" className="w-12rem" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <Button onClick={()=>{Login(email,password)}} label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">

                    </Divider>
                </div>
                </div>
                </div>
            )}