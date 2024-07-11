import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

// Styled components using the keyframes
export const PcaWrapper = styled.div`
  background-color: transparent;
  color: red;
`;

export const PaginationControlContainer = styled.div`
  margin-left: 0px;
`;

export const CardCarWrapper = styled.div`
  &.slide-in-right {
    animation: ${slideInRight} 0.5s forwards;
  }
  &.slide-out-right {
    animation: ${slideOutRight} 0.5s forwards;
  }
  &.slide-in-left {
    animation: ${slideInLeft} 0.5s forwards;
  }
  &.slide-out-left {
    animation: ${slideOutLeft} 0.5s forwards;
  }
`;
