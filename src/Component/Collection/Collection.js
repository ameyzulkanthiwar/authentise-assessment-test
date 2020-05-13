import React from "react";
import Card from "../Card/Card";
import "./Collection.css";
export default class Collection extends React.Component {
    render() {
        const { collectionData, handleOnClick } = this.props;

        return (
            <div className="collection">
                <div className="collection-title">
                    Your Collection
                </div>
                <div className="collection-container">
                    {collectionData &&
                        collectionData.map((res, index) => {
                            return (
                                <Card
                                    key={`${res.title}-${index}`}
                                    title={res.title}
                                    cardSrc={res.cardSrc}
                                    handleOnClick={handleOnClick}
                                    danger={true}
                                    buttonText={
                                        "Remove from Collection"
                                    }
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}
