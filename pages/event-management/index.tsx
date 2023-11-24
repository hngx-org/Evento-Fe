'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/event-management/event-overview');
  }, [router]);

  return null;
}
