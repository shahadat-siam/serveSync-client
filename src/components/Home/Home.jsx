import Carosoul from "../pages/Carosoul";
import VolunteerNeed from "../pages/VolunteerNeed";
import AnotherSection from "./ExtraRoutes/AnotherSection";
import JoinUs from "./ExtraRoutes/JoinUs"; 

 
const Home = () => {
    return (
        <div>
            <Carosoul/> 
            <AnotherSection/>
            <VolunteerNeed/>
            <JoinUs/>
        </div>
    );
};

export default Home;