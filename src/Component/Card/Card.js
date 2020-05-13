import React from "react";
import { Card, Button } from "antd";
import "./Card.css";
export default class CardComponent extends React.Component {
    render() {
        const { Meta } = Card;
        const {
            cardSrc,
            handleOnClick,
            title,
            buttonText,
            danger
        } = this.props;
        return (
            <div className="card">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={cardSrc} />}
                >
                    <Meta
                        title={title}
                        // description="www.instagram.com"
                    />
                    <Button
                        onClick={() =>
                            handleOnClick &&
                            handleOnClick({ title, cardSrc })
                        }
                        danger={danger && danger}
                        className="card-handle-onclick"
                    >
                        {buttonText && buttonText}
                    </Button>
                </Card>
            </div>
        );
    }
}
