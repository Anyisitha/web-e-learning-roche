import { Card, CardContent } from "@mui/material";
import useControllers from "controllers";
import { StledCertificateContainer, StyledAvancedText1, StyledCertificate, StyledCertificateCard } from "./CertificateCard.styles";

const CertificateCard = () => {

    const { useGeneralHooks } = useControllers();
    const { useAssets } = useGeneralHooks();
    const { certificado } = useAssets();

    return (
        <StyledCertificateCard>
            <Card sx={{ width: 270 }}>
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