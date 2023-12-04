import { toast } from 'react-toastify';
import AuthInstance from './AuthInstance';
import { UserProfile2, getAuthToken, getUserId } from './profileapi';
import axios from 'axios';

export interface UserProfile {
  email?: string;
  bio?: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
}

export interface UserSocials {
  websiteURL?: string;
  twitterURL?: string;
  facebookURL?: string;
  instagramURL?: string;
}

export interface socialsData {
  facebookURL?: string;
  instagramURL?: string;
  linkID?: string;
  twitterURL?: string;
  userID?: string;
  websiteURL?: string;
}

export interface preferences {
  theme: string;
  language: string;
  regionalSettings: boolean;
  timeZone: string;
}

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

//evento-qo6d.onrender.com/api/v1
const $AuthHttp = AuthInstance(BaseUrl);

export const getUserProfile = async (setData: React.Dispatch<React.SetStateAction<UserProfile>>) => {
  const authToken = getAuthToken();
  const userId = getUserId();

  try {
    const getUserData = await $AuthHttp.get(`/user/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const userData: UserProfile = getUserData?.data?.data;
    // console.log(userData);
    setData((prev) => ({
      ...prev,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData?.email,
      bio: userData?.bio,
      profileImage: userData?.profileImage,
    }));
  } catch (e: any) {
    toast.error('An error occurred while fetching user info');

    throw e?.response?.data || { message: e.message };
  }
};

export const getUserSocials = async (setSocialsData: React.Dispatch<React.SetStateAction<UserSocials>>) => {
  const authToken = getAuthToken();
  const userId = getUserId();

  try {
    const getUserData = await $AuthHttp.get(`/user/profile/social/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    // console.log(getUserData);
    const userData: socialsData = getUserData?.data?.data;
    // console.log(userData);
    setSocialsData((prev) => ({
      ...prev,
      websiteURL: userData?.websiteURL ? userData?.websiteURL : '',
      twitterURL: userData?.twitterURL ? userData?.twitterURL : '',
      instagramURL: userData?.instagramURL ? userData?.instagramURL : '',
      facebookURL: userData?.facebookURL ? userData?.facebookURL : '',
    }));
  } catch (e: any) {
    console.log(e);
    toast.error('An error occurred while fetching user socials.');
    throw e?.response?.data || { message: e.message };
  }
};

export const editUserAccount = async (
  data: UserProfile2,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  try {
    const editUserData = await $AuthHttp.patch(`/user/profile/edit/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    setLoading(false);
    if (editUserData.status === 200) {
      toast.success('profile updated');
    }
  } catch (err: any) {
    setLoading(false);
    toast.error(err.message);
  }
};

export const editUserSocials = async (data: UserSocials, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  try {
    const editUserData = await $AuthHttp.post(`/user/profile/social/add/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    //   console.log(editUserData);
    setLoading(false);
    if (editUserData.status === 200) {
      toast.success('profile updated');
    }
  } catch (err: any) {
    console.log(err);
    setLoading(false);
    toast.error(err.message);
  }
};

export const uploadUserImage = async (
  image: string | Blob,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  let data = new FormData();
  data.append('file', image);
  // console.log(image);
  // image.append('file', data);

  const config = {
    method: 'post',
    url: `/user/profile/image/upload/${userId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'multipart/form-data',
      // Accept: 'application/json',
    },
    data: image,
  };
  try {
    const editUserData = await axios.post(`${BaseUrl}/user/profile/image/upload/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // console.log(editUserData);
    setLoading(false);
    if (editUserData.status === 200) {
      toast.success('profile updated');
    }
  } catch (err: any) {
    // console.log(err);
    setLoading(false);
    toast.error(err.message);
  }
};

export const deleteUserAccount = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  setSuccess(false);
  try {
    const deleteUserData = await $AuthHttp.delete(`/user/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    //   console.log(deleteUserData);
    setLoading(false);
    setSuccess(true);
    if (deleteUserData.status === 200) {
      toast.success('Account deleted successfully');
    }
  } catch (err: any) {
    console.log(err);
    setLoading(false);
    toast.error(err.message);
  }
};

export const updateUserPreferences = async (
  data: preferences,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  try {
    const editUserData = await $AuthHttp.post(`/user/profile/preferences/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    //   console.log(editUserData);
    setLoading(false);
    if (editUserData.status === 200) {
      toast.success('preferences updated');
    }
  } catch (err: any) {
    console.log(err);
    setLoading(false);
    toast.error(err.message);
  }
};

export const enable2fa = async (email: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  try {
    const editUserData = await $AuthHttp.post(
      `/generate-otp/${userId}`,
      { email: email },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    // console.log(editUserData);
    setLoading(false);
    if (editUserData.status === 200) {
      toast.success('verification code sent successfully');
    }
  } catch (err: any) {
    console.log(err);
    setLoading(false);
    toast.error(err.message);
  }
};

export const changePassword = async (
  data: { oldPassword: string; newPassword: string },
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const authToken = getAuthToken();
  const userId = getUserId();
  setLoading(true);
  try {
    const editUserData = await $AuthHttp.post(`user/password/change/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    // console.log(editUserData);
    setLoading(false);
    if (editUserData.status === 200) {
      toast.success('An email has been sent for confirmation');
    }
  } catch (err: any) {
    console.log(err);
    setLoading(false);
    toast.error(err.message);
  }
};
