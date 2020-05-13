import React from "react";
import { PageHeader } from "antd";
import Main from "./Component/Main/Main";
import "./App.css";

function App() {
    return (
        <div className="App">
            <PageHeader
                className="site-page-header"
                title="Dog Breed"
                // subTitle="This is a subtitle"
            />
            {/* Add main component */}
            <Main />
        </div>
    );
}

export default App;
