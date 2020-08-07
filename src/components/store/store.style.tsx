import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
`;

export const Card = styled.div`
  dispaly: flex;
  margin: 0px 20px 55px; 20px;
  width: 26%;
  height: 41%;
`;

export const Text = styled.div`
  font-family: LoewNextArabic;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const SmallText = styled.div`
  font-family: LoewNextArabic;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: right;
  color: #8191b2;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
