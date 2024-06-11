import { FaRegFileImage, FaRegUser } from "react-icons/fa6";

const AddItem = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex flex-col mt-10 rounded-md w-5/12 bg-white shadow-md">
        <h1 className="font-semibold text-xl p-5 border-b border-gray-300">
          POST YOUR PRODUCT
        </h1>
        <h1 className="font-semibold text-xl p-5">INCLUDE SOME DETAILS</h1>
        <div className="px-5 pb-5 border-b border-gray-300">
          <div className="mb-5">
            <label className="block mb-2 font-medium">Brand*</label>
            <input
              type="text"
              placeholder="Brand"
              className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium">Year*</label>
            <input
              type="text"
              placeholder="Year"
              className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium">Add Title</label>
            <input
              type="text"
              placeholder="Add Title"
              className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium">State*</label>
            <input
              type="text"
              placeholder="State"
              className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium">Description*</label>
            <textarea
              placeholder="Description"
              className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <h1 className="font-semibold text-xl p-5">SET A PRICE</h1>
        <div className="px-5 pb-5 border-b border-gray-300">
          <label className="block mb-2 font-medium">Price*</label>
          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <h1 className="font-semibold text-xl p-5">ADD IMAGES</h1>
        <div className="px-5 pb-5 border-b border-gray-300">
          <div className="border-2 border-gray-300 h-32 w-32 flex justify-center items-center rounded-md">
            <label className="text-4xl text-gray-500 cursor-pointer">
              <FaRegFileImage />
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <h1 className="font-semibold text-xl p-5">REVIEW YOUR DETAILS</h1>
        <div className="px-5 pb-5 flex gap-8 border-b border-gray-300">
          <div className="w-32 h-24 rounded-full border-2 border-gray-300 flex justify-center items-center text-4xl text-gray-500">
            <FaRegUser />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="p-3 text-lg border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button className="m-6 bg-blue-500 px-5 py-3 rounded-md text-white font-semibold hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};
export default AddItem;
