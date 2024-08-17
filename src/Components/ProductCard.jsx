
const ProductCard = ({product}) => {
    const {productImage,productName,createdAt,category,price,brandName,description,_id}=product;
    return (
        <div className="">
           <article className="flex flex-col rounded-lg border  shadow-xl h-[550px] dark:bg-gray-50 group">
      <a
        
       className="px-2 py-4">
        <img
          alt=""
          className="object-cover  w-full rounded-lg h-48 dark:bg-gray-500 transition group-hover:scale-105 "
          src={productImage}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase underline dark:text-[#2D3663]"
        >
          {category}
        </a>
        <h3 className="py-2 text-lg font-semibold leading-snug">
         {productName}
        </h3>
        <p className="text-center">by</p>
        <h4 className="font-semibold text-center text-[#7c8fda]">{brandName}</h4>
        <div className="flex-1 mt-3">
        <p >{description}</p>
        </div>
        <div className="flex-1 mt-3">
            <p className="text-xl font-semibold font-serif">Price:$ {price}</p>
            
            {/* <p>Slots: {slots} left</p> */}
        </div>
        <p className="text-xs  ">Created At: {new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
            </p>
        {/* <Link to={`/testDetails/${_id}`}><button className="btn mt-3 rounded-full px-6 border-none dark:bg-[#2d3663] dark:text-gray-50
            hover:text-[#2d3663] hover:bg-gray-300 transition hover:scale-x-110">Details <FaArrowRight></FaArrowRight></button></Link> */}
      </div>
    </article>
        </div>
    );
};

export default ProductCard;