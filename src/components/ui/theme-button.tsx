'use client';
import { useTheme } from 'next-themes';
import { Button } from './button';
import { Sun, Moon } from 'lucide-react';

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={'ghost'}
      className="rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
}
