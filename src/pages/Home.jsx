// import { useEffect, useState } from "react";
// import Card from "../components/Card";

// function Home({ onAddToCart }) {
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     fetch("https://640e0588b07afc3b0dbcf7b0.mockapi.io/items")
//       .then((res) => {
//         return res.json();
//       })
//       .then((json) => {
//         setCardData(json);
//       });
//   }, []);

//   return (
//     <div className="content">
//       <div className="content-header">
//         <h1>Все кроссовки</h1>
//         <div className="search-block">
//           <img src="img/search.svg" alt="Search" />

//           <img src="img/btn-remove.svg" alt="Clear" />

//           <input placeholder="Поиск..." />
//         </div>
//       </div>
//       <div className="content-cards">
//         {cardData.map((card) => (
//           <Card
//             title={card.name}
//             price={card.price}
//             image={card.image}
//             onAdd={(item) => onAddToCart(item)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
