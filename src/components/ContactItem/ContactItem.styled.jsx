import styled from 'styled-components';
import { RiUserFill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const IconUser = styled(RiUserFill)`
  padding: 3px;
  border: 1px solid #8FBC8F;
  border-radius: 50%;
  margin-right: 10px;
  color: #8FBC8F;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #242323;
  font-size: 30px;
  border: none;
  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;
  :hover {
    color: red;
  }
`;