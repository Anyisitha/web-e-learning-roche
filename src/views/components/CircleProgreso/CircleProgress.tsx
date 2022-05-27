import { Card, CardContent } from "@mui/material";
import { StyledAvancedText, StyledCard, StyledCircleProgress, StyledNumber, StyledPercentContainer, StyledSpan, StyledSvg } from "./CircleProgress.styles";

interface ICircleProgressProps {
    percent: number;
    isBody: boolean;
    isFull?: boolean;
}

const CircleProgress = ({ percent, isBody, isFull }: ICircleProgressProps) => {
    return (
        <StyledCircleProgress isBody={isBody} isFull={isFull}>
            <StyledCard >
                <CardContent>
                    <StyledSpan><StyledAvancedText>Avance</StyledAvancedText> Proceso</StyledSpan>
                    <StyledPercentContainer>
                        <StyledSvg percent={percent} isBody={isBody}>
                            <circle cx={ isBody ? 70 : 45 } cy={ isBody ? 70 : 45 } r={ isBody ? 70 : 40 } />
                            <circle cx={ isBody ? 70 : 45 } cy={ isBody ? 70 : 45 } r={ isBody ? 70 : 40 } />
                        </StyledSvg>
                        <StyledNumber>
                            <h2>{percent}%</h2>
                        </StyledNumber>
                    </StyledPercentContainer>
                </CardContent>
            </StyledCard>
        </StyledCircleProgress>
    )
}

export default CircleProgress;  