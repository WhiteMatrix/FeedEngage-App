export default function Status(props) {
    return(
        <div id="fetchStatusIndicator">
            {props.fetchStatus === 0 || props.fetchStatus === 1 ? "Loading..." : null}
            {props.fetchStatus === 2 ? "Loaded. Autoupdating." : null}
            {props.fetchStatus === -1 ? "Something went wrong. Retrying..." : null}
        </div>
    );
}