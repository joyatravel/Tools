import styled from "@emotion/styled";

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: black;

  width: 90px;
  height: 40px;
  background: #b8d8d8;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :not(:disabled) {
    cursor: pointer;
    background: hsl(180, 70%, 48%);
  }
`;

export const Row = styled.div`
  font-size: 18px;
  display: flex;
  font-weight: 200;
`;

export const Title = styled.div`
  font-size: 24px;
  display: flex;
  align-items: "left";
  font-weight: 600;
`;
