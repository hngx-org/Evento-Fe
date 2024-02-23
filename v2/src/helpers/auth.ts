export function CheckAuthFromLocalStorage(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authenticated') as string | null;
  }
  return null;
}
