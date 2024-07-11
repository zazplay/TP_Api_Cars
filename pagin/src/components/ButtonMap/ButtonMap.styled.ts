import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    bottom: 10px;
    left: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
    bottom: 5px;
    left: 5px;
  }
`;

export const ComparisonButton = styled(Button)`
  left: auto;
  right: 20px;

  @media (max-width: 768px) {
    right: 10px;
  }

  @media (max-width: 480px) {
    right: 5px;
  }
`;
