import styled from "styled-components";
import background from "../../pngs/background-login.png";

export const FormArea = styled.div`
  display: flex;
  width: max-content;
  height: 520px;
  background-color: #ffffff;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 470px;

    img {
      width: 250px;
      height: 75px;
    }
    .menu-formContainer {
      display: flex;
      flex-direction: column;
      height: 250px;
      h2 {
        margin: 0;
        padding: 0;
        font-family: "Advent Pro", sans-serif;
        font-weight: 700;
        font-size: 25px;
        text-align: left;
        color: rgba(0, 0, 0, 0.44);
        span {
          color: #ff6c22;
        }
      }
      form {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
      input {
        width: 313px;
        height: 44px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin-top: 12px;
        font-family: "Advent Pro";
        padding-left: 12px;
        font-weight: 400;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.35);
      }
      button {
        width: 151px;
        height: 40px;
        background: #2eafb2;
        border-radius: 5px;
        color: #ffffff;
        border: 0;
        text-align: center;
        margin-top: 12px;
        cursor: pointer;
      }
    }
  }
  .image {
    width: 390px;
    height: 520px;
    background-image: url(${background});
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    img {
      position: absolute;
      margin-right: 50px;
      width: 410px;
      margin-top: 112px;
    }
  }
`;
