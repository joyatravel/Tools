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

  // prettier-ignore
  p { margin: 20px;  }
`;

export const Title = styled.div`
  margin-top: 12px;
  font-size: 24px;
  display: flex;
  align-items: "left";
  font-weight: 600;
`;

const PROFILE_SIZE = 325;
export const Profile = styled.img`
  width: ${PROFILE_SIZE}px;
  height: ${PROFILE_SIZE}px;

  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  color: white;
`;
export const ID = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 150px;
  border: solid 1px #0a2b3f;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;
