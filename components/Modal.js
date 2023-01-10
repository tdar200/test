import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 4px;
  color: black;
  height: 30vh;
  width: 30vw;
`;

const ModalButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
`;

const Modal = (props) => {
  const { message, visible, setModalVisible } = props;
  return (
    <>
      {visible && (
        <ModalContainer>
          <ModalContent>
            <ul>{message}</ul>
            <ModalButton onClick={() => setModalVisible(false)}>
              Close
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
