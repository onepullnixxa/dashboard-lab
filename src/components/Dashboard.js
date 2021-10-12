import Sidebar from "./Sidebar";
import Reviews from "./Reviews";
import AvgRating from "./AvgRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";

function Dashboard() {
    return(
        <div className='dashboard'>
            <Sidebar />
            <Reviews reviewNumber='1,281' />
            <AvgRating avgRating='4.6' />
            <SentimentAnalysis />
            <WebsiteVisitors visitorNumber='821' />
        </div>
    );
}

export default Dashboard;