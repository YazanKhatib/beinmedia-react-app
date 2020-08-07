import styled from 'styled-components';

interface myProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 8%;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(80deg, #254176 11%, #1c3668 95%);
`;

export const Button = styled.div`
  font-family: LoewNextArabic;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: right;
  color: ${(props: myProps) => (props.active ? '#ffffff' : '#8191b2')};
  border-bottom: ${(props: myProps) =>
    props.active ? '2px solid #ffffff;' : ''};

  &: hover {
    color: #ffffff;
    font-weight: 800;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  font-family: LoewNextArabic;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: right;
  color: #8191b2;
`;

export const Box = styled.div`
  display: flex;
`;

export const State = styled.div`
  margin-top: 10px;
`;

export const LeftSection = styled.div`
  display: flex;
  margin-left: 40px;
  justify-content: space-between;
  width: 35%;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 60px;
  width: 40%;
`;
