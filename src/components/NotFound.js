import React from "react"
import { Link } from "react-router-dom"

const NotFound = props => (
    <article className = "not-found-container">
    <h1>
        Error 404
    </h1>
    <p>
    Content not found.
    <Link to="/personal_site/">Return to home</Link>
    </p>
    </article>
);

export default NotFound