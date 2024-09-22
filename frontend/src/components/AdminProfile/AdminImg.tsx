import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';
import { Dragzone, Flexo, ProfileImg } from '../StyleCompo';

const MyDropzone: React.FC<any> = ({setProfileFormData}) => {
  const [image, setImage] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      console.log('Accepted files:', acceptedFiles);
      const file = acceptedFiles[0];
      if (file) {
        setProfileFormData((previousState) => {
          return {
            ...previousState,
            image: file
          }
        })
        setImage(URL.createObjectURL(file));
      }
    },
  });

  return (
    <>
    <Flexo>
        <Dragzone {...getRootProps()}>
            <input type='file' {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <p>Drag & drop some files here, or click to select files</p>
            )}
            <FaPlus />
          </Dragzone>

          {image && (
            <ProfileImg src={image} alt="Preview" style={{ width: '50px', maxHeight: '50px', objectFit: 'contain' }} />
          )}
    </Flexo>
     
    </>
  );
};

export default MyDropzone;
