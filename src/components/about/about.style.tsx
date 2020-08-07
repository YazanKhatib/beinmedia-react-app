import styled from 'styled-components';

export const Container = styled.div``;

export const Bio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  margin-right: 60px;
  height: 60%;
  border-radius: 5px;
  box-shadow: 0 5px 86px 0 rgba(0, 0, 0, 0.05);
  background-color: #2a4986;
  overflow-y: scroll;
  over &::-webkit-scrollbar {
    color: black;
  }
  &::-webkit-slider-thumb {
    webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  }
`;

export const Text = styled.div`
  font-family: LoewNextArabic;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  padding-right: 20px;
  text-align: right;
  color: #ffffff;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  height: 34px;
  margin-right: 60px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #223c6e;
`;

export const TagText = styled.div`
  font-family: LoewNextArabic;
  font-size: 14px;
  padding: 10px;
  color: #a7b5d2;
`;

export const Subject = styled.div`
  font-family: LoewNextArabic;
  font-size: 20px;
  margin-right: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 800;
  text-align: right;
  color: #ffffff;
`;
