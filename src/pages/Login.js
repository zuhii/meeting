import React, { useState } from "react";
import styled from "styled-components";
import color from "./../assets/color.png";

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f3fe;
`;
const MainDiv = styled.div`
  position: absolute;
  width: 90vw;
  height: 80vh;
  margin-top: 78px;
  margin-left: 69px;
  margin-right: 69px;
  background: #f8f8f8;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  z-index: 2;
`;
const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
  z-index: 1;
`;
const Login = styled.div`
  border-radius: 20px;
  margin: auto;
  z-index: 3;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #535571;
`;
const SubTitle = styled.div`
  font-size: 12px;
  margin-bottom: 25px;
  color: #535571;
`;
const Label = styled.label`
  color: #8165df;
  text-align: left;
  padding-left: 10px;
  font-size: 12px;
`;
const Link = styled.a`
  color: #8165df;
  text-align: left;
  padding-left: 10px;
  font-size: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: white;
  border: solid #9c9c9c 0.1px;
  width: 280px;
`;
const Btn = styled.button`
  width: 290px;
  height: 30px;
  font-size: 11px;
  margin: 40px auto;
  color: white;
  background-color: #8165df;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.1);
`;

const Main = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Login>
          <Title>Login</Title>
          <SubTitle>반갑습니다 미티에 오신 것을 환영해요!</SubTitle>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <Label>ID</Label>
            <Input type="text" name="userId" />
            <Label>PW</Label>
            <Input type="text" name="userPw" />
            <Link href="#">아직 미티의 회원이 아니신가요?</Link>
            <Btn>로그인</Btn>
          </form>
        </Login>
      </MainDiv>
    </Test>
  );
};

export default Main;
