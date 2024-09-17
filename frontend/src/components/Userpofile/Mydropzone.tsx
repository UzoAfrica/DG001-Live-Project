
import { useDropzone } from 'react-dropzone';

const MyDropzone = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Handle the files here
      console.log('Accepted files:', acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} >
      <input  type='file' {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    
    </div>
  );
};



export default MyDropzone;
