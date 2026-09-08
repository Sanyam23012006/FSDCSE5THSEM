const root=document.getElementById('container');
const div=document.createElement('div');
const button=document.getElementById('btn');
const h2=document.createElement('h2');
const img=document.createElement('img');
//const body=document.querySelector("body");

function showData(){
    try{
    h2.innerText="Welcome to DOM";
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    img.src='';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    
    div.appendChild(img);
    div.appendChild(h2);

    div.style.border='dotted';
    div.style.borderColor='blue';
    div.style.borderWidth='5px';
    root.appendChild(div);
    }catch(e){
        console.log(e);
    }
    finally{
        
    }
}
button.addEventListener('click',showData);