import React from "react";
import styles from "styled-components";

const Select = styles.select`
height:40px; 
width:90px; 
margin-top:100px;
`;

export interface Items {
  id: string;
  name: string;
}

export interface Props {
  items: Array<Items>;
  name: string;
  onSelect: Function;
}

const DropDown: React.FC<Props> = ({ items, name , onSelect}) => {
  return (
    <Select
      name={name}
      onChange={(event)=>{
         console.log(event.target.value);
         onSelect(event.target.value);
      }}
    >
      {items.map((item: Items) => {
        return (
          <option key={item.id} value={item.id} onClick={()=>{
            onSelect(item.id)
            console.log(item);
            }}>
            {item.name}
          </option>
        );
      })}
    </Select>
  );
};

export default DropDown;
