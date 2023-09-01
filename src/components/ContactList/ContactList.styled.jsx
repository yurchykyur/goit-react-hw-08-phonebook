import styled from '@emotion/styled';

const PhonebookList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  margin-top: 10px;
  padding: 0;

  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;

  list-style: none;
  box-shadow: 0px 2px 10px -3px;
`;

const ListElement = styled.li`
  :first-of-type {
    padding-top: 20px;
  }

  :last-child {
    padding-bottom: 20px;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 420px;
  height: 50px;
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
`;

const ContactItemName = styled.p`
  margin-left: 20px;
  font-size: 18px;
`;

const ContactItemNum = styled.a`
  margin-left: auto;
  font-size: 18px;
  text-decoration: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;

const DeleteBtn = styled.button`
  display: inline-block;
  height: 27px;
  padding: 0;
  margin: 0 20px 0 50px;

  color: #3498db;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;

export {
  ListElement,
  PhonebookList,
  ContactItemWrapper,
  ContactItemName,
  ContactItemNum,
  DeleteBtn,
};