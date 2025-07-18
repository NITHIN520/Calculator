import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";

function BlogPost() {
    let { id } = useParams();
    return (
        <div style={{ fontSize: "50px" }}>
            Now viewing blog post {id}
        </div>
    );
}

function Home() {
    return (
        <h1>home page</h1>
    );
}

function Apps() {
    return (
        <Router>
            <Routes>
                <Route path="/page/:id" element={<BlogPost />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Apps;
