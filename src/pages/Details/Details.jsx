import { useLoaderData, useParams } from "react-router-dom";
import { TbBuildingEstate } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import 'animate.css';

const Details = () => {

    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate)

    return (
        <div className="animate__animated animate__zoomIn">
            <div className=" text-center mb-5">
                <h1 className="text-4xl font-bold">{estate.segment_name}</h1>
            </div>
            <div className="flex gap-5">
                <div>
                    <figure><img className="h-[500px] rounded-xl" src={estate.image} alt="" /></figure>
                </div>

                <div className="w-1/2 bg-emerald-100 rounded-xl p-5">
                    <h2 className="text-3xl font-semibold mb-3 text-center">{estate.estate_title}</h2>
                    <p className="px-5">{estate.description}</p>
                    <hr className="border-2 border-dashed my-3" />
                    <p className="mt-5"><span className="font-semibold text-xl">Our Facilities</span>:
                        <ul className="ml-16">
                            <li>* {estate.facilities[0]}</li>
                            <li>* {estate.facilities[1]}</li>
                            <li>* {estate.facilities[2]}</li>
                        </ul>
                    </p>
                    <div className="flex gap-40 mt-6">
                        <p><span className="font-semibold mr-2 text-xl">Price:</span> {estate.price}</p>
                        <p><span className="font-semibold mr-2 text-xl">Status:</span> {estate.status}</p>
                    </div>
                    <div className="flex gap-40 mt-6">
                        <p className="flex items-center">
                            <TbBuildingEstate className="text-2xl mr-1"></TbBuildingEstate>
                            <span className="font-semibold mr-2 text-xl">Area: </span> {estate.area}
                        </p>
                        <p className="flex items-center">
                            <FaLocationDot className="text-2xl mr-1"></FaLocationDot> <span className="font-semibold mr-2 text-xl">Location: </span> {estate.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;