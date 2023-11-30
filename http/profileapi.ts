import { toast } from 'react-toastify';
import AuthInstance from './AuthInstance';
import { NextRouter } from 'next/router';

export interface UserProfile2 {
  userID?: string;
  email?: string;
  bio?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  profileImage?: string | Blob | File;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  slug?: string;
  role?: string;
  location?: string;
}

export interface UserProfile {
  userID: string;
  email: string;
  bio: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
  };
  profileImage: string | Blob | File;
  displayName: string;
  firstName: string;
  lastName: string;
  slug: string;
  role: string;
  location: string;
}

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

//evento-qo6d.onrender.com/api/v1
const $AuthHttp = AuthInstance(BaseUrl);

export const getAuthToken = () => {
  // rewrite to fetch id instead
  const authToken = localStorage.getItem('authToken');
  ('');
  return authToken;
};
export const getUserId = () => {
  // rewrite to fetch id instead
  const userID = localStorage.getItem('userId');
  ('');
  return userID;
};

export const getUserProfile = async (setData: React.Dispatch<React.SetStateAction<UserProfile>>) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  console.log(authToken);
  console.log(userId);

  try {
    const getUserData = await $AuthHttp.get(`/user/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log(getUserData?.data.data);
    setData(getUserData?.data.data);

    // return getUserData?.data;
  } catch (e: any) {
    toast.error('An error occurred during login.');

    throw e?.response?.data || { message: e.message };
  }
};

export const editUserProfile = async (
  data: UserProfile2,
  setReRoute: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const authToken = getAuthToken();
  const userId = getUserId();

  try {
    const editUserData = await $AuthHttp.patch(`/user/profile/edit/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log(editUserData.data.data);

    if (editUserData.status === 200) {
      toast.success('profile updated');
      setReRoute(true);
      return editUserData;
    }
  } catch (err: any) {
    toast.error(err.message);
  }
};

// export const postProfilePicture = async (image: Blob) => {
//   const authToken = getAuthToken();
//   const userId = getUserId();
//   try {
//     const response = await $AuthHttp.post(`/user/profile/image/upload/${userId}`, image);

//     if (response.status === 200) {
//       // Image successfully uploaded
//       console.log('Image uploaded successfully!');
//     } else {
//       // Handle other status codes
//       console.error('Error uploading image:', response.status, response.statusText);
//     }
//   } catch (error) {
//     // Handle network error
//     toast.error(`Network error: ${error}`);
//   }
// };
