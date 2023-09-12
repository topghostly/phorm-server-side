import styled from 'styled-components'

export const WordSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;

    h1{
        line-height: 70px;
        font-size: 50px;
        font-family: "Poppins-Medium";
        color: var(--primary);
        span{
            font-family: "Poppins-Semibold";
        }
        @media screen and (max-width: 1400px){
            font-size: 45px;
            line-height: 50px;
        }
    }
    p{
        position: relative;
        width: 80%;
    }
`