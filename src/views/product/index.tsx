import React from "react";
import Carousel from "../../components/Carousel";
import DropDown from "../../components/DropDown";

export interface Props {
  products: any;
  filter: any;
}

const Product: React.FC<Props> = ({ products, filter }) => {
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const dropDownSelect = ( filter : string )=>{
         const items = products.filter((item:any)=>{
               if(item.category === filter){
                 return true;
               }
               return false;
         })
         setFilteredProducts(items);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DropDown
        onSelect={dropDownSelect}
        items={[
          { id: "cloth", name: "Cloth" },
          { id: "car", name: "Car" },
        ]}
        name={"Filter"}
      />
      <div style={{height:700,width:900}}>
        <Carousel
          items={filteredProducts}
          imageHeight="600px"
          imageWidth="400px"
        />
        </div>
    </div>
  );
};

export default Product;
