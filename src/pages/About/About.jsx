import useDocumentTitle from "../../useDocumentTitle";

const About = () => {
    useDocumentTitle('AB Real Estate: About')

    return (
        <div>
            <div className="text-center px-20">
                <h1 className="text-4xl font-semibold mb-4">Committed to Our Clients</h1>
                <p>Without our clients we don’t have a business. Simply put. We view ourselves not as service providers, but rather, vested partners in our clients’ businesses. Both parties’ reputations and livelihoods are on the line and we take that seriously. Treating our clients with respect and acting in their best interest are among the core values to which we adhere.</p>
            </div>
        </div>
    );
};

export default About;