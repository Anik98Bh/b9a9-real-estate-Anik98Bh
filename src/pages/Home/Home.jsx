import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/services/EstateCard";
import useDocumentTitle from "../../useDocumentTitle";

const Home = () => {
    useDocumentTitle('AB Real Estate: Home')
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <div><Banner></Banner></div>
            <div className="mt-10 lg:ml-5">
                <div>
                    <h1 className="text-5xl font-bold mb-5 text-center">Our Services</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {
                        estates.map(estate => <EstateCard
                            key={estate.id}
                            estate={estate}
                        ></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;