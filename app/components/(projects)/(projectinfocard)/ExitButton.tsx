import React from "react";

type Props = {
  setToggleDisplay: (value: boolean) => void;
};

const ExitButton = ({ setToggleDisplay }: Props) => {
  return (
    <div
      className="custom-mouse-pointer"
      onClick={() => setToggleDisplay(false)}
    >
      <svg
        className="md:hidden"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.393799"
          y="18.4554"
          width="25.4693"
          height="3.2653"
          rx="1.63265"
          transform="rotate(-46.4367 0.393799 18.4554)"
          fill="#181818"
        />
        <rect
          x="2.25031"
          y="0.393677"
          width="25.4693"
          height="3.2653"
          rx="1.63265"
          transform="rotate(43.5633 2.25031 0.393677)"
          fill="#181818"
        />
      </svg>

      <svg
        className="hidden md:block"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.603027"
          y="28.2599"
          width="39"
          height="5"
          rx="2.5"
          transform="rotate(-46.4367 0.603027 28.2599)"
          fill="#181818"
        />
        <rect
          x="3.4458"
          y="0.602844"
          width="39"
          height="5"
          rx="2.5"
          transform="rotate(43.5633 3.4458 0.602844)"
          fill="#181818"
        />
      </svg>
    </div>
  );
};

export default ExitButton;
