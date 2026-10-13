import { useEffect, useState } from "react";

function FetchProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (e) {
        console.error("Error fetching products:", e);
      }finally{
        console.log("");
      }
    }
    fetchData();
  }, []);

  function cartData(){

  }

  return (
     <div>
    {data.map((ele) => (
      <div key={ele.id}>
        <img src={ele.image} height="50" width="50" alt={ele.title} />
        <h2>{ele.id}</h2>
        <button onClick={cartData}>add to cart</button>
        <div>
          <h2>{ele.title}</h2>
        </div>
      </div>
    ))}
  </div>
  );
}

export default FetchProducts;
