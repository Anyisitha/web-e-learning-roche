import { Card, CardContent } from "@mui/material";
import { StyledAvancedText, StyledCircleProgress, StyledNumber, StyledPercentContainer, StyledSpan, StyledSvg } from "./CircleProgress.styles";

interface ICircleProgressProps {
    percent: number;
    isBody: boolean;
}

const CircleProgress = ({ percent, isBody }: ICircleProgressProps) => {
    return (
        <StyledCircleProgress>
            <Card sx={{ width: isBody ? 370 : 270 }}>
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

            </Card>
        </StyledCircleProgress>
    )
}

export default CircleProgress;  