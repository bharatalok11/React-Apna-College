import "./Product.css";
import Price from "./Price";
function Product({title,idx}) {
  let oldPrices = ["12,495","11,990","1,599","599"];
  let newPrices = ["8,999","9,199","899","278"];
  let description = [
    [ "8000 DPI","5 Programmable buttons"],
    ["intuitive surface","double-tap to zoom"],
    ["designed for iPad Pro","Great for drawing"],
    [ "wireless","oprical orientation"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  )
}
export default Product;