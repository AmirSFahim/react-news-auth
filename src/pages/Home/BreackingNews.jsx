import Marquee from "react-fast-marquee";

const BreackingNews = () => {
    return (
        <div className="flex">
            <button className="btn-secondary text-sm px-2 ">latest</button>
            <Marquee className="mr-12" pauseOnClick={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee className="mr-12" pauseOnClick={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee pauseOnClick={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            

        </div>
    );
};

export default BreackingNews;