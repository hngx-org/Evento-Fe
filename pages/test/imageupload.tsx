// pages/upload.tsx

import { useState, ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import { uploadImage } from '@/http/createeventapi';
import { UploadResponse } from '@/@types';

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const allowedFileTypes = ['jpg', 'png', 'svg'];
      const fileType = selectedFile.name.split('.').pop()?.toLowerCase();

      if (fileType && allowedFileTypes.includes(fileType)) {
        // Valid file type
        setFile(selectedFile);
        // Don't clear the imageUrl state when a new file is selected
        setImageUrl(URL.createObjectURL(selectedFile));
        toast.dismiss(); // Dismiss any previous error toast
      } else {
        // Invalid file type
        toast.error('Invalid file type. Please choose a JPG, PNG, or SVG file.');
        // Clear the selectedFile state
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('Invalid file.');
      return;
    }

    setUploading(true);

    try {
      const response: UploadResponse = await uploadImage({ file });

      console.log('Upload successful:', response);
      setImageUrl(response.data.imageURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
      // Don't clear the file state after upload
      // setFile(null);
    }
  };

  const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6">Image Upload</h1>
        <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded inline-block">
          Choose a File
        </label>
        <input id="fileInput" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        {file && (
          <div className="mt-4">
            <p className="text-gray-600">Selected Image:</p>
            <img src={imageUrl ?? ''} alt="Selected" className="mt-2 max-w-full h-auto rounded" />
          </div>
        )}
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleUpload}
          disabled={uploading || !file}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {imageUrl && (
          <div className="mt-4">
            <label htmlFor="imageUrlInput" className="text-gray-600">
              Image URL:
            </label>
            <input
              id="imageUrlInput"
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={imageUrl || ''}
              onChange={handleImageUrlChange}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
