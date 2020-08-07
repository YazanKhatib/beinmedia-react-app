import styled from 'styled-components';

interface myProps {
  padding: 'string';
}

export const Svg = styled.svg`
  padding: ${(props: myProps) => props.padding || 0};
`;
