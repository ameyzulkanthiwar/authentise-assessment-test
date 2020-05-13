import React from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Notification from "../Notification/Notification";
import Collection from "../Collection/Collection";
import Modal from "../Modal/Modal";
import FormComponent from "../FormComponent/FormComponent";
import { getMyBreed } from "../../utils/api";
import "./Main.css";

export default class Main extends React.Component {
    state = {
        selectdCard: "",
        search: "",
        error: false,
        errorMessage: "",
        collectionData: [],
        modalState: false
    };

    handleSearch = async (text) => {
        try {
            let getImage = await getMyBreed(text);
            getImage = getImage.message;
            this.setState((prevState) => {
                return {
                    ...prevState,
                    selectdCard: getImage[0],
                    search:
                        text &&
                        text.length > 0 &&
                        text.charAt(0).toUpperCase() + text.slice(1)
                };
            });
        } catch (err) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    error: true,
                    errorMessage: "Breed Not Found"
                };
            });
        }
    };

    addDataToCollection = async (data) => {
        let flag = false;
        const filterData = this.state.collectionData.forEach(
            (res) => {
                if (res.title === data.title) flag = true;
            }
        );
        if (flag !== true) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    collectionData: [
                        ...prevState.collectionData,
                        data
                    ]
                };
            });
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    error: true,
                    errorMessage:
                        "Breed is present in the collection."
                };
            });
        }

        this.handleModalState(false);
    };

    handleModalState = (value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                modalState: value
            };
        });
    };

    handleError = async () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                error: false,
                search: ""
            };
        });
    };

    removeDataFromCollection = async (data) => {
        const filterData = this.state.collectionData.filter(
            (res) => res.title !== data.title
        );
        this.setState((prevState) => {
            return {
                ...prevState,
                collectionData: [...filterData]
            };
        });
    };

    render() {
        const {
            selectdCard,
            errorMessage,
            search,
            error,
            collectionData,
            modalState
        } = this.state;
        return (
            <div className="main-class">
                {/* Break point */}
                <div className="search-container">
                    <Search handleSearch={this.handleSearch} />
                    <Modal
                        modalButtonText={"Add new breed"}
                        modalTitle={"Insert Breed"}
                        modalState={modalState}
                        handleModalState={this.handleModalState}
                    >
                        <FormComponent
                            submitButtonText={"Submit"}
                            handleModalState={this.handleModalState}
                            handleSubmitForm={
                                this.addDataToCollection
                            }
                        />
                    </Modal>
                </div>

                {/* Break point */}
                {error === true && (
                    <Notification
                        errorMessage={errorMessage}
                        display={error}
                        onClose={this.handleError}
                    />
                )}
                {/* Break point */}
                <div className="card-and-container-display">
                    {error === false && search.length > 0 && (
                        <div className="card-container">
                            <Card
                                handleOnClick={
                                    this.addDataToCollection
                                }
                                cardSrc={selectdCard}
                                buttonText={"Add to collection"}
                                title={search}
                            />
                        </div>
                    )}
                    <div className="collection-container">
                        {collectionData &&
                            collectionData.length > 0 && (
                                <Collection
                                    collectionData={collectionData}
                                    handleOnClick={
                                        this.removeDataFromCollection
                                    }
                                />
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
