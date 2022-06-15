import React from 'react';
import styled from "styled-components";

interface IFlexContainer {
  /**
   * Отступ между обьектами бокса.
   *
   * @default gap = 10
   */
  gap?: number;
  /**
   * Распределяет пространство между и вокруг элементов контента.
   *
   * @default justify = 'flex-start'
   * */
  justify?: React.CSSProperties['justifyContent'];
  /**
   * Распределяет пространство между и вокруг элементов контента.
   *
   * @default align-items = 'flex-start'
   * */
  align?: React.CSSProperties['alignItems'];
}

/**
 * Коробка с флекс позиционированием внутри.
 *
 * @example <FlexContainer justify={'space-between'} gap = {10}/>
 */
const FlexContainer = styled.div<IFlexContainer>(({gap = 10, justify = 'flex-start', align = 'align-center'}) => `
   align-items: ${align};
   justify-content: ${justify};
   gap: ${gap}px;
   display: flex;
`);

FlexContainer.displayName = 'FlexContainer';

export default FlexContainer;
