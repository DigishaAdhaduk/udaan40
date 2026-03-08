import { useState } from "react"
import { ideas } from "../data/ideas"

function Finder(){

let [q,setQ] = useState("")
let [wish,setWish] = useState([])

let res = ideas.filter(i =>
i.toLowerCase().includes(q.toLowerCase())
)

return(

<section id="discover" className="finder">

<h2>Find Opportunities</h2>

<input
placeholder="Search skills or business..."
value={q}
onChange={(e)=>setQ(e.target.value)}
/>

<div className="cards">

{res.map((i,k)=>(

<div className="card" key={k}>

<h3>{i}</h3>

<button onClick={()=>setWish([...wish,i])}>
Save
</button>

</div>

))}

</div>

<h3 className="saved">Saved Ideas</h3>

{wish.map((w,i)=>(
<p key={i}>{w}</p>
))}

</section>

)

}

export default Finder