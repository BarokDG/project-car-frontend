import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalContainer,
  ModalHeader,
  ModalClose,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "../styles/Modal.style";

export default function Modal(props) {
  console.log(props.car);
  return (
    <>
      {props.active && (
        <ModalBlock>
          {/* <ModalOverlay onClick={() => hideModal()}></ModalOverlay> */}
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>The {props.car.make} {props.car.model}</ModalTitle>
              <ModalClose onClick={() => props.hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalBody>{props.children}</ModalBody>
            <ModalFooter>{props.footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
}
