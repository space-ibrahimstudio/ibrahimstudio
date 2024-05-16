import React from "react";
import s from "./icons.module.css";

interface ISChevronProps {
  width: string;
  height: string;
  color?: string;
  direction?: "left" | "up" | "down" | "right";
}

export const ISChevron: React.FC<ISChevronProps> = ({ width, height, color, direction }) => {
  const fill = color || "currentColor";
  let rotation = 0;

  switch (direction) {
    case "left":
      rotation = 180;
      break;
    case "up":
      rotation = -90;
      break;
    case "down":
      rotation = 90;
      break;
    case "right":
      rotation = 0;
      break;
    default:
      rotation = 0;
      break;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        id="chevron-right-icon"
        d="M0.74814 11.3463C0.417338 11.6765 0.417279 12.212 0.748009 12.5423C1.07874 12.8726 1.61502 12.8726 1.94582 12.5424L7.109 7.38811C7.26788 7.2295 7.35714 7.01437 7.35714 6.79004C7.35714 6.56571 7.26788 6.35057 7.109 6.19197L1.94582 1.03768C1.61502 0.707443 1.07874 0.7075 0.748009 1.03781C0.417279 1.36811 0.417338 1.90358 0.74814 2.23381L5.31222 6.79004L0.74814 11.3463Z"
        fill={fill}
      />
    </svg>
  );
};

interface ISIconProps {
  width: string;
  height: string;
  color?: string;
}

export const ISEyeOpen: React.FC<ISIconProps> = ({ width, height, color }) => {
  const fill = color || "currentColor";

  return (
    <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="eye-open">
        <g id="Union">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4998 5.62243C8.55496 5.62243 7.64883 5.97848 6.98073 6.61225C6.31263 7.24602 5.9373 8.10559 5.9373 9.00188C5.9373 9.89816 6.31263 10.7577 6.98073 11.3915C7.64883 12.0253 8.55496 12.3813 9.4998 12.3813C10.4446 12.3813 11.3508 12.0253 12.0189 11.3915C12.687 10.7577 13.0623 9.89816 13.0623 9.00188C13.0623 8.10559 12.687 7.24602 12.0189 6.61225C11.3508 5.97848 10.4446 5.62243 9.4998 5.62243ZM8.24027 7.80706C8.57431 7.49018 9.02738 7.31216 9.4998 7.31216C9.97222 7.31216 10.4253 7.49018 10.7593 7.80706C11.0934 8.12395 11.281 8.55374 11.281 9.00188C11.281 9.45002 11.0934 9.87981 10.7593 10.1967C10.4253 10.5136 9.97222 10.6916 9.4998 10.6916C9.02738 10.6916 8.57431 10.5136 8.24027 10.1967C7.90622 9.87981 7.71855 9.45002 7.71855 9.00188C7.71855 8.55374 7.90622 8.12395 8.24027 7.80706Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 1.11646C5.90614 1.11646 3.51288 2.75886 2.04472 4.53845C1.31653 5.42111 0.812586 6.33923 0.489055 7.11609C0.177286 7.86471 0 8.56244 0 9.00183C0 9.44122 0.177286 10.139 0.489055 10.8876C0.812586 11.6644 1.31653 12.5826 2.04472 13.4652C3.51288 15.2448 5.90614 16.8872 9.5 16.8872C13.0939 16.8872 15.4871 15.2448 16.9553 13.4652C17.6835 12.5826 18.1874 11.6644 18.5109 10.8876C18.8227 10.139 19 9.44122 19 9.00183C19 8.56244 18.8227 7.86471 18.5109 7.11609C18.1874 6.33923 17.6835 5.42111 16.9553 4.53845C15.4871 2.75886 13.0939 1.11646 9.5 1.11646ZM1.78125 9.00183C1.78125 8.87798 1.86373 8.41403 2.14571 7.73694C2.41593 7.08809 2.83972 6.3165 3.44747 5.57984C4.65118 4.12079 6.56261 2.80618 9.5 2.80618C12.4374 2.80618 14.3488 4.12079 15.5525 5.57984C16.1603 6.3165 16.5841 7.08809 16.8543 7.73694C17.1363 8.41403 17.2188 8.87798 17.2188 9.00183C17.2188 9.12568 17.1363 9.58963 16.8543 10.2667C16.5841 10.9156 16.1603 11.6872 15.5525 12.4238C14.3488 13.8829 12.4374 15.1975 9.5 15.1975C6.56261 15.1975 4.65118 13.8829 3.44747 12.4238C2.83972 11.6872 2.41593 10.9156 2.14571 10.2667C1.86373 9.58963 1.78125 9.12568 1.78125 9.00183Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

export const ISEyeSlash: React.FC<ISIconProps> = ({ width, height, color }) => {
  const fill = color || "currentColor";

  return (
    <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="eye-slash">
        <g id="Union">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7391 0.247454C19.087 0.577393 19.087 1.11233 18.7391 1.44227L1.52039 17.7763C1.17258 18.1062 0.608669 18.1062 0.260858 17.7763C-0.0869526 17.4463 -0.0869526 16.9114 0.260858 16.5814L2.7377 14.2319C1.77928 13.2901 1.11578 12.2427 0.685219 11.3368C0.239844 10.3997 0 9.51955 0 9.01176C0 8.57237 0.177286 7.87464 0.489055 7.12602C0.812586 6.34916 1.31653 5.43104 2.04472 4.54838C3.51288 2.76879 5.90614 1.12639 9.5 1.12639C11.7347 1.12639 13.5188 1.76314 14.9066 2.68829L17.4796 0.247454C17.8274 -0.0824847 18.3913 -0.0824847 18.7391 0.247454ZM6.43103 10.7283L3.99747 13.0368C3.22037 12.2672 2.67011 11.402 2.30906 10.6423C1.90478 9.79171 1.78125 9.1686 1.78125 9.01176C1.78125 8.88791 1.86373 8.42396 2.14571 7.74687C2.41593 7.09803 2.83972 6.32643 3.44747 5.58977C4.65118 4.13072 6.56261 2.81611 9.5 2.81611C11.2096 2.81611 12.5593 3.2597 13.6232 3.90574L11.3093 6.10073C10.7656 5.79667 10.1417 5.63236 9.49981 5.63236C8.55498 5.63236 7.64884 5.98841 6.98074 6.62219C6.31263 7.25596 5.9373 8.11554 5.9373 9.01182C5.9373 9.62069 6.1105 10.2126 6.43103 10.7283ZM7.77929 9.44934L9.96103 7.37971C9.81187 7.34177 9.65691 7.32209 9.49981 7.32209C9.02739 7.32209 8.57432 7.50011 8.24027 7.817C7.90622 8.13389 7.71855 8.56368 7.71855 9.01182C7.71855 9.16085 7.7393 9.30785 7.77929 9.44934Z"
            fill={fill}
          />
          <path
            d="M18.1671 6.38749C17.9509 5.96839 17.4175 5.79492 16.9757 6.00005C16.5339 6.20517 16.351 6.7112 16.5672 7.1303C16.8064 7.59377 16.9734 8.02044 17.0792 8.3645C17.1907 8.72668 17.2188 8.94707 17.2188 9.01186C17.2188 9.13571 17.1363 9.59966 16.8543 10.2767C16.5841 10.9256 16.1603 11.6972 15.5525 12.4339C14.3488 13.8929 12.4374 15.2075 9.5 15.2075L9.49522 15.2075C8.77247 15.2112 8.05242 15.1238 7.35395 14.9475C6.8786 14.8276 6.39075 15.0959 6.26431 15.5468C6.13786 15.9977 6.4207 16.4605 6.89605 16.5805C7.74622 16.795 8.62264 16.9015 9.50235 16.8972C13.0949 16.8965 15.4874 15.2544 16.9553 13.4752C17.6835 12.5926 18.1874 11.6745 18.5109 10.8976C18.8227 10.149 19 9.45125 19 9.01186C19 8.71054 18.9183 8.3108 18.7892 7.8912C18.6546 7.45349 18.4505 6.93672 18.1671 6.38749Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

interface ISIcon {
  size?: string;
  color?: string;
}

export const ISUpload: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.7148 2.8007C13.6857 2.77091 13.6547 2.74294 13.622 2.71697C13.5606 2.668 13.4947 2.62732 13.4258 2.59493C13.297 2.53424 13.1532 2.50022 13.0015 2.5H13L12.9871 2.50008C12.8697 2.50156 12.7571 2.52329 12.6528 2.56193C12.5215 2.61043 12.3983 2.68742 12.2928 2.79289L7.29281 7.79289C6.90228 8.18342 6.90228 8.81658 7.29281 9.20711C7.68333 9.59763 8.3165 9.59763 8.70702 9.20711L12 5.91413V15.5C12 16.0523 12.4477 16.5 13 16.5C13.5523 16.5 14 16.0523 14 15.5V5.9143L17.2928 9.20711C17.6833 9.59763 18.3165 9.59763 18.707 9.20711C19.0975 8.81658 19.0975 8.18342 18.707 7.79289L13.7148 2.8007Z"
          fill={fill}
        />
        <path
          d="M4 14.5C4.55228 14.5 5 14.9477 5 15.5V19.5C5 19.7652 5.10536 20.0196 5.29289 20.2071C5.48043 20.3946 5.73478 20.5 6 20.5H20C20.2652 20.5 20.5196 20.3946 20.7071 20.2071C20.8946 20.0196 21 19.7652 21 19.5V15.5C21 14.9477 21.4477 14.5 22 14.5C22.5523 14.5 23 14.9477 23 15.5V19.5C23 20.2957 22.6839 21.0587 22.1213 21.6213C21.5587 22.1839 20.7957 22.5 20 22.5H6C5.20435 22.5 4.44129 22.1839 3.87868 21.6213C3.31607 21.0587 3 20.2957 3 19.5V15.5C3 14.9477 3.44772 14.5 4 14.5Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISCheck: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.6969 4.51935C12.4178 4.13052 14.2184 4.30841 15.83 5.0265C16.2886 5.23085 16.826 5.02472 17.0304 4.56611C17.2347 4.1075 17.0286 3.57007 16.57 3.36572C14.6003 2.48806 12.3996 2.27063 10.2962 2.74587C8.19278 3.22111 6.29935 4.36354 4.89828 6.0028C3.49721 7.64205 2.66356 9.69029 2.52168 11.842C2.37979 13.9938 2.93727 16.1338 4.11096 17.9428C5.28465 19.7518 7.01168 21.133 9.03447 21.8803C11.0573 22.6276 13.2674 22.701 15.3354 22.0896C17.4033 21.4782 19.2182 20.2147 20.5093 18.4875C21.8005 16.7604 22.4988 14.6621 22.5 12.5057V11.6688C22.5 11.1668 22.093 10.7597 21.5909 10.7597C21.0888 10.7597 20.6818 11.1668 20.6818 11.6688V12.5047C20.6808 14.269 20.1095 15.9858 19.0531 17.3989C17.9967 18.812 16.5118 19.8458 14.8198 20.3461C13.1279 20.8463 11.3196 20.7862 9.66457 20.1748C8.00956 19.5634 6.59654 18.4333 5.63624 16.9532C4.67595 15.4731 4.21983 13.7222 4.33592 11.9617C4.45201 10.2011 5.13408 8.52531 6.28041 7.18411C7.42674 5.8429 8.97591 4.90818 10.6969 4.51935Z"
          fill={fill}
        />
        <path
          d="M22.234 5.87498C22.5888 5.51978 22.5885 4.94417 22.2333 4.58933C21.8781 4.23448 21.3025 4.23477 20.9477 4.58997L12.4996 13.0465L10.4155 10.9624C10.0605 10.6074 9.48485 10.6074 9.12982 10.9624C8.7748 11.3174 8.7748 11.893 9.12982 12.248L11.8571 14.9753C12.0276 15.1458 12.259 15.2416 12.5001 15.2416C12.7413 15.2415 12.9726 15.1456 13.1431 14.975L22.234 5.87498Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISTrash: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.1818 10.6818C11.6839 10.6818 12.0909 11.0888 12.0909 11.5909V17.0455C12.0909 17.5475 11.6839 17.9545 11.1818 17.9545C10.6798 17.9545 10.2727 17.5475 10.2727 17.0455V11.5909C10.2727 11.0888 10.6798 10.6818 11.1818 10.6818Z"
          fill={fill}
        />
        <path
          d="M15.7274 17.0455V11.5909C15.7274 11.0888 15.3204 10.6818 14.8183 10.6818C14.3163 10.6818 13.9093 11.0888 13.9093 11.5909V17.0455C13.9093 17.5475 14.3163 17.9545 14.8183 17.9545C15.3204 17.9545 15.7274 17.5475 15.7274 17.0455Z"
          fill={fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.45471 6.13637V5.22727C8.45471 4.50395 8.74205 3.81026 9.25351 3.2988C9.76497 2.78734 10.4587 2.5 11.182 2.5H14.8183C15.5417 2.5 16.2354 2.78734 16.7468 3.2988C17.2583 3.81026 17.5456 4.50395 17.5456 5.22727V6.13637H19.3595L19.3638 6.13636L19.3681 6.13637H21.1819C21.684 6.13637 22.091 6.54339 22.091 7.04546C22.091 7.54754 21.684 7.95456 21.1819 7.95456H20.2729V19.7727C20.2729 20.496 19.9856 21.1897 19.4741 21.7012C18.9626 22.2127 18.2689 22.5 17.5456 22.5H8.45471C7.73139 22.5 7.0377 22.2127 6.52624 21.7012C6.01478 21.1897 5.72744 20.496 5.72744 19.7727V7.95456H4.81827C4.31619 7.95456 3.90918 7.54754 3.90918 7.04546C3.90918 6.54339 4.31619 6.13637 4.81827 6.13637H6.63223L6.63653 6.13636L6.64083 6.13637H8.45471ZM10.5392 4.58445C10.7096 4.41396 10.9409 4.31818 11.182 4.31818H14.8183C15.0595 4.31818 15.2907 4.41396 15.4612 4.58445C15.6317 4.75494 15.7274 4.98617 15.7274 5.22727V6.13637H10.2729V5.22727C10.2729 4.98617 10.3687 4.75494 10.5392 4.58445ZM7.54562 7.95456V19.7727C7.54562 20.0138 7.6414 20.2451 7.81189 20.4156C7.98237 20.586 8.21361 20.6818 8.45471 20.6818H17.5456C17.7867 20.6818 18.018 20.586 18.1884 20.4156C18.3589 20.2451 18.4547 20.0138 18.4547 19.7727V7.95456H7.54562Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
