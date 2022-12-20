import { useDropzone } from 'react-dropzone';
import useUploadQueue from './helpers/useUploadQueue';
import { useMemo } from 'react';
import {
  acceptStyle,
  baseStyle,
  focusedStyle,
  rejectStyle,
} from './helpers/dropzone.styles';
import ProgressBar from './components/progressBar.component';

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(0)) + ' ' + sizes[i];
}

const ReactUpload = () => {
  const { files, initFileUpload, uploaded, pending } = useUploadQueue();

  const handleDroppedFile = (files: File[]) => {
    return initFileUpload(files);
  };
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: handleDroppedFile,
      maxFiles: 16,
      maxSize: 1000000,
    });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  return (
    <>
      <div className='my-3 mx-2 flex flex-col max-w-5xl'>
        <h3 className='font-semibold text-2xl tracking-wide'>Attachments</h3>
        <div className='max-w-5xl border w-full py-2.5 px-2 grid grid-cols-2 gap-4 mt-2 h-56'>
          <div className='flex flex-row flex-wrap'>
            {files?.map(({ name, size, id }, index) => (
              <div
                key={`attachment${index}`}
                className='text-sm h-fit w-1/2 px-1'
              >
                <span>{name}</span> <span>{formatBytes(size)}</span>{' '}
                <span>-%</span>
                <ProgressBar
                  key={1}
                  bgcolor={!!pending && pending[id] ? '#635BFF' : '#00C389'}
                />
              </div>
            ))}
          </div>
          <div className='container'>
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>Drag & drop files here</p>
            </div>
          </div>
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

export default ReactUpload;
