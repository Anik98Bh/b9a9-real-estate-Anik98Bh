import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, image, facilities } = estate;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-3 hover:bg-violet-100 active:bg-violet-100 focus:outline-none focus:ring focus:ring-violet-300">
            <h1 className="text-center text-3xl font-extrabold py-5">{estate.segment_name}</h1>
            <figure className="px-4 py-2"><img className="rounded-xl" src={estate.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate.estate_title}</h2>
                <div className="flex justify-between font-semibold mb-14">
                    <p>Price: {estate.price}</p>
                    <p>Status: {estate.status}</p>
                </div>
                <div className="absolute bottom-0 left-0 ml-6 pb-3">
                    <Link to={`/estates/${id}`}>
                        <button className="btn bg-[#28B463] text-white font-bold">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;