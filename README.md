# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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
