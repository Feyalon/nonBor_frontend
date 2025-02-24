import { Link } from "react-router";
import ProductCart from "../productCart";
import "./index.css";
import useProductCards from "../../hooks/useProductCards";
import IProductItem from "../../types/productItem"
const MainRecommendations = () => {
  const {
    productCards
  } = useProductCards()

  return (
    <div className="mainRecommendation">
      <h1 className="title">Siz uchun</h1>
      <div className="tags">
        <button className="tag-button">
          <img
            src="/home.png"
            alt="Nonvoyxonalar icon"
          />
          Nonvoyxonalar
        </button>
        <button className="tag-button">
          <img
            src="/filter.png"
            alt="Saralash icon"
          />
          Saralash
        </button>
      </div>

        <div className="main_content-wrapper">
          <div className="category">
            <img
              src="https://s3-alpha-sig.figma.com/img/f076/c848/a2b647bee9cb00640b95080a38402b8f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FqlS~8WGWf8472s4KaqjTA0r70IIxJEX2ajNiu5Z8vQQXLoELlEB4PGTgdyqj87DhJ9310WGRKdyDpGpYafHObx6W9bI3CgNqs5N5-kjkGUIWV8HYUIyQhmJ5dpp4B9gS9Dx19lQt~gMHwJ8J8Net5FM1tWhi5esEVPMPNhAf2Y3UQbuKB7B0ybx8r6zDa1A3Mr7UNx08-4RibnLCr2T0BiYpLB9K2f5z7qMhirAzpnvIgethiS5qDIGPzPKHqDdIRUawHOWgxtDFKPmIrnnLP-pCXdvXtzCL-TAj2ySVtGDFAe6KiIWPdc~1d7uvH26bpkuc0wS-Aan00uA7zlz6A__"
              alt="Samarqand nonlari icon"
            />
            <h2>Samarqand nonlari</h2>
          </div>
          <div className="main_content_productCards">
            {productCards.map((item: IProductItem, index) => (
              <Link to={`/${item.productId}`} key={`${item.name}-${index}`}>
                <ProductCart
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  image={item.photoUrl}
                />
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default MainRecommendations;
