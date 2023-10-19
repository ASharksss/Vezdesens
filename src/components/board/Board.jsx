import React from 'react';
import './board.css'
import Card from "../cards/Card";
import SmallBlocks from "./BoardBlocks/SmallBlocks";
import CommercialBlocksLss from "./BoardBlocks/CommercialBlocksLSS";
import Ad from "../cards/Ad";
import CommercialBlocksXl from "./BoardBlocks/CommercialBlocksXL";
import ad_image_xxl from '../../asserts/ad_image_xxl.png'

const Board = () => {
  return (
    <>
      <div>

        <Card classname={'xxl'} ad_image={ad_image_xxl}/>
        <Ad/>
        <Card classname={'xxl'} ad_image={ad_image_xxl}/>
        <Ad/>

        {/*вывести в отдельную компоненту*/}
        <SmallBlocks/>
        <SmallBlocks/>
        <SmallBlocks/>

        <CommercialBlocksLss/>

        <SmallBlocks/>
        <SmallBlocks/>
        <SmallBlocks/>
      </div>
    </>
  );
};

export default Board;