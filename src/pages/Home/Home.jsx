import Header from "../shared/header/Header";
import LeftSide from "../shared/leftSide/LeftSide";
import NavBar from "../shared/navBar/NavBar";
import RightSide from "../shared/rightSide/RightSide";
import BreackingNews from "./BreackingNews";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreackingNews></BreackingNews>
            <NavBar></NavBar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="border md:col-span-2">
                    <h1>news coming soon ...</h1>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;