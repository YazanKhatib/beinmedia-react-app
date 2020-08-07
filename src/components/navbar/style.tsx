import styled from 'styled-components';

interface myProps {
  fontSize?: any;
  fontWeight?: any;
  fontStretch?: any;
  fontStyle?: any;
  marginTop?: any;
  marginBottom?: any;
  marginRight?: any;
  marginLeft?: any;
  color?: any;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8%;
`;

export const ListText = styled.div`
  font-family: LoewNextArabic;
  font-size: 18px;
  font-weight: 800;
  line-height: 2.75;
  text-align: right;
  color: #1d428b;
`;

export const WelcomeText = styled.div`
  font-family: LoewNextArabic;
  font-size: 15px;
  font-weight: 600;
  color: #1c3668;
`;

export const UserText = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-right: 10px;
  color: #1c3668;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;
