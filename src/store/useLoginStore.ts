import { create } from "zustand";

type ILogin ={
   
    login:boolean
    token:string
    setLogin:any,
    setToken:any

}

export const useLoginStore = create<ILogin>(set =>{

  return{

     login:false,
     setLogin:(login=true)=>set(()=>({login})),
     token:"",
     setToken: (token:string) => set(() => ({ token })),
  }

})