"use client"
import LoginForm from "@/app/components/LoginForm";
import { useState} from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        setError("");
        
        try {
        const res = await fetch("fastapi url",{
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({email,password}),
            credentials: "include",

        });
        if(res.ok){
            router.push("/dashboard");
        } else{
            setError("Invalid email or password");
        }} catch(err){
            setError("An error occurred , please try again later");
        }
    };
        
    return (
        <div className="flex min-h-screen items-center justify-center">
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
      );
}
