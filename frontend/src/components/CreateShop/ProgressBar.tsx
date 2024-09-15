import styled from 'styled-components';

interface ProgressBarProps {
  step: number;
  steps: string[];
}

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
`;

const ProgressStep = styled.div<{ $isActive?: boolean }>`
  width: 20%;
  text-align: center;
  /* position: relative; */
  color: ${({ $isActive }) => ($isActive ? '#e04f16' : '#8C8C8C')};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
`;

const StepCircle = styled.div<{ $isActive?: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${({ $isActive }) => ($isActive ? '#e04f16' : '#C4C4C4')};
  border-radius: 50%;
  margin: 0 auto 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#8C8C8C')};
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ step, steps }) => {
  return (
    <ProgressContainer>
      {steps.map((label, index) => (
        <ProgressStep key={label} $isActive={index <= step}>
          <StepCircle $isActive={index <= step}>{index + 1}</StepCircle>
          <div>{label}</div>
        </ProgressStep>
      ))}
    </ProgressContainer>
  );
};

export default ProgressBar;
