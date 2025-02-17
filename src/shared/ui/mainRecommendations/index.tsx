import useProductCards from "../../hooks/useProductCards";
import UseProduct from "../../hooks/useProducts";
import ProductCart from "../productCart";
import "./index.css";

const MainRecommendations = () => {
  const {products} = UseProduct();

  return (
    <div className="mainRecommendation">
      <h1 className="title">Siz uchun</h1>
      <div className="tags">
        <button className="tag-button">
          <img
            src="https://s3-alpha-sig.figma.com/img/bd94/37b8/106335c639bcb44d8e0cdab9e6a2aeef?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QM7o6Apkd8hQGqC-4vRIbi0Ouyem6rpYNC6WfC42OQk~meb2yb0wb6NTQLkGGYE5xYNb7PL~3SO-~TQ0oXpJgjJXt85l7Ah9U9VoDPMrh2Ehr3eTW3fG5GsH2rClecx2Jj8LV~kLqbGHiS-il7ZWC9lkJJWsZk1ZjdPjwpqqPyBVvXf3CJJ8lB2t8~hsinkb5tUlq8iu3vwntcfmLkQlVAfp8YbjwI1PoCFxqkz2kne-QFbqCIYUjal0prBtNI3ikWjF-3ePyw3pP3pflfxLhCUkJQFEznibasMbLBpfg7DdUT0jJNxtnNrB4uXc9dzM4FopWWRXlAzGaA3K2I--Zw__"
            alt="Nonvoyxonalar icon"
          />
          Nonvoyxonalar
        </button>
        <button className="tag-button">
          <img
            src="https://s3-alpha-sig.figma.com/img/2446/27f7/5012f061777cfe138817759b77d52a60?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gOmlLYSIBFnP2iiMVvR7Eg4Xy7vWQPNQneHq5U4rEU1s1qpDw5sHs~pb481zQQ4NeW-HZ78m2LRT0blpqJaJnramSFzbCeUc~PYxZU7ZUnwvhfM3kblVrsJDWGzTjZVmBtFcUOzh3U3EQrS1krULPnOz5KxW2WyRf9Cgs~6RU-~m7BH3Cn0ATsOvQc9lcUYpDvAgYWAYsyIiJ-6NlGI8mV1nRXAH8MQHZyHxBf3B0Vp4NO94EWqRPozfHG5WHtZG7-qMchP18hnk5KOzY9GkgnFMylVbSU70UPwnqwlCsV0UnUW0U0BXsEgSNMVMr29TTBjqf34U8i~GV6pozbs-Jg__"
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
            {products.map((item) => (
              <ProductCart
                key={item.id}
                name={item.name}
                price={3000}
                image={item.photoUrl || ""}
                oldPrice={3400}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default MainRecommendations;
