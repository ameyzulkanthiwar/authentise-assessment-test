import React from "react";
import { Input } from "antd";
import "./Search.css";
export default class Search extends React.Component {
    render() {
        const { Search } = Input;
        const { handleSearch } = this.props;
        return (
            <Search
                placeholder="Search you favorite dog breed"
                onSearch={(value) => handleSearch(value)}
                enterButton
            />
        );
    }
}
