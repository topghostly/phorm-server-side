import { styled } from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: fit-content;
    background-color: var(--background);
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    border: solid 1px rgb(202, 202, 202);
    box-shadow: rgba(87, 87, 87, 0.274) 0px 7px 29px 0px;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .submit__btn{
            width: 150px;
            margin: 0px auto;
            display: grid;
            place-items: center;
            padding: 8px 0px;
            border:solid 1px var(--primary);
            /* background-color: rgb(17, 30, 60); */
            border-radius: 7px;
        }
    }
`

export const FormBox = styled.div`    
    position: relative;
    input{
        position: relative;
        width: 100%;
        height: 34px;
        background: none;
        border: solid 1px #dadadf;
        border-radius: 5px;
        outline: none;
        padding: 0px 10px;
        font-size: 14px;
    }
    .error{
        color: red;
        font-size: 11px;
    }
`

export const Logo = styled.img`
position: relative;
width: 60px;
`