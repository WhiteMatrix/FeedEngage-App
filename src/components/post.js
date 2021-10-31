export default function Post(props) {
    return(
        <div className="postContainer" aria-label="Post">
            <div className="postImageContainer"><img className="postImage" src={props.data.postImage} alt={props.data.postImageAltText} /></div>
            <div className="postTextContainer">
                <div className="postTitle">{props.data.postTitle}</div>
                <article className="postContent">{props.data.postContent}</article>
                <div className="postDate">{new Date(props.data.postTimestamp).toLocaleString()}</div>
            </div>
        </div>
    );
}