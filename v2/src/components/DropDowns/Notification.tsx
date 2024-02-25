import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NotificationsProps, Notification } from '@/types';
import { Activity } from 'iconsax-react';
import { useStateCtx } from '@/context/StateCtx';

const NotificationDropDown = () => {
  const { OpenNotification, setOpenNotification } = useStateCtx();
  return <div>Notification</div>;
};

export default NotificationDropDown;
