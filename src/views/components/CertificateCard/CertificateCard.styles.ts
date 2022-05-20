import styled from "styled-components";
import tw from "twin.macro";

export const StyledCertificateCard = styled.div.attrs({

})`
    ${tw`drop-shadow-2xl`}
`

export const StyledAvancedText1 = styled.b`
        color: #f15a24;
        font-size: 20px;
        font-family: "Myriad Pro";
`

export const StyledCertificate = styled.img.attrs({
    className: "certificate"
})`
`

export const StledCertificateContainer = styled.div`
    ${tw`flex justify-center items-center h-full`}
`