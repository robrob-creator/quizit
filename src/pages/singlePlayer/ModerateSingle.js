import React from "react";
import { message, Radio, Button, Steps, Form, Typography, Modal } from "antd";
import { getModerateQuestions } from "./../../services/singleModerate/index";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Step } = Steps;
const { Title } = Typography;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const steps = getModerateQuestions();

function ModerateSingle() {
  let scoreCounter = 0;
  let history = useHistory();
  const [current, setCurrent] = React.useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const [form] = Form.useForm();

  const onFinish = (fieldsValue) => {
    const formData = form.getFieldsValue(true); //to get the form values
    //ang function below kay para macheck nato each value sulod sa form data thats why forEach
    Object.keys(formData).forEach((keys) => {
      if (formData[keys] === 1) {
        scoreCounter = scoreCounter + 1;
      }
    });

    console.log(scoreCounter);

    Modal.info({
      title: "Confirm",
      icon: <CheckCircleOutlined />,
      content: `Your Score is: ${scoreCounter} points`,
      okText: "Ok",
      onOk: () => {
        history.push(
          "/single-player"
        ); /**history push para ma redirect nato ang user balik sa pilianan:easy||moderate||hard */
      },
    });
    message.success("Processing complete!");
  };

  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
        {...formItemLayout}
        form={form}
        name="control-hooks"
        style={{ padding: 30, borderRadius: "10px" }}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Title className="steps-content" style={{ padding: 12 }}>
          <Title level={3}>{steps[current].question}</Title>
        </Title>
        <Form.Item
          name={`item${steps[current].key}`}
          key={`item${steps[current].key}`}
          label="Choices"
          style={{ padding: "0 12px" }}
          rules={[
            {
              required: true,
              message: "Please answer all Questions",
            },
          ]}
        >
          <Radio.Group>
            {steps[current].choices.map((item) => (
              <Radio value={item.value}>{item.option}</Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" htmlType="submit">
              Finish
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Form>
    </>
  );
}

export default ModerateSingle;
