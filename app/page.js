"use client"

import { useEffect, useState } from "react";
import Banner from "./_components/Banner";
import CategoryList from "./_components/Category";
import Footer from "./_components/Footer";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    categoryMenu();
  },[])

  const categoryMenu = () => {
    GlobalApi.GetCategories().then((resp) => {
      setList(resp.categories)
    })
  }

  return (
 <div>

    {/* Categories */}
    <CategoryList listCategory={list} />

    {/* banner */}
    <Banner />

 </div>
  );
}
