function Hero(){

function goDiscover(){
document.getElementById("discover").scrollIntoView({behavior:"smooth"})
}

return(

<section id="hero" className="hero">

<h1>
Restart Your Dreams <span>After 40</span>
</h1>

<p>
Udaan 40+ empowers women to rediscover passions,
develop new skills and start their second innings.
</p>

<button onClick={()=>{
document.getElementById("discover").scrollIntoView({behavior:"smooth"})
}}>
Explore Opportunities
</button>

</section>

)

}

export default Hero