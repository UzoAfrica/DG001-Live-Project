import styled from 'styled-components';

import { IoMdNotificationsOutline } from 'react-icons/io';

export const Nav = styled.nav`
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SortByButton = styled.button``;
export const StyledIoMdNotificationsOutline = styled(IoMdNotificationsOutline)`
  height: 30px;
`;

export const StyledButton = styled.div`
  display: flex;
  gap: 10px;
`;
export const Btn = styled.button`
    border: none;
    border-radius: 10px;
    font-family:
    
    width: 100px;
    background-color: #df6d4b;
    height: 40px;

`;
export const MainDiv = styled.div`
  gap: 100px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyleCategories = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 700px;
  width: 150px;

  h2 {
    font-family: sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
  }

  h4 {
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
  }

  label {
    font-family: sans-serif;
    font-size: 15px;
    font-weight: normal;
    margin-top: 10px;
    display: inline-block;
  }

  div {
    margin-bottom: 10px;
  }

  input[type='radio'] {
    margin-right: 8px;
  }
`;

// export const StyleCategories = styled.div`
// display: flex;
// flex-direction: column;
// row-gap: 20px;
// height: 80%;
//
// `
export const Holder = styled.div`
  width: 60%;
`;

export const Catediv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const MaxOut = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-right: 100px;
`;
export const StyledInput = styled.input`
  height: 30px;
  width: 60%;
`;

export const TwinsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
export const Field = styled.fieldset`
  margin-top: 50px;
  border: none;
`;
export const SidebarTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const SidebarItems = styled.div`
  margin-top: 20px;
`;

export const SidebarLabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  //.checkmark {
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  height: 20px;
  //  width: 20px;
  //  background-color: #eee;
  //  border-radius: 50%;
  //}

  //&:hover input ~ .checkmark {
  //  background-color: #ccc;
  //}

  //input:checked ~ .checkmark {
  //  background-color: #2196f3;
  //}

  //.checkmark:after {
  //  content: "";
  //  position: absolute;
  //  display: none;
  //}

  //input:checked ~ .checkmark:after {
  //  display: block;
  //}

  //.checkmark:after {
  //  top: 6.4px;
  //  left: 6.4px;
  //  width: 7px;
  //  height: 7px;
  //  border-radius: 50%;
  //  background: white;
  //}
`;

export const Line = styled.hr`
  margin-top: 3rem;
  border-color: #f7f7f7;
`;
