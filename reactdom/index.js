const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor: 'cyan'}},"Welcome to React App Development");
const h1=React.createElement('h1',{style:{color:'brown'}},"ABES Engineering College");

const img=React.createElement('img',{src:'',style:{height: '200px',width: '200px'}});
const div=React.createElement('div',{style:{border: '2px solid red'}},img,h1,h2);

const h21 = <h2> HELLO </h2>; //JSX
root.render(h21);