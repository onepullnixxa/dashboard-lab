function AvgRating(props) {
    return(
        <div className="rating">
            <h4>Average Rating</h4>
            <h3>{props.avgRating}</h3>
        </div>
    );
}

export default AvgRating;