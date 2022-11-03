import { useEffect, useReducer, useRef } from 'react';

const mockUploader = {
  uploadFile(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  },
};
const logUploadedFile = (num: number, color = 'green') => {
  const msg = `%cUploaded ${num} files.`;
  const style = `color:${color};font-weight:bold;`;
  console.log(msg, style);
};

enum ActionTypes {
  INIT = 'INIT',
  NEXT = 'NEXT',
  FILE_UPLOADED = 'FILE_UPLOADED',
  FILE_UPLOAD_FAILED = 'FILE_UPLOAD_FAILED',
  FILES_UPLOADED = 'FILES_UPLOADED',
}

interface FileFormat {
  name: string;
  type: string;
  size: number;
  src: string;
  id: number;
}

interface DispatchAction extends State {
  type: ActionTypes;
  previous?: FileFormat;
  errorMsg?: string;
}

type State = {
  files?: FileFormat[];
  pending?: FileFormat[];
  uploading?: boolean;
  uploaded?: any;
  next?: FileFormat | null;
  uploadError?: string;
};

const initialState: State = {
  files: [],
  pending: [],
  uploading: false,
  uploaded: {},
  next: null,
};

export const reducer = (state: State, action: DispatchAction): State => {
  console.log(`Dispatch(${action.type})`);
  switch (action.type) {
    case ActionTypes.INIT:
      return {
        ...state,
        files: action.files,
        pending: action.files,
        uploading: true,
      };
    case ActionTypes.NEXT:
      return {
        ...state,
        next: action.next,
      };
    case ActionTypes.FILE_UPLOADED:
      return {
        ...state,
        next: null,
        pending: action.pending,
        uploaded: {
          ...state.uploaded,
          [`${action.previous?.id}`]: action.previous,
        },
      };
    case ActionTypes.FILE_UPLOAD_FAILED:
      return { ...state, uploadError: action.errorMsg };
    case ActionTypes.FILES_UPLOADED:
      return { ...state, uploading: false };
    default:
      return state;
  }
};
const useFileUploadQueue = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const countRef = useRef(0);

  const initFileUpload = (uploadedFiles: File[]) => {
    const files = uploadedFiles.map((uf, index) => {
      const src = window.URL.createObjectURL(uf);
      return {
        name: uf.name,
        type: uf.type,
        size: uf.size,
        src,
        id: index,
      } as FileFormat;
    });
    dispatch({ type: ActionTypes.INIT, files });
  };

  // Sets the next file when its ready
  useEffect(() => {
    if (!!state.pending?.length && !state.next) {
      const next = state.pending[0];
      dispatch({ type: ActionTypes.NEXT, next });
    }
  }, [state.next, state.pending]);

  // Processes the next pending file when ready
  useEffect(() => {
    const handleFileUpload = async () => {
      if (!!state.pending?.length && !!state.next) {
        try {
          const { next } = state;
          await mockUploader.uploadFile();
          const previous = next;
          logUploadedFile(++countRef.current);
          const pending = state.pending?.slice(1);
          dispatch({ type: ActionTypes.FILE_UPLOADED, previous, pending });
        } catch (error) {
          dispatch({
            type: ActionTypes.FILE_UPLOADED,
            errorMsg: 'The Upload Failed',
          });
        }
      }
    };
    handleFileUpload();
  }, [state]);

  // End the upload process
  useEffect(() => {
    if (!state?.pending?.length && state.uploading) {
      dispatch({ type: ActionTypes.FILES_UPLOADED });
    }
  }, [state.pending?.length, state.uploading]);

  return {
    ...state,
    initFileUpload,
  };
};

export default useFileUploadQueue;
