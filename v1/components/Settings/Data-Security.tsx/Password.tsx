import React, { useState } from 'react';
import InputB from '@/components/UserProfile/Input';
import { Input } from '@/components/ui/NewInput';
import Button from '@/components/ui/NewButton';
import { Eye, EyeSlash } from 'iconsax-react';
import PasswordPopover from '@/components/ui/PasswordPopover';
import { changePassword } from '@/http/settingsapi';

function Password() {
  const [loading, setLoading] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<string[]>(['password', 'password', 'password']);
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`flex flex-col gap-9 mt-4`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Password</h3>
        <p className="text-Grey-G100 text-sm">
          Set a password or reset it if forgotten. You will receive a code via email to confirm the new password
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Old Password:
          </label>
          <Input
            type={defaultInpType[0]}
            placeholder="Old Password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            rightIcon={
              defaultInpType[0] === 'text' ? (
                <Eye color="#777" onClick={() => setDefaultInpType((prev) => ['password', ...prev.slice(1)])} />
              ) : (
                <EyeSlash color="#777" onClick={() => setDefaultInpType((prev) => ['text', ...prev.slice(1)])} />
              )
            }
            className="mt-1 p-2 w-full font-medium text-black-main border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            New Password:
          </label>
          <PasswordPopover password={formData.newPassword}>
            <Input
              type={defaultInpType[1]}
              placeholder="New Password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              rightIcon={
                defaultInpType[1] === 'text' ? (
                  <Eye color="#777" onClick={() => setDefaultInpType((prev) => [prev[0], 'password', prev[2]])} />
                ) : (
                  <EyeSlash color="#777" onClick={() => setDefaultInpType((prev) => [prev[0], 'text', prev[2]])} />
                )
              }
              className="mt-1 p-2 w-full font-medium text-black-main border rounded-md"
            />
          </PasswordPopover>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Confirm New Password:
          </label>
          <Input
            type={defaultInpType[2]}
            placeholder="Confirm New Password"
            id="cnewPassword"
            name="cnewPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            rightIcon={
              defaultInpType[2] === 'text' ? (
                <Eye color="#777" onClick={() => setDefaultInpType((prev) => [prev[0], prev[1], 'password'])} />
              ) : (
                <EyeSlash color="#777" onClick={() => setDefaultInpType((prev) => [prev[0], prev[1], 'text'])} />
              )
            }
            className="mt-1 p-2 w-full font-medium text-black-main border rounded-md"
          />
        </div>
        <div className="flex justify-end mt-1">
          <Button
            type="button"
            title="password-button"
            className="text-white-N0 bg-primary-100 rounded-lg font-bold text-sm py-3 px-[1.12rem]"
            isLoading={loading}
            onClick={() => changePassword(formData, setLoading)}
          >
            Set New Password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Password;
