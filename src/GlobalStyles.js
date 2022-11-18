import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  font-family: sans-serif;
  background-color: #C2C2C2;
  color: #333333;
  
}

button {
  cursor: pointer;
  background-color: #0287CE;
  border: none;
  border-radius: 10px;
  width: 180px;
  height: 40px;
  color: #eeeeee;
  letter-spacing: 1.2px;
  transition: 0.2s;
  
  &:hover{
    background-color: #015988;
  }
}

img {
  margin-bottom: 25px;
}

label {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
}

input, select{
  font-size: 17px;
  width: 100%;
  background-color: #ededed;
  border: none;
  height: 40px;
  border-radius: 7px;
  margin-top: 5px;
  padding: 0 15px;
  box-shadow: 5px 5px 5px rgba(0,0,0,.1);
}

`;

