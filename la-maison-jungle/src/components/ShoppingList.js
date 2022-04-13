import { plantList } from "../datas/plantList";
import "../styles/ShoppingLists.css";
import CareScale from "./CareScale";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.isBestSale && <span>🔥</span>}
            {plant.name}
            {/* <p className="lmj-sales">
              {plant.isSpecialOffer ? <span>SOLDES</span> : null}
            </p> */}
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
