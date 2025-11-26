'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import FallbackLoading from '../FallbackLoading';

const AuthProtectionWrapper = ({ children }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate authentication check for frontend-only deployment
  useEffect(() => {
    // In a real app, this would check for a valid session/token
    // For this frontend-only version, we'll simulate authentication
    const checkAuth = () => {
      // Simulate a small delay to mimic network request
      setTimeout(() => {
        // For demo purposes, we'll consider the user authenticated
        setIsAuthenticated(true);
        setIsLoading(false);
      }, 100);
    };

    checkAuth();
  }, []);

  // For public routes, don't redirect
  const publicRoutes = ['/auth/sign-in', '/auth/sign-up', '/auth/reset-pass'];
  const isPublicRoute = publicRoutes.includes(pathname);

  if (isLoading && !isPublicRoute) {
    return <FallbackLoading />;
  }

  // If not authenticated and not on a public route, redirect to sign-in
  if (!isAuthenticated && !isPublicRoute) {
    push(`/auth/sign-in?redirectTo=${pathname}`);
    return <FallbackLoading />;
  }

  return <Suspense>{children}</Suspense>;
};

export default AuthProtectionWrapper;