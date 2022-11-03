function incrementPV() {
console.log({ progressValue });
if (progressValue !== 100) {
setInterval(() => {
setProgress(progressValue + 5);
}, 50);
}
}

/\* import { useReducer, useRef, useEffect, useCallback } from 'react';

// Mock Uploader
const api = {
uploadFile(): Promise<void> {
return new Promise((resolve) => {
setTimeout(() => {
resolve();
}, 750);
});
},
};

const logUploadedFile = (num: number, color = 'green') => {
const msg = `%cUploaded ${num} files.`;
const style = `color:${color};font-weight:bold;`;
console.log(msg, style);
// console.log(ini)
};

// Constants

const initialState = {
files: [],
pending: [],
next: null,
uploading: false,
uploaded: {},
status: 'idle',
};

const reducer = (state: any, action: any) => {
console.log('reducer called', { state, action });
switch (action.type) {
case 'load':
return { ...state, files: action.files, status: LOADED };
case 'upload':
return { ...state, uploading: true, pending: action.files, status: INIT };
case 'init':
return { ...state, files: action.files, status: LOADED };
case 'next':
return {
...state,
next: action.next,
status: PENDING,
};
case 'file-uploaded':
return {
...state,
next: null,
pending: action.pending,
uploaded: {
...state.uploaded,
[action.prev.id]: action.prev.file,
},
};
case 'files-uploaded':
return { ...state, uploading: false, status: FILES_UPLOADED };
case 'set-upload-error':
return { ...state, uploadError: action.error, status: UPLOAD_ERROR };
default:
return state;
}
};

const useFileUploadQueue = () => {
const [state, dispatch] = useReducer(reducer, initialState);
// console.log('What is state', state);
// const initFileUpload = useCallback((acceptedFiles: File[]) => {
// console.log('initFileUpload', acceptedFiles);
// if (acceptedFiles.length) {
// console.log('handleFileUploade');
// dispatch({ type: 'upload', acceptedFiles });
// }
// });

const initFileUpload = useEffect(
(e: File[]) => {
dispatch({ type: 'init', files: e });
api.uploadFile().then(() => {
console.log('uploadFiles, ', state);
});
// if (state.files.length) {
// dispatch({ type: 'submit' });
// } else {
// window.alert("You don't have any files loaded.");
// }
// console.log('INIT FILE UPLOAD', e);
// // processFile(e);
// // console.log('process file done', state);
// // set files in state
// dispatch({ type: 'load', e });
// // store dropped files in state
// if (state.files.length) {
// // console.log('Files In State');
// // dispatch({ type: 'upload' });
// } else {
// // window.alert("You don't have any files loaded.");
// }
}
);

// const processFile = (f: File[]) => {
// if (f.length) {
// const arrFiles = Array.from(f);
// const files = arrFiles.map((file, index) => {
// const src = window.URL.createObjectURL(file as any);
// return { file, id: index, src };
// });
// dispatch({ type: 'load', files });
// }
// };

// Sets the next file when it detects that its ready to go
useEffect(() => {
// console.log('Checking State', state);
if (state.pending.length && state.next == null) {
console.log('pending state exists');
const next = state.pending[0];
dispatch({ type: 'next', next });
}
}, [state.next, state.pending]);

const countRef = useRef(0);

// Processes the next pending thumbnail when ready
useEffect(() => {
if (state.pending.length && state.next) {
const { next } = state;
api
.uploadFile()
.then(() => {
const prev = next;
logUploadedFile(++countRef.current);
const pending = state.pending.slice(1);
dispatch({ type: 'file-uploaded', prev, pending });
})
.catch((error) => {
console.error(error);
dispatch({ type: 'set-upload-error', error });
});
}
}, [state]);

// Ends the upload process
useEffect(() => {
if (!state.pending.length && state.uploading) {
dispatch({ type: 'files-uploaded' });
}
}, [state.pending.length, state.uploading]);

return {
...state,
initFileUpload,
};
};

export default useFileUploadQueue;
\*/
