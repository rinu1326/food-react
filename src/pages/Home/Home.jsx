import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

const [catogory,setCatogory]= useState("All")

  return (
    <div>

        <Header/>

        <ExploreMenu catogory={catogory} setCatogory={setCatogory}/>
        <FoodDisplay catogory={catogory}/>
        <AppDownload/>
    </div>
  )
}

export default Home