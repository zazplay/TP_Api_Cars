import React from 'react';
import { Button } from './ButtonMap.styled';

interface ButtonComponentProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Показать карту</Button>;
};


export default ButtonComponent;
