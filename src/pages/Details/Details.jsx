import { useParams } from "react-router-dom";

const Details = () => {
const {id}=useParams();

    return (
        <div>
            <h1 className="text-4xl">Details here</h1>
            <p>{id}</p>
        </div>
    );
};

export default Details;