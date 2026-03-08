import { useState } from "react"

import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Finder from "./components/Finder"
import Ideas from "./components/Ideas"
import Skills from "./components/Skills"
import Events from "./components/Events"
import Community from "./components/Community"
import NGOs from "./components/NGOs"
import Footer from "./components/Footer"

function App(){

const [enter,setEnter] = useState(false)

function go(){
setEnter(true)
}

if(!enter){
return <Intro go={go}/>
}

return(

<div>

<Navbar/>

<Hero/>

<Finder/>

<Ideas/>

<Skills/>

<Events/>

<Community/>

<NGOs/>

<Footer/>

</div>

)

}

export default App