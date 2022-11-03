// import { memo, useState } from 'react';

// // const QueueItem = memo(props => {
// //     const [progress, setProgress] = useState(0);
// //     const [itemState, setItemState] = useState(0);

// //     useItemProgressListener(item => {
// //       if (item.completed > progress) {
// //         setProgress(() => item.completed);
// //         setItemState(() =>
// //           item.completed === 100 ? STATES.DONE : STATES.PROGRESS
// //         );
// //       }
// //     }, props.id);

// //     useItemAbortListener(item => {
// //       setItemState(STATES.ABORTED);
// //     }, props.id);

// //     useItemErrorListener(item => {
// //       setItemState(STATES.ERROR);
// //     }, props.id);

// //     return (
// //       <PreviewItemContainer state={itemState}>
// //         <ImageName>{props.name}</ImageName>
// //         <PreviewImageWrapper>
// //           <PreviewImage src={props.url} />
// //         </PreviewImageWrapper>
// //         <PreviewItemBar>
// //           <ItemButtons>
// //             <AbortButton id={props.id} state={itemState} />
// //             <RetryButton id={props.id} state={itemState} />
// //           </ItemButtons>
// //           <StyledCircle
// //             strokeWidth={4}
// //             percent={progress}
// //             strokeColor={progress === 100 ? "#00a626" : "#2db7f5"}
// //           />
// //         </PreviewItemBar>
// //       </PreviewItemContainer>
// //     );
// //   });

const UploaderPageOld = () => {
  return (
    <>
      <p>Uploader</p>
    </>
  );
};

export default UploaderPageOld;
