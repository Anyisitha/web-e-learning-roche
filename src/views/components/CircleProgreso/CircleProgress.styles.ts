import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "@mui/material";

export const StyledCircleProgress = styled.div.attrs({

})<{ isBody: boolean; isFull?: boolean }>`
    ${tw`pb-8 drop-shadow-2xl`}
    ${({ isBody, isFull }) => isFull ? tw`w-full` : isBody ? tw`w-[370px]` : tw`w-[270px]`}

    @media (max-width: 500px) {
        ${tw`w-full`}
    }
`

export const StyledCard = styled(Card)`
    ${tw`w-full`}
`

export const StyledPercentContainer = styled.div.attrs({
    className: "styled-percent percent"
})`
    ${tw`flex justify-center items-center relative`}
`

export const StyledSvg = styled.svg.attrs({
    className: "styled-svg"
}) <{ percent: number, isBody: boolean }>`
    ${tw`relative`}
    ${({ isBody }) => isBody ? tw`w-[150px] h-[150px]` : tw`w-[100px] h-[100px]`}
    ${({ isBody }) => isBody ? "transform: rotate(-85deg)" : "transform: rotate(-85deg)"};

    circle {
        ${tw`w-full h-full`}    

        fill: none;
        stroke: #c3c3c1;
        stroke-width: 5;
        stroke-linecap: round !important;
        transform: translate(5px, 5px);

        &:nth-child(2){
            stroke-dashoffset: calc(440 - (440 * ${({ percent }) => percent}) / 100);
            stroke: #f7931e;
            stroke-dasharray: 440;
            stroke-width: 10;
        }
    }
`

export const StyledNumber = styled.div.attrs({
    className: 'number',
})`
    ${tw`absolute top-0 left-0 w-full h-full flex justify-center items-center`}

    border-radius: 50%;

    h2 {
        color: #f7931e;
        font-weight: bold;
        font-size: 25px;
        transition: 0.5s;
        font-family: "Myriad Pro";
    }
`

export const StyledAvancedText = styled.b`
        color: #f15a24;
        font-size: 20px;
        font-family: "Myriad Pro";
`

export const StyledSpan = styled.span`
    font-size: 20px;
    font-family: "Myriad Pro";
`