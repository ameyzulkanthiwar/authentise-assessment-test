import React from "react";
import { Form, Input, Button } from "antd";

import "./FormComponent.css";

export default class FormComponent extends React.Component {
    formRef = React.createRef();

    onFinish = async (values) => {
        try {
            this.formRef.current.resetFields();
            await this.props.handleSubmitForm({
                title: values["breed-name"],
                cardSrc: values["image-url"]
            });
        } catch (error) {}
    };

    render() {
        const { submitButtonText } = this.props;
        return (
            <Form
                name="control-ref"
                ref={this.formRef}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="breed-name"
                    label="Breed Name"
                    className="form-item"
                    rules={[
                        {
                            required: true,
                            message: "Please insert dog breed name!"
                        }
                    ]}
                >
                    <Input min={1} className="form-item" />
                </Form.Item>

                <Form.Item
                    name="image-url"
                    label="Image URL"
                    className="form-item"
                    rules={[
                        {
                            required: true,
                            type: "url",
                            message:
                                "Please insert the breed image url!"
                        }
                    ]}
                >
                    <Input min={1} className="form-item" />
                </Form.Item>

                <Form.Item className="form-item">
                    <Button type="primary" htmlType="submit">
                        {submitButtonText}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
