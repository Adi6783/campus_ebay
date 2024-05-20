import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { SignupInput } from '@100xdevs/medium-common';


export const Auth = ({type}: {type: "signup" |"signin"}) => {
    const navigate = useNavigate();
    
    async function sendRequest(){

        
           
            navigate("/blogs");
    }
    
   return <div className="h-screen flex justify-center flex-col">
    
            <div className="flex justify-center">
                <div>
                  <div className="px-10">
                        <div className=" text-3xl font-extrabold  ">
                            Create an account
                        </div>
                        <div className="text-slate-500">
                          {type==="signin"? "Don't have an account":" Already have an account?" }
                            <Link className="pl-2 underline" to={type==="signin"?"/":"/signin"}>
                                {type==="signin"?"Sign Up":"Sign in"}</Link>
                        </div>
                </div>
            <div className="pt-8">
                {type=== "signup"?<LabelledInput label="Name" placeholder="Aditya Mane" onChange={(e)=>{
                  
                }} /> : null}

                <LabelledInput label="Username" placeholder="Aditya@gmail.com" onChange={(e)=>{
                  
                   }} />

                <LabelledInput label="password" type={"password"} placeholder="123456" onChange={(e)=>{
                 
                   }} />
                   <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                   focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                    dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up":"Sign in"}</button>
                </div>
             </div>
        </div>
   </div> 
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    type?: string;//ensures stars when password is filled
}
function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return <div>
        <div>
            <label className="block mb-2 text-sm  text-black font-semibold pt-4">{label}</label>
            <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}