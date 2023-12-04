import AuthInstance from './AuthInstance';
import { toast } from 'react-toastify';
import axios, { AxiosResponse } from 'axios';
import { getStoredAuthToken, getStoredUserId } from './getToken';
import { UploadParams, UploadResponse } from '@/@types';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

// export const uploadCreateeventImage = async (data: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
//   const authToken = getAuthToken();
//   const userId = getUserId();
//   setLoading(true);
//   //   console.log(data);
//   let image = new FormData();
//   image.append('file', data);

//   const config = {
//     method: 'post',
//     url: `events/upload${userId}`,
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//       'Content-Type': 'multipart/form-data',
//       Accept: 'application/json',
//     },
//     data: image,
//   };
//   try {
//     const editUserData = await $AuthHttp(config);

//     // console.log(editUserData);
//     setLoading(false);
//     if (editUserData.status === 200) {
//       toast.success('profile updated');
//     }
//   } catch (err: any) {
//     console.log(err);
//     setLoading(false);
//     toast.error(err.message);
//   }
// };

export const uploadImage = async ({ file }: UploadParams): Promise<UploadResponse> => {
  const authToken = getStoredAuthToken();
  const userId = getStoredUserId();

  if (!authToken || !userId) {
    toast.error('Authentication data not available.');
    throw new Error('Authentication data not available.');
  }

  const formData = new FormData();
  formData.append('event-image', file, 'filename.jpg');

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
      'User-Id': userId,
    },
  };

  try {
    const response: AxiosResponse<UploadResponse> = await $AuthHttp.post('/events/upload', formData, config);

    toast.success('Image uploaded successfully!');
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    toast.error('Error uploading image. Please try again.');
    throw error;
  }
};
