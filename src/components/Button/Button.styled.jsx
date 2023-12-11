import styled from 'styled-components';

export const WrapperButton = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
