import { useRef } from 'react';
import styled from 'styled-components';

const Progress = styled.progress<{ $isUploaded: boolean }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 100%;
  height: 3px;
  margin-top: 5px;

  &::-webkit-progress-bar {
    background-color: #e0e0de;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => (props.$isUploaded ? '#6ed06c' : '#0264bc')};
    border-radius: 10px;
  }

  &::-moz-progress-bar {
    background-color: ${(props) => (props.$isUploaded ? '#6ed06c' : '#0264bc')};
    border-radius: 10px;
  }
`;

const ProgressBar = (props: { $isUploaded: boolean }) => {
  const progressRef = useRef<number>(0);
  console.log(props.$isUploaded);
  return (
    <div style={{ display: 'flex' }}>
      <Progress
        $isUploaded={props.$isUploaded}
        value={props.$isUploaded ? 100 : progressRef.current}
        max='100'
      />
    </div>
  );
};

export { ProgressBar };
