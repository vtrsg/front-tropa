import styled from "styled-components";
import background from  "../../pngs/background-login.png"

export const PageArea = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    height: 520px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 470px;

        img{
            width: 250px;
            height: 75px;
        }
    }
    .image{
        width: 390px;
        height: 520px;
        background-image:url(${background});
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        img{
           position: fixed;
           margin-right: 50px;
           width: 410px;
           margin-top: 113px;

        }
    }
`