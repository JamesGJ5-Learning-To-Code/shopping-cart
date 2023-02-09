import "../styles/Home.css";

function Home({websiteType, imageSrc}) {
    return (
        <div className="Home">
            <div>
                Welcome to my {websiteType} website!
            </div>
            <div>
                {/* TODO: replace alt with something dynamically made that is a 
                bit more accessible, e.g. a description sourced from same place 
                as image */}
                <img src={imageSrc} alt={imageSrc} />
            </div>
        </div>
    );
}

export default Home;