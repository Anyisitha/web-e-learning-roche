import React, {useState, useEffect} from "react";
import {Grid, Modal} from "@mui/material";
import {StyledContainer, StyledContainerModal, StyledImage} from "./MessageModal.styles";

const MessageModal = () => {
    /** States */
    const [openModal, setOpenModal] = useState<boolean>(true);

    /** Effects */
    useEffect(() => {
        setTimeout(() => {
            setOpenModal(false)
        }, 7000);
    }, []);

    return (
        <Modal
            open={openModal}
        >
            <StyledContainer>
                <StyledContainerModal item xl={8} lg={8}>
                    <StyledImage
                        src={require("../../../../../assets/images/modal-image-module.png")}
                        alt="Modal image"
                    />
                </StyledContainerModal>
            </StyledContainer>
        </Modal>
    )
}

export default MessageModal;