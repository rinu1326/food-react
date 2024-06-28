// import React from 'react'
// import './ExploreMenu.css'
// import {menu_list} from '../../assets/assets'

// const ExploreMenu = ({catogory,setCatogory}) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore Our Menu</h1>
//         <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos iure inventore iste quod corporis fuga quas enim aliquid magnam totam quae sint aut atque placeat, culpa repellat velit quo.</p>
//         <div className="explore-menu-list">
//             {menu_list.map((item,index)=>{
//                 return (
//                     <div onClick={()=> setCatogory(pre=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
//                         <img className={catogory===item.menu_name?"active":""} src={item.menu_image} alt="" />
//                         <p>{item.menu_name}</p>

//                     </div>
//                 )
//             })}
//         </div>
//         <hr />

//     </div>
//   )
// }

// export default ExploreMenu


import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos iure inventore iste quod corporis fuga quas enim aliquid magnam totam quae sint aut atque placeat, culpa repellat velit quo.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
              key={index}
              className='explore-menu-list-item'
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
