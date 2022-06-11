import styled from "styled-components";
import tw from "twin.macro";
import {Grid} from "@mui/material";

export const StyledContainer = styled.div`
  ${tw`w-full h-full flex justify-center items-center`}
`;

export const StyledContainerModal = styled(Grid)`
  ${tw`bg-[#ffffff50] w-full lg:w-[60%] xl:w-[60%]`}
`;

export const StyledImage = styled.img``;