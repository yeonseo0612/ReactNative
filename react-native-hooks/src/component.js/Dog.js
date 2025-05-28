import React from "react";
import styled from "styled-components/native";
import { useFetch } from "../hooks/useFetch";

const StyledImage = styled.Image`
  background-color: #7f8c8d;
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

const ErrorMessage = styled.Text`
  font-size: 18px;
  color: #e74c3c;
  margin-top: 10px;
`;

const LoadingText = styled.Text`
  font-size: 16px;
  color: #2c3e50;
  margin-top: 10px;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const URL = "https://dog.ceo/api/breeds/image/random";

const Dog = () => {
  const { data, error, inProgress } = useFetch(URL);

  return (
    <Container>
      {inProgress && <LoadingText>현재 요청이 진행중입니다...</LoadingText>}
      {data?.message && <StyledImage source={{ uri: data.message }} />}
      {error && <ErrorMessage>⚠️ {error.message || "오류가 발생했습니다."}</ErrorMessage>}
    </Container>
  );
};

export default Dog;