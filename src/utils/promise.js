// Simplified promise utilities for frontend-only deployment
export const sleep = (ms = 0) => {
  // For frontend-only deployment, we don't need artificial delays
  return new Promise(resolve => setTimeout(resolve, ms));
};