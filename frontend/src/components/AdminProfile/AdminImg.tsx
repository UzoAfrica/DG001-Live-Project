import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';
import { Dragzone, ProfileImg } from '../StyleCompo';

const MyDropzone: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      console.log('Accepted files:', acceptedFiles);
      const file = acceptedFiles[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    },
  });

  return (
    <>
      <Dragzone {...getRootProps()}>
        <Dragzone type='file' {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop some files here, or click to select files</p>
        )}
        <FaPlus />
      </Dragzone>

      {image && (
        <ProfileImg src={image} alt="Preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
      )}
    </>
  );
};

export default MyDropzone;
