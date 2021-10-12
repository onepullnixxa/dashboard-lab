function WebsiteVisitors(props) {
    return(
        <div className='visitors'>
            <h4>Website Visitors</h4>
            <h3>{props.visitorNumber}</h3>
        </div>
    );
}

export default WebsiteVisitors;