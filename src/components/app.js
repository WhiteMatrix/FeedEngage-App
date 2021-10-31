import { useEffect, useState } from "preact/hooks";
import Post from "./post";
import Status from "./status";

function App() {

	const [lastUpdate, setLastUpdate] = useState(-1);
	const [fetchStatus, setFetchStatus] = useState(0);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (fetchStatus === 0) {
			setFetchStatus(1); // Prevent multiple requests
			fetch("/api/display/" + lastUpdate)
				.then(response => response.json())
				.then(data => {
					if (data.success) {
						setPosts(posts.concat(data.posts));
						setFetchStatus(2);
						if (data.posts.length > 0) {
							setLastUpdate(data.posts[data.posts.length-1].postId);
						}
					} else {
						console.error("API fetch failed.")
						setFetchStatus(-1);
					}
				})
				.catch(error => {
					console.error(error);
					setFetchStatus(-1);
				});
		}
	});

	// Refresh posts
	useEffect(() => {
		let timeout = undefined;
		if (fetchStatus === 2 || fetchStatus === -1) {
			timeout = setTimeout(() => {
				setFetchStatus(0);
			}, 10000);
		}
		return(() => clearTimeout(timeout));
	});

	return(
		<div id="app">
			<Status fetchStatus={fetchStatus} />
			{posts.slice().reverse().map(postObject => <Post data={postObject} />)}
		</div>
	);
}

export default App;