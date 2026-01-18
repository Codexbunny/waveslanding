'use client';

import { ReactNode } from 'react';
import CursorFollower from './CursorFollower';

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <CursorFollower />
      {children}
    </>
  );
}
