import { useDropzone } from 'react-dropzone';
import { formatBytes } from 'src/utilities';
import styled from 'styled-components';
import { ProgressBar } from './components/ProgressBar';
import useUploadQueue from './useUploadQueue';

const DropzoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-width: 2px;
  border-radius: 10;
  border-color: #767778;
  border-style: dashed;
  color: #03121e;
  outline: none;
  transition: border 0.24s ease-in-out;
  font-size: 14;
  height: 100%;
  :hover {
    border-color: #0264bc;
  }
`;

const UploadScreen = () => {
  const { files, initFileUpload, uploaded, pending } = useUploadQueue();

  const handleDroppedFile = (files: File[]) => {
    return initFileUpload(files);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDroppedFile,
    maxFiles: 16,
    maxSize: 1000000,
  });

  return (
    <>
      <div className='my-12 flex flex-col max-w-5xl mx-auto'>
        <div className='border-b border-gray-300 w-full py-5 px-12 grid grid-cols-2 gap-4 mt-2 h-56'>
          <div className='flex flex-row flex-wrap'>
            {files?.map(({ name, size }, index) => (
              <div
                key={`attachment${index}`}
                className='text-sm h-fit w-1/2 px-1'
              >
                <span>{name}</span> <span>{formatBytes(size)}</span>{' '}
                <ProgressBar key={1} $isUploaded={!!pending} />
              </div>
            ))}
          </div>
          <DropzoneWrapper {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop files here</p>
          </DropzoneWrapper>
        </div>
        <div className='my-2 flex flex-row justify-between items-start px-2'>
          <p>Files: {JSON.stringify(files?.length)}</p>
          <p>Uploaded: {Object.keys(uploaded).length}</p>
          <p>Pending: {JSON.stringify(pending?.length)}</p>
        </div>
      </div>
    </>
  );
};

export default UploadScreen;
