export function getStoredAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken') as string | null;
  }
  return null;
}

export function getStoredUserId(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('userId') as string | null;
  }
  return null;
}
