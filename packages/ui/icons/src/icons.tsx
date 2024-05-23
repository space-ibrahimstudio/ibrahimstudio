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

export const ISImgUpload: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.5 5H17.5V12H19.5V5C19.5 3.897 18.603 3 17.5 3H4.5C3.397 3 2.5 3.897 2.5 5V17C2.5 18.103 3.397 19 4.5 19H12.5V17H4.5V5Z"
          fill={fill}
        />
        <path d="M8.5 11L5.5 15H16.5L12.5 9L9.5 13L8.5 11Z" fill={fill} />
        <path d="M17.5 14H19.5V17H22.5V19H19.5V22H17.5V19H14.5V17H17.5V14Z" fill={fill} />
      </svg>
    </div>
  );
};

export const ISHome: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6431 8.77602L22.9941 11.9839C23.2791 12.2567 23.289 12.7088 23.0162 12.9938C22.7434 13.2788 22.2912 13.2887 22.0062 13.0159L21.0716 12.1212V21.0714C21.0716 21.4503 20.9211 21.8136 20.6532 22.0816C20.3852 22.3495 20.0219 22.5 19.6431 22.5H15.3573C14.9628 22.5 14.643 22.1802 14.643 21.7858V15.7142C14.643 15.6195 14.6053 15.5287 14.5384 15.4617C14.4714 15.3947 14.3806 15.3571 14.2858 15.3571H10.7143C10.6196 15.3571 10.5288 15.3947 10.4618 15.4617C10.3948 15.5287 10.3572 15.6195 10.3572 15.7142V21.7858C10.3572 22.1802 10.0374 22.5 9.64289 22.5H5.35712C4.97823 22.5 4.61486 22.3495 4.34696 22.0816C4.07905 21.8136 3.92853 21.4503 3.92853 21.0714V12.1203L2.99385 13.0149C2.70886 13.2877 2.2567 13.2779 1.98392 12.9929C1.71115 12.7079 1.72105 12.2557 2.00603 11.9829L11.5112 2.88498C11.8022 2.58975 12.199 2.49961 12.5024 2.5C12.8045 2.50039 13.2006 2.59084 13.4898 2.88581L16.0715 5.35721V3.92835C16.0715 3.53386 16.3913 3.21405 16.7858 3.21405H18.9287C19.3232 3.21405 19.6431 3.53386 19.6431 3.92835V8.77602ZM18.2144 7.40849V4.64264H17.5002V6.72473L18.2144 7.40849ZM12.5138 3.92913L19.6431 10.7537V21.0714H16.0715V15.7142C16.0715 15.2407 15.8834 14.7864 15.5485 14.4515C15.2136 14.1166 14.7594 13.9285 14.2858 13.9285H10.7143C10.2407 13.9285 9.78651 14.1166 9.45162 14.4515C9.11673 14.7864 8.9286 15.2407 8.9286 15.7142V21.0714H5.35712V10.7529L12.4863 3.92919C12.4907 3.92881 12.4955 3.92859 12.5006 3.92859C12.5052 3.9286 12.5097 3.92879 12.5138 3.92913Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISBell: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.93818 4.59518C10.2504 3.55782 11.1578 2.5 12.5014 2.5C13.8452 2.5 14.7511 3.55708 15.066 4.59264C15.0695 4.60033 15.0743 4.60741 15.0801 4.61361C15.0875 4.62141 15.0963 4.62763 15.1062 4.63188C15.8889 4.95468 16.8101 5.46972 17.5309 6.41212C18.2582 7.36314 18.7314 8.68344 18.7314 10.5259C18.7314 12.3628 18.925 13.3701 19.2103 14.0615C19.4605 14.6682 19.7897 15.0668 20.2584 15.6344C20.3265 15.7168 20.3975 15.8028 20.4716 15.8935C21.3346 16.9496 20.5206 18.4353 19.1915 18.4353H15.7271V19.0358C15.7271 19.9546 15.3621 20.8357 14.7124 21.4854C14.0628 22.135 13.1816 22.5 12.2629 22.5C11.3441 22.5 10.463 22.135 9.8133 21.4854C9.16363 20.8357 8.79865 19.9546 8.79865 19.0358V18.4353H5.81505C4.48858 18.4353 3.65996 16.9577 4.53034 15.8934C4.60446 15.8027 4.67563 15.7165 4.74369 15.6341L4.74418 15.6335C5.21248 15.0665 5.54201 14.6676 5.79247 14.0612C5.95676 13.6635 6.09082 13.1612 6.17524 12.4568C6.23759 11.9365 6.27286 11.3059 6.27325 10.5255C6.27331 8.68217 6.74591 7.36209 7.47319 6.41137C8.19463 5.46828 9.11719 4.95394 9.90082 4.63093C9.91013 4.62709 9.91852 4.62132 9.92542 4.61399C9.93031 4.60882 9.93437 4.60295 9.9375 4.5966L9.93818 4.59518ZM7.65892 10.5259C7.65892 9.98093 7.70606 9.50429 7.78847 9.08641C7.94736 8.28066 8.23743 7.69296 8.57376 7.25329C8.6424 7.16357 8.71389 7.0788 8.78777 6.99866C9.26994 6.47565 9.85546 6.14838 10.4295 5.91179C10.6201 5.83311 10.7919 5.71485 10.9334 5.56483C11.0749 5.41482 11.183 5.23647 11.2504 5.04158C11.2541 5.03078 11.2576 5.01989 11.2608 5.00893C11.4585 4.33072 11.968 3.88568 12.5014 3.88568C13.0348 3.88568 13.544 4.32984 13.7445 5.00997C13.7477 5.0209 13.7512 5.03175 13.7549 5.0425C13.8226 5.23641 13.9304 5.41389 14.0712 5.56343C14.2119 5.71297 14.3826 5.83123 14.5721 5.91051L14.5756 5.91196C15.2362 6.18414 15.9132 6.57801 16.4302 7.25393C16.9414 7.92231 17.3458 8.93181 17.3458 10.5259C17.3458 12.4414 17.5443 13.6567 17.9293 14.59C18.2645 15.4025 18.7329 15.9669 19.1977 16.5269C19.2649 16.6079 19.332 16.6888 19.3986 16.7703C19.4419 16.8232 19.4457 16.8785 19.4174 16.9345C19.391 16.9866 19.3279 17.0497 19.1915 17.0497H5.81504C5.67311 17.0497 5.60897 16.9843 5.58312 16.9336C5.56824 16.9045 5.56381 16.8762 5.56595 16.8526C5.56784 16.8318 5.57572 16.804 5.60321 16.7703C5.6701 16.6885 5.73748 16.6073 5.80494 16.5261C6.26952 15.9664 6.73778 15.4022 7.07318 14.5903C7.45867 13.6571 7.65798 12.4414 7.65892 10.5259ZM14.3414 18.4353H10.1843V19.0358C10.1843 19.5871 10.4033 20.1157 10.7931 20.5055C11.1829 20.8953 11.7116 21.1143 12.2629 21.1143C12.8141 21.1143 13.3428 20.8953 13.7326 20.5055C14.1224 20.1157 14.3414 19.5871 14.3414 19.0358V18.4353Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISSearch: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9443 2.50057C9.84339 2.48774 8.75092 2.69348 7.73013 3.10589C6.70935 3.5183 5.78055 4.12916 4.99755 4.9031C4.21454 5.67703 3.59289 6.59865 3.16862 7.61456C2.74434 8.63047 2.52588 9.72046 2.52588 10.8214C2.52588 11.9224 2.74434 13.0123 3.16862 14.0283C3.59289 15.0442 4.21454 15.9658 4.99755 16.7397C5.78055 17.5137 6.70935 18.1245 7.73013 18.5369C8.75092 18.9493 9.84339 19.1551 10.9443 19.1422C12.8473 19.1201 14.6761 18.4467 16.1329 17.2486L21.1611 22.2748C21.4616 22.5751 21.9486 22.575 22.2489 22.2746C22.5492 21.9742 22.5491 21.4872 22.2487 21.1868L17.2257 16.1658C18.4762 14.6734 19.1687 12.7828 19.1687 10.8214C19.1687 8.63123 18.3052 6.52936 16.7656 4.97167C15.226 3.41398 13.1343 2.52609 10.9443 2.50057ZM8.30639 4.53223C9.13846 4.19606 10.029 4.02835 10.9263 4.0388C12.7115 4.05961 14.4165 4.78336 15.6715 6.05308C16.9265 7.32281 17.6304 9.03612 17.6304 10.8214C17.6304 12.6067 16.9265 14.32 15.6715 15.5897C14.4165 16.8595 12.7115 17.5832 10.9263 17.604C10.029 17.6145 9.13846 17.4468 8.30639 17.1106C7.47432 16.7744 6.71722 16.2765 6.07896 15.6456C5.44071 15.0148 4.93398 14.2635 4.58814 13.4354C4.2423 12.6073 4.06422 11.7188 4.06422 10.8214C4.06422 9.92399 4.2423 9.0355 4.58814 8.2074C4.93398 7.3793 5.44071 6.62805 6.07896 5.99719C6.71722 5.36633 7.47432 4.86839 8.30639 4.53223Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISH1: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.4034 6.29032C5.4034 5.5777 4.8257 5 4.11308 5C3.40045 5 2.82275 5.5777 2.82275 6.29032V20.8065C2.82275 21.5191 3.40045 22.0968 4.11308 22.0968C4.8257 22.0968 5.4034 21.5191 5.4034 20.8065V14.8387H15.4034V20.8065C15.4034 21.5191 15.9811 22.0968 16.6937 22.0968C17.4063 22.0968 17.984 21.5191 17.984 20.8065V6.29032C17.984 5.5777 17.4063 5 16.6937 5C15.9811 5 15.4034 5.5777 15.4034 6.29032V12.2581H5.4034V6.29032Z"
          fill={fill}
        />
        <path
          d="M27.1776 12.5806C27.1776 12.1048 26.9157 11.6675 26.4961 11.443C26.0766 11.2185 25.5675 11.2431 25.1715 11.507L22.2683 13.4425C21.6754 13.8378 21.5151 14.6389 21.9104 15.2319C22.3057 15.8248 23.1068 15.985 23.6998 15.5897L24.5969 14.9916V23.7097C24.5969 24.4223 25.1746 25 25.8873 25C26.5999 25 27.1776 24.4223 27.1776 23.7097V12.5806Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISH2: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.90182 5C3.61454 5 4.19231 5.57777 4.19231 6.29049V12.259H14.1936V6.29049C14.1936 5.57777 14.7714 5 15.4841 5C16.1968 5 16.7746 5.57777 16.7746 6.29049V20.8085C16.7746 21.5212 16.1968 22.099 15.4841 22.099C14.7714 22.099 14.1936 21.5212 14.1936 20.8085V14.84H4.19231V20.8085C4.19231 21.5212 3.61454 22.099 2.90182 22.099C2.1891 22.099 1.61133 21.5212 1.61133 20.8085V6.29049C1.61133 5.57777 2.1891 5 2.90182 5Z"
          fill={fill}
        />
        <path
          d="M24.5136 13.4252C24.1492 13.3518 23.7706 13.4065 23.4418 13.58C23.113 13.7536 22.8543 14.0354 22.7094 14.3777C22.4316 15.0341 21.6743 15.3409 21.018 15.0631C20.3616 14.7853 20.0548 14.028 20.3326 13.3716C20.7094 12.4815 21.3821 11.7489 22.2368 11.2976C23.0916 10.8464 24.076 10.7042 25.0235 10.8951C25.971 11.0861 26.8235 11.5984 27.4367 12.3455C28.0494 13.092 28.3858 14.0287 28.389 14.9944C28.3922 15.8329 28.1416 16.6528 27.6702 17.3463C27.6591 17.3627 27.6476 17.3788 27.6357 17.3947L23.8709 22.419H27.0985C27.8112 22.419 28.389 22.9968 28.389 23.7095C28.389 24.4222 27.8112 25 27.0985 25H21.2913C20.8026 25 20.3558 24.7239 20.1372 24.2869C19.9185 23.8498 19.9655 23.3268 20.2586 22.9357L25.5498 15.8743C25.7193 15.616 25.8093 15.3133 25.808 15.0039L25.808 15.0022C25.807 14.6304 25.6776 14.2704 25.4418 13.9831C25.2059 13.6957 24.878 13.4987 24.5136 13.4252Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISBold: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.61554 5C6.9358 5 6.38477 5.55103 6.38477 6.23077V23.7692C6.38477 24.449 6.9358 25 7.61554 25H17.7694C19.3199 25 20.8069 24.3841 21.9032 23.2877C22.9996 22.1913 23.6155 20.7043 23.6155 19.1538C23.6155 17.6034 22.9996 16.1164 21.9032 15.02C21.4655 14.5823 20.9655 14.2211 20.4241 13.9452C21.2885 12.9647 21.7694 11.6994 21.7694 10.3846C21.7694 8.95653 21.2021 7.58693 20.1923 6.57712C19.1825 5.56731 17.8129 5 16.3848 5H7.61554ZM20.1627 21.5471C19.5279 22.1819 18.667 22.5385 17.7694 22.5385H8.8463V15.7692H17.7694C18.667 15.7692 19.5279 16.1258 20.1627 16.7606C20.7974 17.3953 21.154 18.2562 21.154 19.1538C21.154 20.0515 20.7974 20.9124 20.1627 21.5471ZM18.4517 8.31769C17.9035 7.7695 17.16 7.46154 16.3848 7.46154H8.8463V13.3077H16.3848C17.16 13.3077 17.9035 12.9997 18.4517 12.4515C18.9999 11.9034 19.3078 11.1599 19.3078 10.3846C19.3078 9.60937 18.9999 8.86587 18.4517 8.31769Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISItalic: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1132 7.5809L11.1671 22.4191H7.25854C6.54594 22.4191 5.96826 22.9968 5.96826 23.7094C5.96826 24.422 6.54594 24.9996 7.25854 24.9996H12.0673C12.0873 25.0001 12.1073 25.0001 12.1272 24.9996H16.9356C17.6482 24.9996 18.2259 24.422 18.2259 23.7094C18.2259 22.9968 17.6482 22.4191 16.9356 22.4191H13.8872L18.8333 7.5809H22.7419C23.4545 7.5809 24.0321 7.00323 24.0321 6.29063C24.0321 5.57803 23.4545 5.00035 22.7419 5.00035H17.9331C17.9131 4.99988 17.8931 4.99988 17.8732 5.00035H13.0648C12.3522 5.00035 11.7745 5.57803 11.7745 6.29063C11.7745 7.00323 12.3522 7.5809 13.0648 7.5809H16.1132Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISUnderline: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.11768 6.17647C9.11768 5.52672 8.59095 5 7.9412 5C7.29146 5 6.76473 5.52672 6.76473 6.17647V12.7941C6.76473 14.9783 7.63238 17.0729 9.1768 18.6173C10.7212 20.1618 12.8159 21.0294 15 21.0294C17.1842 21.0294 19.2788 20.1618 20.8233 18.6173C22.3677 17.0729 23.2353 14.9783 23.2353 12.7941V6.17647C23.2353 5.52672 22.7086 5 22.0589 5C21.4091 5 20.8824 5.52672 20.8824 6.17647V12.7941C20.8824 14.3542 20.2626 15.8504 19.1595 16.9536C18.0563 18.0567 16.5601 18.6765 15 18.6765C13.4399 18.6765 11.9437 18.0567 10.8406 16.9536C9.73742 15.8504 9.11768 14.3542 9.11768 12.7941V6.17647Z"
          fill={fill}
        />
        <path
          d="M5.29415 22.6471C4.6444 22.6471 4.11768 23.1738 4.11768 23.8235C4.11768 24.4733 4.6444 25 5.29415 25H24.7059C25.3557 25 25.8824 24.4733 25.8824 23.8235C25.8824 23.1738 25.3557 22.6471 24.7059 22.6471H5.29415Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISStrike: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.0011 7.35294C11.9428 7.35294 10.3423 9.06423 10.3423 10.5882C10.3423 11.238 9.81558 11.7647 9.16583 11.7647C8.51608 11.7647 7.98936 11.238 7.98936 10.5882C7.98936 7.23695 11.243 5 15.0011 5C17.9346 5 20.4738 6.31417 21.5191 8.47611C21.8019 9.06106 21.557 9.76455 20.9721 10.0474C20.3871 10.3302 19.6836 10.0853 19.4008 9.50036C18.8579 8.37759 17.3147 7.35294 15.0011 7.35294Z"
          fill={fill}
        />
        <path
          d="M4.11768 15C4.11768 14.3503 4.6444 13.8235 5.29415 13.8235H16.1198C16.1376 13.8231 16.1554 13.8231 16.1733 13.8235H24.7059C25.3557 13.8235 25.8824 14.3503 25.8824 15C25.8824 15.6497 25.3557 16.1765 24.7059 16.1765H21.0602C21.8442 16.9832 22.353 18.0405 22.353 19.4118C22.353 21.1095 21.387 22.5347 20.0499 23.4893C18.7106 24.4454 16.9211 25 15 25C13.079 25 11.2895 24.4454 9.95012 23.4893C8.61307 22.5347 7.64709 21.1095 7.64709 19.4118C7.64709 18.762 8.17381 18.2353 8.82356 18.2353C9.47331 18.2353 10 18.762 10 19.4118C10 20.1517 10.4182 20.9324 11.3173 21.5743C12.2141 22.2146 13.5129 22.6471 15 22.6471C16.4872 22.6471 17.7859 22.2146 18.6828 21.5743C19.5819 20.9324 20 20.1517 20 19.4118C20 18.5385 19.6389 17.9578 18.9594 17.4602C18.2443 16.9366 17.2213 16.5461 15.9776 16.1765H5.29415C4.6444 16.1765 4.11768 15.6497 4.11768 15Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISOl: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.97537 5L6.7247 5.2752C6.7247 5.2752 6.11884 5.8 5.72524 5.8V7.4C6.26924 7.4 6.64364 7.17813 6.9999 6.97547V10.6H8.5999V5H6.97537ZM10.9999 7.4V9H24.5999V7.4H10.9999ZM7.3999 12.2C7.13718 12.1997 6.87698 12.2513 6.6342 12.3517C6.39143 12.4521 6.17084 12.5994 5.98506 12.7852C5.79929 12.9709 5.65198 13.1915 5.55157 13.4343C5.45116 13.6771 5.39962 13.9373 5.3999 14.2V14.6H6.9999V14.2C6.9999 14.0283 7.22817 13.8 7.3999 13.8C7.57164 13.8 7.7999 14.0283 7.7999 14.2L7.72524 14.2747L5.6495 16.2747L5.3999 16.4997V17.8H9.3999V16.2H8.0239L8.7247 15.5003L8.82497 15.4256L8.79937 15.4C9.19937 15.0715 9.3999 14.584 9.3999 14.2C9.40018 13.9373 9.34864 13.6771 9.24823 13.4343C9.14782 13.1915 9.00052 12.9709 8.81474 12.7852C8.62897 12.5994 8.40838 12.4521 8.1656 12.3517C7.92282 12.2513 7.66263 12.1997 7.3999 12.2ZM10.9999 14.6V16.2H24.5999V14.6H10.9999ZM5.3999 19.4V21H6.49964L6.30017 21.3253L6.1999 21.5003V22.6H7.3999C7.57164 22.6 7.7999 22.8283 7.7999 23C7.7999 23.1717 7.57164 23.4 7.3999 23.4H5.3999V25H7.3999C7.66263 25.0003 7.92282 24.9487 8.1656 24.8483C8.40838 24.7479 8.62897 24.6006 8.81474 24.4148C9.00052 24.2291 9.14782 24.0085 9.24823 23.7657C9.34864 23.5229 9.40018 23.2627 9.3999 23C9.3999 22.1968 8.8559 21.6443 8.17537 21.3253L8.49964 20.7749L8.5999 20.5755V19.4H5.3999ZM10.9999 21.8V23.4H24.5999V21.8H10.9999Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISUl: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.54541 5V10.4545H9.99996V5H4.54541ZM6.36359 6.81818H8.18177V8.63636H6.36359V6.81818ZM11.8181 6.81818V8.63636H25.4545V6.81818H11.8181ZM4.54541 12.2727V17.7273H9.99996V12.2727H4.54541ZM6.36359 14.0909H8.18177V15.9091H6.36359V14.0909ZM11.8181 14.0909V15.9091H25.4545V14.0909H11.8181ZM4.54541 19.5455V25H9.99996V19.5455H4.54541ZM6.36359 21.3636H8.18177V23.1818H6.36359V21.3636ZM11.8181 21.3636V23.1818H25.4545V21.3636H11.8181Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISPict: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.27295 5V25H27.7275V5H2.27295ZM4.09113 6.81818H25.9093V19.4606L21.1093 14.6303L20.4548 13.977L16.336 18.097L11.1081 12.8121L10.4548 12.1588L4.09113 18.5224V6.81818ZM22.2729 8.63636C21.7907 8.63636 21.3283 8.82792 20.9873 9.1689C20.6463 9.50987 20.4548 9.97233 20.4548 10.4545C20.4548 10.9368 20.6463 11.3992 20.9873 11.7402C21.3283 12.0812 21.7907 12.2727 22.2729 12.2727C22.7552 12.2727 23.2176 12.0812 23.5586 11.7402C23.8996 11.3992 24.0911 10.9368 24.0911 10.4545C24.0911 9.97233 23.8996 9.50987 23.5586 9.1689C23.2176 8.82792 22.7552 8.63636 22.2729 8.63636ZM10.4548 14.7455L18.8063 23.1818H4.09113V21.1091L10.4548 14.7455ZM20.4548 16.5636L25.9093 22.0182V23.1818H21.3917L17.6136 19.3758L20.4548 16.5636Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ISLink: React.FC<ISIcon> = ({ size, color }) => {
  const fill = color ? color : "currentColor";
  const iconstyle = { width: size, height: size };

  return (
    <div className={s.isIcon} style={iconstyle}>
      <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5111 3.5C19.7204 3.49902 18.9375 3.65467 18.2074 3.95799C17.4773 4.2613 16.8145 4.70626 16.2573 5.26717L14.8505 6.674C14.2899 7.23138 13.8451 7.8942 13.5418 8.62426C13.2385 9.35431 13.0827 10.1372 13.0833 10.9277C13.0833 11.6867 13.229 12.4278 13.5024 13.1127L15.0601 11.5564C14.9587 10.9194 15.0089 10.2674 15.2065 9.65337C15.404 9.03933 15.7435 8.48047 16.1973 8.02206L17.6054 6.61523C17.9871 6.23422 18.4403 5.93224 18.9389 5.72658C19.4374 5.52091 19.9717 5.4156 20.5111 5.41667C21.5997 5.41667 22.6143 5.84345 23.386 6.61523C24.15 7.3829 24.5789 8.42188 24.5789 9.50492C24.5789 10.588 24.15 11.6269 23.386 12.3946L21.9779 13.8014C21.5964 14.1823 21.1434 14.4842 20.6451 14.6898C20.1467 14.8955 19.6127 15.0009 19.0736 15C18.8589 15 18.6493 14.977 18.4436 14.9399L16.8873 16.4976C17.9749 16.9264 19.1642 17.0273 20.3085 16.7877C21.4528 16.5481 22.5018 15.9786 23.326 15.1495L24.7328 13.7427C25.2934 13.1853 25.7382 12.5225 26.0415 11.7924C26.3448 11.0624 26.5006 10.2795 26.5 9.48895C26.5002 8.7032 26.3441 7.92527 26.0407 7.20046C25.7373 6.47565 25.2927 5.81846 24.7328 5.26717C24.1816 4.70685 23.5242 4.26198 22.7992 3.95856C22.0741 3.65514 21.2971 3.49926 20.5111 3.5ZM18.1433 10.4767L10.4767 18.1433L11.8541 19.5233L19.5208 11.8567L18.1433 10.4767ZM10.9264 13.0833C10.1361 13.0825 9.35333 13.2383 8.62346 13.5416C7.89359 13.8449 7.23102 14.2897 6.674 14.8505L5.26717 16.2573C4.70655 16.8147 4.26177 17.4775 3.95848 18.2076C3.65518 18.9376 3.49936 19.7205 3.5 20.5111C3.5 22.1121 4.1325 23.5994 5.26717 24.7328C5.81824 25.293 6.47539 25.7378 7.20025 26.0412C7.92511 26.3446 8.70315 26.5006 9.48894 26.5C10.2796 26.5011 11.0625 26.3454 11.7927 26.0421C12.5228 25.7388 13.1855 25.2938 13.7427 24.7328L15.1495 23.326C15.71 22.7688 16.1547 22.1062 16.4579 21.3763C16.7612 20.6465 16.9171 19.8639 16.9167 19.0736C16.9167 18.3133 16.771 17.5722 16.4976 16.8873L14.9399 18.4436C15.0413 19.0806 14.9911 19.7326 14.7935 20.3466C14.596 20.9607 14.2565 21.5195 13.8027 21.9779L12.3933 23.3861C12.0115 23.7668 11.5583 24.0686 11.0597 24.274C10.5611 24.4795 10.0269 24.5846 9.48767 24.5833C8.95292 24.5841 8.42335 24.4786 7.92978 24.2728C7.4362 24.0671 6.98848 23.7652 6.61267 23.3848C5.84869 22.6171 5.41981 21.5781 5.41981 20.4951C5.41981 19.412 5.84869 18.3731 6.61267 17.6054L8.02078 16.1986C8.40267 15.8174 8.85601 15.5153 9.35484 15.3097C9.85366 15.104 10.3882 14.9988 10.9277 15C11.1398 15 11.3494 15.023 11.5564 15.0601L13.1127 13.5024C12.4176 13.2255 11.6748 13.0832 10.9264 13.0833Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
