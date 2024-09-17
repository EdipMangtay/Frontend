import { Link } from "react-router-dom";

export default function PageNotFound() {
    return(
        <>
            <h1>Page Not Found</h1>
            <Link className="btn btn-info" to="/">Go to Home</Link>
        </>
    )
}
