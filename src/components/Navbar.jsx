import { useState } from "react"

function Navbar(){

const [lang,setLang] = useState("EN")

return(

<nav className="nav">

<h2>🌸 Udaan 40+</h2>

<ul>
<li>Home</li>
<li>Discover</li>
<li>Business</li>
<li>Skills</li>
<li>Events</li>
<li>Community</li>
</ul>

<div className="nav-right">

<select
value={lang}
onChange={(e)=>setLang(e.target.value)}
className="lang"
>

<option value="EN">English</option>
<option value="HI">Hindi</option>
<option value="GU">Gujarati</option>

</select>

<button>Start Journey</button>

</div>

</nav>

)

}

export default Navbar