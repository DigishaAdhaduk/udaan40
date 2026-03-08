import { useState } from "react"

function Login({enter}){

const [email,setEmail] = useState("")
const [pass,setPass] = useState("")

function submit(e){
e.preventDefault()

if(email && pass){
enter()
}
}

return(

<div className="login">

<form onSubmit={submit} className="login-box">

<h2>Welcome Back</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={pass}
onChange={(e)=>setPass(e.target.value)}
/>

<button className="login-btn">
Login
</button>

<div className="or">
OR
</div>

<button
type="button"
className="google-btn"
onClick={enter}
>

<img
src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
/>

Continue with Google

</button>

</form>

</div>

)

}

export default Login