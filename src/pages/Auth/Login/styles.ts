import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
`;

export const PasswordInput = styled(Input.Password)`
  margin-bottom: 20px;
`;
