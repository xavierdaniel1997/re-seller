import {useContext, useState} from "react";
import {FaRegFileImage, FaRegUser} from "react-icons/fa6";
import {validateAddForm} from "../util/validateFormInputs";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {addDoc, collection} from "firebase/firestore";
import {db, storage} from "../util/firebaseConfig";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {AuthContext} from "../context/AuthContextProvider";
import {useNavigate} from "react-router-dom";
import {ProductContext} from "../context/ProductContextProvider";
import { UserContext } from "../context/UserContext";

const AddItem = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    brand: "",
    year: "",
    title: "",
    state: "",
    place: "",
    zipCode: "",
    description: "",
    price: "",
    username: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const {currentUser} = useContext(AuthContext);
  const {userData} = useContext(UserContext)
  const {addProduct} = useContext(ProductContext);
  const navigate = useNavigate();
  // console.log("userData from the add page ", userData.uid)
  // show image in ui
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validateAddForm(formData);
    setErrors(validateError);
    // console.log("check from addpage ", validateAddForm)
    if (Object.keys(validateError).length === 0) {
      console.log("validatin Passed");
      if (selectedImage) {
        console.log("image selected ", selectedImage.name);
      }
      try {
        // storing image to firebase storeage
        const storageRef = ref(storage, `images/${selectedImage.name}`);
        await uploadBytes(storageRef, selectedImage);
        const imageUrl = await getDownloadURL(storageRef);
        console.log("Image uploaded successfully, URL:", imageUrl);

        // storing product details to collection
        const date = new Date()
        const docRef = await addDoc(collection(db, "products"), {
          ...formData,
          imageUrl: imageUrl,
          userId: userData.uid,
          date : date.toLocaleDateString()
        });
        console.log("Document added with ID:", docRef.id);

        //updating the product without refreshing
        addProduct({
          id: docRef.id,
          ...formData,
          imageUrl,
          userId: userData.uid,
        });

        // if success show notificatin
        toast.success("Item added successfully!");
        setFormData({
          brand: "",
          year: "",
          title: "",
          state: "",
          place: "",
          zipCode: "",
          description: "",
          price: "",
          username: "",
          phone: "",

        });
        setTimeout(() => {
          navigate("/");
        }, 1000);

        setSelectedImage(null);
        setImagePreview(null);
      } catch (error) {
        console.error("Error adding document : ", error);
        toast.error("Failed to adding document, try again..");
      }
    }
  };

  return (

        <div className="flex justify-center mb-10">
          <form
            className="flex flex-col mt-10 rounded-md w-5/12 bg-white shadow-md"
            onSubmit={handleSubmit}
          >
            <h1 className="font-semibold text-xl p-5 border-b border-gray-300">
              POST YOUR PRODUCT
            </h1>
            <h1 className="font-semibold text-xl p-5">INCLUDE SOME DETAILS</h1>
            <div className="px-5 pb-5 border-b border-gray-300">
              {/* brand */}
              <div className="mb-5">
                <label className="flex gap-2 align-middle mb-2 font-medium">
                  Brand*
                  {errors.brand && (
                    <p className="text-red-500 text-sm">{errors.brand}</p>
                  )}
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>
              {/* year */}
              <div className="mb-5">
                <label className="flex gap-3 mb-2 font-medium">
                  Year*
                  {errors.year && (
                    <p className="text-red-500 text-sm">{errors.year}</p>
                  )}
                </label>
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
              {/* add title */}
              <div className="mb-5">
                <label className="flex gap-3 mb-2 font-medium">
                  Product Name
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Product Name"
                  className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              {/* state */}
              <div className="mb-5 flex flex-row align-middle gap-4">
                <div>
                  <label className="flex gap-3 mb-2 font-medium">
                    Address*
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.state}</p>
                    )}
                  </label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="flex gap-3 mb-2 font-medium">
                    Place*
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.place}</p>
                    )}
                  </label>
                  <input
                    type="text"
                    name="place"
                    placeholder="Place"
                    className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    value={formData.place}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="flex gap-3 mb-2 font-medium">
                    zip Code*
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.zipCode}</p>
                    )}
                  </label>
                  <input
                    type="number"
                    name="zipCode"
                    placeholder="Place"
                    className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* description */}
              <div className="mb-5">
                <label className="flex gap-3 mb-2 font-medium">
                  Description*
                  {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                  )}
                </label>
                <textarea
                  placeholder="Description"
                  name="description"
                  className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* set price */}
            <h1 className="font-semibold text-xl p-5">SET A PRICE</h1>
            <div className="px-5 pb-5 border-b border-gray-300">
              <label className="flex gap-3 mb-2 font-medium">
                Price*
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            {/* image add */}
            <h1 className="font-semibold text-xl p-5">ADD IMAGES</h1>
            <div className="px-5 pb-5 border-b border-gray-300 flex align-middle gap-8">
              <div className="border-2 border-gray-300 h-32 w-32 flex justify-center items-center rounded-md">
                <label className="text-4xl text-gray-500 cursor-pointer">
                  <FaRegFileImage />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {imagePreview && (
                <div className="">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-32 w-52 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
            <h1 className="font-semibold text-xl p-5">REVIEW YOUR DETAILS</h1>
            <div className="px-5 pb-5 flex gap-8 border-b border-gray-300">
              <div className="flex justify-center items-center text-4xl text-gray-500">
                <div className="border-2 border-gray-300 p-5 rounded-full">
                  <FaRegUser />
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-medium flex gap-3">
                    Name
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    className="p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500 w-full"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-medium flex gap-3">
                    Phone
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500 w-full"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="m-6 bg-blue-500 px-5 py-3 rounded-md text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
    
  );
};
export default AddItem;
