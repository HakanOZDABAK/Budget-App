import axios from "axios";


export class LoginService{

   login(profileInformation:any){

    return axios.post("http://localhost:8081/api/v1/auth/authenticate",profileInformation,{
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
          }})
   }

}