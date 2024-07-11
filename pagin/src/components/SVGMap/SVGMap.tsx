import React from 'react';
import { ReactSVG } from 'react-svg';
import { SvgContainer, Modal, CloseButton } from './SVGMap.styled';
import Map from './ukraine.svg';

interface Region {
  id: string;
  color: string;
}

interface SvgMapProps {
  isOpen: boolean;
  onClose: () => void;
  regions: Region[];
}

const SvgMap: React.FC<SvgMapProps> = ({ isOpen, onClose, regions }) => {
  if (!isOpen) return null;

  // Функция для получения первой части строки до первого '-'
  function processString(input: string): string {
    const lowerCaseString = input.toLowerCase(); 
    const parts = lowerCaseString.split('-');   
    return parts[0]; // Возвращаем первую часть
  }

  // Функция для поиска элементов по частичному совпадению id
  function findElementsByPartialId(svg: SVGSVGElement, partialId: string): SVGElement[] {
    const elements = svg.querySelectorAll('[id]');
    const matchingElements: SVGElement[] = [];
    elements.forEach((element) => {
      if (element.id.includes(partialId)) {
        matchingElements.push(element as SVGElement);
      }
    });
    return matchingElements;
  }

  return (
    <Modal>
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
      <SvgContainer>
        <ReactSVG
          src={Map}
          beforeInjection={(svg) => {
            console.log('Regions in SvgMap:', regions);
            console.log('SVG загружен', svg);

            // Обработка регионов
            regions.forEach((region) => {
              // Применяем функцию processString к id региона
              const parts_reg = processString(region.id);
              console.log({ parts_reg });

              // Поиск всех элементов с id, содержащим parts_reg
              const elements = findElementsByPartialId(svg, parts_reg);
              elements.forEach((element) => {
                // Устанавливаем цвет для каждого подходящего элемента
                element.setAttribute('style', `fill: ${region.color};`);
              });
            });
          }}
          onError={(error) => {
            console.error('Ошибка при загрузке SVG:', error);
          }}
          style={{ width: '100%', height: 'auto' }} 
        />
      </SvgContainer>
    </Modal>
  );
};

export default SvgMap;
