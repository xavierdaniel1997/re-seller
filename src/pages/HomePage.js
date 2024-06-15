import {useContext, useEffect, useState} from "react";
import Shimmer from "../components/Shimmer";
import ProductCard from "../components/ProductCard";
import {ProductContext} from "../context/ProductContextProvider";
import {SearchContext} from "../context/SearchContext";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const {productData} = useContext(ProductContext);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const {serachQuery, setSearchQuery} = useContext(SearchContext);

  useEffect(() => {
    if (productData.length > 0) {
      setLoading(false);
      setFilteredProductData(productData);
    }
  }, [productData]);

  useEffect(() => {
    if (serachQuery) {
      const filterData = productData.filter((product) =>
        product?.title.toLowerCase().includes(serachQuery.toLowerCase())
      );
      setFilteredProductData(filterData)
    }else{
      setFilteredProductData(productData)
    }
  }, [serachQuery, productData]);


  return (
    <>
      <div className={`flex justify-center items-center min-h-screen bg-slate-50 py-16`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {loading
            ? Array(10)
                .fill(0)
                .map((_, index) => <Shimmer key={index} />)
            : filteredProductData.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
