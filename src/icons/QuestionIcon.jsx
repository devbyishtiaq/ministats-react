import * as React from "react";

function QuestionIcon(props) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect width="36" height="36" rx="8" fill="#F7AD0B" />
      <g clipPath="url(#clip0_823_11809)">
        <path
          d="M17.5 8C12.81 8 9 11.81 9 16.5C9 21.19 12.81 25 17.5 25H18V28C22.86 25.66 26 21 26 16.5C26 11.81 22.19 8 17.5 8ZM18.5 22.5H16.5V20.5H18.5V22.5ZM18.9 17.72C18.89 17.73 18.88 17.75 18.87 17.77C18.82 17.85 18.77 17.93 18.73 18.01C18.71 18.04 18.7 18.08 18.69 18.12C18.66 18.19 18.63 18.26 18.61 18.33C18.54 18.54 18.51 18.76 18.51 19.01H16.5C16.5 18.5 16.58 18.07 16.7 17.71C16.7 17.7 16.7 17.69 16.71 17.68C16.72 17.64 16.75 17.62 16.76 17.58C16.82 17.42 16.89 17.28 16.98 17.14C17.01 17.09 17.05 17.04 17.08 16.99C17.11 16.95 17.13 16.9 17.16 16.87L17.17 16.88C18.01 15.78 19.38 15.44 19.49 14.2C19.58 13.22 18.88 12.27 17.92 12.07C16.88 11.85 15.94 12.46 15.62 13.35C15.48 13.71 15.15 14 14.74 14H14.54C13.94 14 13.5 13.41 13.67 12.83C14.22 11.01 16.04 9.74 18.1 10.04C19.79 10.29 21.14 11.68 21.43 13.37C21.87 15.81 19.8 16.4 18.9 17.72Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_823_11809">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default QuestionIcon;
