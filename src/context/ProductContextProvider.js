import {collection, getDocs} from "firebase/firestore";
import {db} from "../util/firebaseConfig";
import {createContext, useEffect, useState} from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setProductData(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const addProduct = (newProduct) => {
    setProductData((prevProducts) => [...prevProducts, newProduct])
  }

  return <ProductContext.Provider value={{productData, addProduct}}>{children}</ProductContext.Provider>;
};
export default ProductContextProvider;
