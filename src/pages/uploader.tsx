// import React, { useCallback, useMemo } from 'react';
// import { useDropzone } from 'react-dropzone';

// const baseStyle: React.CSSProperties = {
//   flex: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: '#eeeeee',
//   borderStyle: 'dashed',
//   backgroundColor: '#fafafa',
//   color: '#bdbdbd',
//   outline: 'none',
//   transition: 'border .24s ease-in-out',
// };

// const Uploader = () => {
//   const handleDroppedFile = useCallback((acceptedFiles: any) => {
//     // Do something with the files
//     console.log({ acceptedFiles });
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop: handleDroppedFile,
//   });

//   return (
//     <>
//       <div className='my-3 mx-2'>
//         <h3 className='font-semibold text-2xl tracking-wide'>Attachments</h3>
//         <div className='max-w-4xl border w-full py-2.5 px-1 grid grid-cols-2 mt-2 h-56'>
//           <div>
//             <p>File List....</p>
//           </div>
//           <div className='container'>
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p>Drop the files here ...</p>
//               ) : (
//                 <p>Drag 'n' drop some files here, or click to select files</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Uploader;

// // const {     getRootProps,
// //   getInputProps,
// //   isFocused,
// //   isDragAccept,
// //   isDragReject } = useDropzone({
// //   onDrop: handleFileUpload,
// //   // Max Files = 16
// //   maxFiles: 4,
// //   // Max Size = 100MB
// //   maxSize: 1000000,
// // });

import { useDropzone } from 'react-dropzone';
import useFileUploadQueue from './fileUploadQueue';

const UploaderPage = () => {
  const { files, initFileUpload } = useFileUploadQueue();

  // const handleDroppedFile = useCallback(
  //   (acceptedFiles: File[]) => {
  //     // Do something with the files
  //     initFileUpload(acceptedFiles);
  //   },
  //   [initFileUpload]
  // );
  const handleDroppedFile = (files: File[]) => {
    return initFileUpload(files);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDroppedFile,
  });

  return (
    <div className='container'>
      <div className='container'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(files)}</pre>
      </div>
    </div>
  );
};

export default UploaderPage;
