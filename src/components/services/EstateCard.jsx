
const EstateCard = ({ estate }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, image, facilities } = estate;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-3 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300">
            <h1 className="text-center text-3xl font-extrabold">{estate.segment_name}</h1>
            <figure className="px-4 py-2"><img src={estate.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;