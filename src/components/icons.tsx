import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c2.21 0 4.2-.9 5.65-2.35" />
      <path d="M12 8v4h4" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18.37 7.63L12 12l6.37 4.37" />
      <path d="M19.07 9.07a2.5 2.5 0 00-3.54-3.54" />
      <path d="M19.07 14.93a2.5 2.5 0 01-3.54 3.54" />
    </svg>
  );
}
