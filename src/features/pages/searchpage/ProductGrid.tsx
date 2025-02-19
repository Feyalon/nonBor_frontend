import React from "react";
import { IProductItem } from "../../../shared/types/productItem";

interface ProductGridProps {
  products: IProductItem[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image" style={{ backgroundImage: `url(${product.photoUrl})` }}>

          </div>

          <div className="product-price">
            <div className="product-price-title">
              <h3>{product.name}</h3>
            </div>
            <div className="product-price-content">
              {product.oldPrice <= product.price ? (
                <span className="product_price">{product.price}</span>
              ) : (
                <div>
                  <span className="product_old_price">{product.oldPrice}</span>
                  <span className="product_price blue">{product.price}</span>
                </div>
              )}
              
              <button className="add-to-cart">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d791/8e4c/2111724f33e97a2d2e1764de79b21887?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VOw4qVTL~jBn7JeVq-JQLcI~ljsc8UTk24F6KCCqFcXflVxRcI52E~p5ATvUPkz4IB6yk0NXra6OqgfWhAiqXbrBe1Y0WsmMweDtbxhB~4G541Y0knSOvdWJpcWoGJJEymHMkPcR5AtZg-iemyQlhaJD0tbmoFpwUF5tMBf3MbksI3S4oMsPzCwKXxAFeT-Sxj2HDkIaf-vuEU0-G87BWJ0GStfz6R9SzQZ4HRxun8XDrX7V0UeLczXQkG-KhIPiy0POBvdRpt-XEwl5Fj3wf3wHym1s3Vks3N6nVU1FAveLFi58~yBjJe2lWctFNCISwDsoERYKLQtnfvXM3QiM1w__"
                  alt="Add to cart"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
