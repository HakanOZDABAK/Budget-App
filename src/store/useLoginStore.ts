import { create } from "zustand";

type ILogin ={
   
    login:boolean
    token:any
    setLogin:any,
    setToken:any

}

export const useLoginStore = create<ILogin>(set =>{

  return{

     login:false,
     setLogin:(login=true)=>set(()=>({login})),
     token:null,
     setToken: (token:string) => set(() => ({ token })),
  }

})