// src/components/SvgMap/SVGMap.styled.ts
import styled from 'styled-components';

// Модальное окно
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон для модального окна */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Убедитесь, что модальное окно поверх всего контента */
`;

// Контейнер для SVG
export const SvgContainer = styled.div`
  background: #fff; /* Белый фон для контейнера SVG */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тень для контейнера */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 800px;
`;

// Кнопка закрытия
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff0000; /* Красный фон кнопки закрытия */
  color: #fff; /* Белый текст на кнопке */
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1010; /* Убедитесь, что кнопка поверх SVG */
  
  &:hover {
    background: #cc0000; /* Темнее красный при наведении */
  }
  
  &:focus {
    outline: none; /* Убираем обводку при фокусе */
  }
`;
