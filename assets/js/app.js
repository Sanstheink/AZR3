const user=JSON.parse(localStorage.getItem("user"));
if(!user) location.href="auth.html";

document.getElementById("rank")?.innerText=user.rank;

const crew=document.getElementById("crew");
if(crew){
 crew.innerHTML=`
 <p>Name: ${user.name}</p>
 <p>ID: ${user.id}</p>
 <p>Rank: ${user.rank}</p>
 <p>Position: ${user.position}</p>
 <p>Ship: ${user.ship}</p>
 <p>Agency: ${user.agency}</p>
 `;
}

function setAlert(type){
 document.body.className=type;
}
