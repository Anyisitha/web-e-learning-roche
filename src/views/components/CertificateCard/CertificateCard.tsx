import { Card, CardContent } from "@mui/material";
import useControllers from "controllers";
import { StledCertificateContainer, StyledAvancedText1, StyledCertificate, StyledCertificateCard } from "./CertificateCard.styles";
import {FC} from "react";

const CertificateCard : FC<{isBody?: boolean}>= ({ isBody }) => {

    const { useGeneralHooks } = useControllers();
    const { useAssets } = useGeneralHooks();
    const { certificado } = useAssets();

    return (
        <StyledCertificateCard isBody={isBody}>
            <Card sx={{ width: isBody ? "100%" : 270, height: 165 }}>
                <CardContent>
                    <StyledAvancedText1>Certificado</StyledAvancedText1>
                    <StledCertificateContainer>
                        <StyledCertificate
                            src={certificado}
                        />
                    </StledCertificateContainer>
                </CardContent>
            </Card>
        </StyledCertificateCard>
    )
}

export default CertificateCard;