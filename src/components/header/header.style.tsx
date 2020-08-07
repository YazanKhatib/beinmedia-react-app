import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  background-color: #1f3a6e;
`;

export const Button = styled.button`
  width: 142px;
  height: 31px;
  border-radius: 16px;
  margin: 50px 20px 0 0;
  background-image: linear-gradient(
    121deg,
    #e83866 -28%,
    #e83866 -21%,
    #e57a3c 55%,
    #e57a3c 75%
  );
`;

export const ButtonText = styled.div`
  font-family: LoewNextArabic;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

export const TextFirst = styled.div`
  font-family: LoewNextArabic;
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.06;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
`;

export const TextSecond = styled.div`
  font-family: LoewNextArabic;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: right;
  color: #a7b5d2;
`;

export const TextThird = styled.div`
  font-family: LoewNextArabic;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: right;
  color: #a7b5d2;
`;

export const Image = styled.img`
  width: 84px;
  height: 84px;
  borderradius: 70px;
`;

export const OutterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
