import { SvgIconProps } from "@/types/root";

export const LocalMakersIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_920)">
        <path
          d="M32 27.5C35.3137 27.5 38 24.8137 38 21.5C38 18.1863 35.3137 15.5 32 15.5C28.6863 15.5 26 18.1863 26 21.5C26 24.8137 28.6863 27.5 32 27.5Z"
          stroke="#F0B323"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <path
          d="M32 28V46"
          stroke="#F0B323"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.0001 40H20.0001L12.0001 52H52.0001L44.0001 40H40.0001"
          stroke="#F0B323"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_920">
          <rect width={64} height={64} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
