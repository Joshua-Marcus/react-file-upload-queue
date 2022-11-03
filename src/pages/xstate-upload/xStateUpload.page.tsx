import { useMachine } from '@xstate/react';
import { useDropzone } from 'react-dropzone';
import { assign, createMachine } from 'xstate';
import { useMemo } from 'react';
import {
  acceptStyle,
  baseStyle,
  focusedStyle,
  rejectStyle,
} from '../react-upload/helpers/dropzone.styles';

interface FileQueueContext {
  files: File[];
}

const fileQueue = createMachine(
  {
    id: 'fileQueue',
    initial: 'init',
    predictableActionArguments: true,
    preserveActionOrder: true,
    schema: {
      context: {} as FileQueueContext,
    },
    context: { files: [] },
    states: {
      init: {
        entry: ['logState'],
        on: {
          NEXT: {
            actions: [
              assign({
                files: (context: any, event: any) => {
                  // console.log({ context, event });
                  return context;
                },
              }),
            ],
            // actions: (context, event) => {
            //   console.log(context, event);
            // },
            // actions: assign({
            //   files: (context: { files: File[] }, event: any) => [
            //     ...context.files,
            //     ...event.files,
            //   ],
            // }),
            target: 'next',
          },
        },
      },
      next: {
        // entry actions
        entry: ['queueNext'],

        // exit actions
        on: {
          RESET: 'init',
        },
      },
    },
  },
  {
    actions: {
      // action implementations
      queueNext: (context, event) => {
        console.log('queueNext...');
        console.log({ context });
      },
      logState: (context, event) => {
        console.log('logState...', context);
      },
    },
  }
);

const StateXUpload = () => {
  const [state, send] = useMachine(fileQueue);

  const handleDroppedFile = (files: File[]) => {
    send('NEXT', { files });
    // console.log('Current State', state);
    // return initFileUpload(files);
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
    <div>
      <p>{JSON.stringify(state.value)}</p>
      <div className='container'>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag & drop files here</p>
        </div>
      </div>
    </div>
  );
};

export default StateXUpload;
