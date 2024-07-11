// comparison.styled.ts
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  margin-top: 300px;
  margin-left: -200px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    margin-left: 0;
    justify-content: center;
  }

  @media (max-width: 767px) {
    margin-top: 40px;
    margin-left: 0;
    padding: 10px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1010;

  &:hover {
    background: #cc0000;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    top: 5px;
    right: 5px;
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export const ModalContentS = styled.div`
  background-color: rgba(66, 66, 66, 0.99);
  border-radius: 20px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  z-index: 1000;
  padding-top: 50px;
  margin-left: 300px;

  @media (max-width: 1200px) {
    margin-left: 0;
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 95%;
    margin-left: 0;
    padding: 15px;
    transform: none;
    left: 0;
    font-size: 14px;
  }
`;