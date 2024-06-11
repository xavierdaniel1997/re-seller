

const ProductCard = () => {
    return(
        <div className="w-64 p-2 rounded-md" style={{border: "1px solid gray"}}>
            <div className="w-full">
                <img src="https://apollo.olx.in/v1/files/9eluw99gpfsz1-IN/image;s=780x0;q=60" alt="" className="w-full h-52 object-cover"/>
                <p className="text-xl font-bold">₹ 12,0000</p>
                <p className="text-sm">title of the product</p>
                <div className="flex justify-between">
                    <p>description...</p>
                    <p>Today</p>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;