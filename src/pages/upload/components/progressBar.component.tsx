import { useState } from 'react';

const ProgressBar = (props: { bgcolor: string }) => {
  let { bgcolor } = props;

  let completed = 100;
  //   const [completed, setCompleted] = useState(0);

  const containerStyles: React.CSSProperties = {
    height: 3,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 10,
    marginTop: 3,
  };

  const fillerStyles: React.CSSProperties = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  //   let valueInt: any;
  //   valueInt = setInterval(() => {
  //     console.log(completed);
  //     if (completed !== 100) {
  //       setCompleted(completed + 10);
  //     } else {
  //       clearInterval(valueInt);
  //     }
  //   }, 1000);

  //   function incrementValue() {

  //   }

  //   incrementValue();
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
