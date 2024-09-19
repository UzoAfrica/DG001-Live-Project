// src/StyledComponents.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
    gap: 20px;
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #ffffff;
    color: #191818;
    height: 100%;
`;

export const SidebarItem = styled.div`
    margin: 10px 0;
    cursor: pointer;
    color: ${(props) => (props.active ? 'orange' : 'black')};
    &:hover {
        color: #e04f16;
    }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Navbar = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #ecf0f1;
`;
export const Logo = styled.img`
  height: 40px;
`;

export const SearchBar = styled.input`
  padding: 5px;
  width: 300px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background: #f2f2f2;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
