import React from "react";
import { Card, Button, Alert } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { Container, FormInput, PasswordInput } from "./styles";
import { authRoutes } from "../../../api";
import { login } from "../../../services/auth";

const Login: React.FC = () => {
  // errors and loading states
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    if (email === "" || password === "") {
      setError("The Email and Password fields are required");
      setLoading(false);
    } else {
      const response = await authRoutes.login(email, password);

      if (response.errors) {
        setError(response.errors);
        setLoading(false);
      } else {
        const { access_token } = response;

        await login(access_token);

        window.location.href = "/";
      }
    }
  };

  return (
    <Container>
      <Card style={{ maxWidth: 500, width: "100%", padding: 15 }}>
        <form onSubmit={handleSubmit}>
          {error ? (
            <Alert
              style={{ marginBottom: 15 }}
              message="Error"
              description={error}
              type="error"
              closable
            />
          ) : null}
          <p style={{ marginBottom: 15 }}>
            <strong>Faça login para continuar</strong>
          </p>

          <FormInput
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            prefix={<UserOutlined />}
          />
          <PasswordInput
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="input password"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />

          <Button
            style={{ width: "100%", height: 40 }}
            type="primary"
            htmlType="submit"
          >
            Logar
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
