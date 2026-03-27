import React, { useState } from "react";
import "./App.css";

function App() {

const [login,setLogin] = useState(false)
const [user,setUser] = useState("")
const [search,setSearch] = useState("")
const [category,setCategory] = useState("All")
const [selected,setSelected] = useState(null)
const [cart,setCart] = useState([])
const [aiDish,setAiDish] = useState("")
const [aiRecipe,setAiRecipe] = useState(null)

const recipes = [

{
name:"Biryani",
category:"Lunch",
image:"https://images.unsplash.com/photo-1563379091339-03246963d51a",
ingredients:[
{name:"Rice",price:80},
{name:"Chicken",price:220},
{name:"Masala",price:40}
],
steps:["Cook rice","Cook chicken","Mix together"]
},

{
name:"Dosa",
category:"Breakfast",
image:"https://images.unsplash.com/photo-1630383249896-424e482df921",
ingredients:[
{name:"Batter",price:50},
{name:"Oil",price:20}
],
steps:["Prepare batter","Cook dosa"]
},

{
name:"Idli",
category:"Breakfast",
image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
ingredients:[
{name:"Rice",price:40},
{name:"Urad Dal",price:30}
],
steps:["Steam idli"]
},

{
name:"Paneer Butter Masala",
category:"Dinner",
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
ingredients:[
{name:"Paneer",price:120},
{name:"Butter",price:40}
],
steps:["Cook gravy","Add paneer"]
},

{
name:"Pav Bhaji",
category:"Snacks",
image:"https://images.unsplash.com/photo-1601050690597-df0568f70950",
ingredients:[
{name:"Vegetables",price:60}
],
steps:["Cook vegetables"]
},

{
name:"Chapati",
category:"Dinner",
image:"https://images.unsplash.com/photo-1625944525903-b46d4c27f4fb",
ingredients:[
{name:"Flour",price:40}
],
steps:["Make dough","Cook"]
},

{
name:"Poori",
category:"Breakfast",
image:"https://images.unsplash.com/photo-1626074353765-517a681e40be",
ingredients:[
{name:"Flour",price:40}
],
steps:["Deep fry"]
},

{
name:"Upma",
category:"Breakfast",
image:"https://images.unsplash.com/photo-1625943553852-781c6dd46b5c",
ingredients:[
{name:"Rava",price:40}
],
steps:["Cook"]
},

{
name:"Fried Rice",
category:"Lunch",
image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b",
ingredients:[
{name:"Rice",price:50}
],
steps:["Cook"]
},

{
name:"Noodles",
category:"Snacks",
image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
ingredients:[
{name:"Noodles",price:40}
],
steps:["Boil"]
},

{
name:"Chicken Curry",
category:"Dinner",
image:"https://images.unsplash.com/photo-1604908812779-5fcb0c8a0e7a",
ingredients:[
{name:"Chicken",price:220}
],
steps:["Cook"]
},

{
name:"Sambar",
category:"Lunch",
image:"https://images.unsplash.com/photo-1617093727343-374698b1b08d",
ingredients:[
{name:"Dal",price:50}
],
steps:["Cook"]
},

{
name:"Rasam",
category:"Lunch",
image:"https://images.unsplash.com/photo-1626776876729-bab4369a5a5c",
ingredients:[
{name:"Tomato",price:30}
],
steps:["Boil"]
},

{
name:"Vada",
category:"Snacks",
image:"https://images.unsplash.com/photo-1626776876729-bab4369a5a5c",
ingredients:[
{name:"Dal",price:40}
],
steps:["Fry"]
},

{
name:"Pulao",
category:"Lunch",
image:"https://images.unsplash.com/photo-1604908176997-4310b0a74c9d",
ingredients:[
{name:"Rice",price:60}
],
steps:["Cook"]
},

{
name:"Paratha",
category:"Breakfast",
image:"https://images.unsplash.com/photo-1601050690117-3f0f4a2c0c8c",
ingredients:[
{name:"Flour",price:40}
],
steps:["Cook"]
},

{
name:"Maggi",
category:"Snacks",
image:"https://images.unsplash.com/photo-1617196034734-26f7c15d9c9d",
ingredients:[
{name:"Maggi",price:20}
],
steps:["Cook"]
},

{
name:"Egg Curry",
category:"Dinner",
image:"https://images.unsplash.com/photo-1604909053194-7f9a1b8e7c19",
ingredients:[
{name:"Egg",price:60}
],
steps:["Cook"]
},

{
name:"Fish Curry",
category:"Dinner",
image:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
ingredients:[
{name:"Fish",price:200}
],
steps:["Cook"]
},

{
name:"Aloo Curry",
category:"Lunch",
image:"https://images.unsplash.com/photo-1604908177522-040e7b0c60e0",
ingredients:[
{name:"Potato",price:40}
],
steps:["Cook"]
}

]

const handleLogin=()=>{
if(user){
setLogin(true)
}else{
alert("Enter name")
}
}

const filtered = recipes.filter(item =>
(category==="All" || item.category===category) &&
item.name.toLowerCase().includes(search.toLowerCase())
)

const addToCart=(item)=>{
setCart([...cart,item])
}

const total = cart.reduce((sum,item)=>sum+item.price,0)

const buyItem=(name)=>{
window.open(`https://www.bigbasket.com/ps/?q=${name}`,"_blank")
}

const buyAll=()=>{
cart.forEach(item=>{
window.open(`https://www.bigbasket.com/ps/?q=${item.name}`,"_blank")
})
}

const generateAI=()=>{

const generated={
name:aiDish,
image:`https://source.unsplash.com/400x300/?${aiDish}`,
ingredients:[
{name:"Main Ingredient",price:80},
{name:"Spices",price:40}
],
steps:["Prepare","Cook","Serve"]
}

setAiRecipe(generated)

}

if(!login){

return(

<div className="login">

<h1>Indian Recipe App</h1>

<input
placeholder="Enter Name"
onChange={(e)=>setUser(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

return(

<div className="container">

<h1>Indian Recipes</h1>

<input
className="search"
placeholder="Search Dish"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="category">

<button onClick={()=>setCategory("All")}>All</button>
<button onClick={()=>setCategory("Breakfast")}>Breakfast</button>
<button onClick={()=>setCategory("Lunch")}>Lunch</button>
<button onClick={()=>setCategory("Dinner")}>Dinner</button>
<button onClick={()=>setCategory("Snacks")}>Snacks</button>

</div>

<div className="grid">

{filtered.map((item,index)=>(

<div className="card" key={index}>

<img src={item.image} alt="food"/>

<h3>{item.name}</h3>

<button onClick={()=>setSelected(item)}>
View Recipe
</button>

</div>

))}

</div>

<div className="ai">

<h2>AI Recipe Generator</h2>

<input
placeholder="Enter Dish"
onChange={(e)=>setAiDish(e.target.value)}
/>

<button onClick={generateAI}>
Generate
</button>

</div>

{selected && (

<div className="recipe">

<h2>{selected.name}</h2>

<img src={selected.image}/>

{selected.ingredients.map((i,index)=>(

<div key={index}>

<p>{i.name} ₹{i.price}</p>

<button onClick={()=>addToCart(i)}>
Add
</button>

<button onClick={()=>buyItem(i.name)}>
Buy
</button>

</div>

))}

</div>

)}

<div className="cart">

<h2>Cart</h2>

{cart.map((item,index)=>(

<p key={index}>
{item.name} ₹{item.price}
</p>

))}

<h3>Total ₹{total}</h3>

<button onClick={buyAll}>
Buy All
</button>

</div>

</div>

)

}

export default App;