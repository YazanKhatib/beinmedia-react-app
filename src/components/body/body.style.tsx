import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #153064;
  height: 69%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  width: 60%;
  padding: 40px 40px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-bottom: 40px;
  padding-top: 40px;
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  opacity: 1;
`;
