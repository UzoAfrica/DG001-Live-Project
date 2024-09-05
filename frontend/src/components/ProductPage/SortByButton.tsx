// src/components/SortByButton.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    min-width: 120px;
  }

  @media (max-width: 480px) {
    min-width: 100px;
  }
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

const SortButton = styled.button`
  background-color: #efd7d7;
  color: #191818;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

const SortByButton: React.FC<{ onSort: (sortOption: string) => void }> = ({
  onSort,
}) => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const handleSort = (sortOption: string) => {
    onSort(sortOption);
    setDropdownVisibility(false);
  };

  return (
    <Dropdown>
      <SortButton onClick={() => setDropdownVisibility((prev) => !prev)}>
        Sort by
      </SortButton>
      <DropdownContent isVisible={isDropdownVisible}>
        {[
          'highestRated',
          'mostRecent',
          'mostRelevant',
          'highPrice',
          'lowPrice',
        ].map((option) => (
          <DropdownItem key={option} onClick={() => handleSort(option)}>
            {option
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

export default SortByButton;

// // src/components/SortByButton.tsx
// import React, { useState } from 'react';
// import styled from 'styled-components';
//
// const Dropdown = styled.div`
//   position: relative;
//   display: inline-block;
// `;
//
// const DropdownContent = styled.div<{ show: boolean }>`
//   display: ${props => (props.show ? 'block' : 'none')};
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
//
//   @media (max-width: 768px) {
//     min-width: 120px;
//   }
//
//   @media (max-width: 480px) {
//     min-width: 100px;
//   }
// `;
//
// const DropdownItem = styled.div`
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
//   cursor: pointer;
//
//   &:hover {
//     background-color: #f1f1f1;
//   }
//
//   @media (max-width: 768px) {
//     padding: 10px 14px;
//   }
//
//   @media (max-width: 480px) {
//     padding: 8px 12px;
//   }
// `;
//
// const SortButton = styled.button`
//     background-color: #efd7d7;
//     color: #191818;
//     padding: 10px 20px;
//     border: none;
//     cursor: pointer;
//     border-radius: 10px;
//
//     @media (max-width: 768px) {
//         padding: 8px 16px;
//     }
//
//     @media (max-width: 480px) {
//         padding: 6px 12px;
//     }
// `;
//
// const SortByButton: React.FC<{ onSort: (sortOption: string) => void }> = ({ onSort }) => {
//     const [showDropdown, setShowDropdown] = useState(false);
//
//     const handleSort = (sortOption: string) => {
//         onSort(sortOption);
//         setShowDropdown(false);
//     };
//
//     return (
//         <Dropdown>
//             <SortButton onClick={() => setShowDropdown(!showDropdown)}>Sort by</SortButton>
//             <DropdownContent show={showDropdown}>
//                 <DropdownItem onClick={() => handleSort('highestRated')}>Highest Rated</DropdownItem>
//                 <DropdownItem onClick={() => handleSort('mostRecent')}>Most Recent</DropdownItem>
//                 <DropdownItem onClick={() => handleSort('mostRelevant')}>Most Relevant</DropdownItem>
//                 <DropdownItem onClick={() => handleSort('highPrice')}>High Price</DropdownItem>
//                 <DropdownItem onClick={() => handleSort('lowPrice')}>Low Price</DropdownItem>
//             </DropdownContent>
//         </Dropdown>
//     );
// };
//
// export default SortByButton;
