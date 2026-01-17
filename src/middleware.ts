import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple middleware - we use cookie-based locale, no URL prefix
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
