import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Api/Auth";
import { setLocalStorage, setSessionStorage } from "../../utils/storage";
import "./LoginPage.css";

export type TuserForm = {
  username: string;
  password: string;
  remember: boolean;
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (userData: TuserForm) => {
    auth
      .loginUser(userData)
      .then((res) => {
        if (userData.remember) {
          setLocalStorage(res.token);
        } else {
          setSessionStorage(res.token);
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinish = (values: TuserForm) => {
    handleLogin(values);
  };

  return (
    <div className={"container"}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        size={"large"}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Пожулуйста, введите логин" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить данные</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
