"use client";
import React from "react";

type Props = {
  togglePostIt: () => void;
};

const PostItButton = ({ togglePostIt }: Props) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={() => togglePostIt()}
      width="220"
      height="183"
      viewBox="0 0 220 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M218.986 116.536L130.618 28.672L0.835346 82.8165L89.2193 172.244L218.986 116.536Z"
        fill="#5A4B89"
      />
      <path
        d="M218.986 116.536L89.2193 172.244L89.3166 181.63L219.087 126.312L218.986 116.536Z"
        fill="#5A4B89"
      />
      <path
        d="M89.2193 172.244L0.835346 82.8165L0.930643 92.0066L89.3166 181.63L89.2193 172.244Z"
        fill="#5A4B89"
      />
      <path
        d="M218.884 106.759L130.913 16.5448L0.744104 74.0173L89.0977 160.513L218.884 106.759Z"
        fill="#6A894B"
      />
      <path
        d="M218.884 106.759L89.0977 160.513L89.2193 172.244L218.986 116.536L218.884 106.759Z"
        fill="#6A894B"
      />
      <path
        d="M89.0977 160.513L0.744104 74.0173L0.835346 82.8165L89.2193 172.244L89.0977 160.513Z"
        fill="#6A894B"
      />
      <path
        d="M218.783 96.9827L130.371 4.81744L0.652868 65.2188L88.976 148.781L218.783 96.9827Z"
        fill="#FFAA75"
      />
      <path
        d="M218.783 96.9827L88.976 148.781L89.0977 160.513L218.884 106.759L218.783 96.9827Z"
        fill="#FFAA75"
      />
      <path
        d="M88.976 148.781L0.652868 65.2188L0.744104 74.0173L89.0977 160.513L88.976 148.781Z"
        fill="#FFAA75"
      />
      <path
        d="M218.682 87.2062L130.33 0.906846L0.563656 56.6155L88.8706 138.613L218.682 87.2062Z"
        fill="#F05D7E"
      />
      <path
        d="M218.682 87.2062L88.8706 138.613L88.976 148.781L218.783 96.9827L218.682 87.2062Z"
        fill="#F05D7E"
      />
      <path
        d="M88.8706 138.613L0.563656 56.6155L0.656923 65.6099L88.976 148.781L88.8706 138.613Z"
        fill="#F05D7E"
      />
      <path
        d="M62.3876 97.0364C62.3528 96.9912 62.3629 96.9637 62.4178 96.954C62.4747 96.9282 62.5184 96.9007 62.5488 96.8716C62.3369 96.8458 62.1371 96.7763 61.9493 96.6633C61.7493 96.5405 61.5372 96.4614 61.3131 96.4258C61.2803 96.3644 61.2403 96.3063 61.1933 96.2514C61.1605 96.19 61.2 96.1415 61.3118 96.106C60.9995 95.9122 60.7554 95.7103 60.5794 95.5003C60.4034 95.2903 60.2682 95.0771 60.1736 94.8606C60.0933 94.6377 60.0334 94.4132 59.9938 94.1871C59.9561 93.9448 59.9114 93.7057 59.8595 93.4699C59.963 93.3924 60.0535 93.3665 60.131 93.3924C60.1962 93.4085 60.2338 93.3762 60.2436 93.2955C60.3364 93.0855 60.3459 92.8981 60.2719 92.7333C60.1857 92.5589 60.0445 92.3941 59.8484 92.2391C59.6578 91.9289 59.4875 91.6172 59.3376 91.3038C59.1897 90.9743 59.0876 90.6545 59.0313 90.3444C58.9751 90.0342 58.9699 89.7467 59.0156 89.4818C59.0491 89.2072 59.153 88.9617 59.3272 88.7453C59.3793 88.5385 59.4934 88.3188 59.6696 88.0862C59.8601 87.8472 60.0953 87.6259 60.3755 87.4224C60.6576 87.2027 60.9836 87.0089 61.3535 86.8409C61.7112 86.6632 62.0833 86.5324 62.4698 86.4484C62.5654 86.4355 62.5958 86.4064 62.561 86.3612C62.514 86.3062 62.5189 86.2659 62.5758 86.24C63.3607 85.9751 64.1163 85.7845 64.8428 85.6682C65.5834 85.5455 66.3061 85.5148 67.0109 85.5762C67.6489 85.7441 68.3033 85.9428 68.9741 86.1722C69.6326 86.3919 70.2588 86.6568 70.8526 86.9669C71.4483 87.2609 71.9842 87.6049 72.4602 87.9991C72.9362 88.3932 73.3056 88.8358 73.5682 89.3268C73.6095 89.9794 73.44 90.598 73.0596 91.1827C72.6669 91.7578 72.1683 92.3199 71.5638 92.8691C70.9612 93.4021 70.2863 93.9222 69.5391 94.4294C68.8061 94.9301 68.1067 95.4309 67.4409 95.9316C67.786 96.1868 68.1414 96.4678 68.5071 96.7747C68.8606 97.072 69.1846 97.3902 69.4792 97.7294C69.7758 98.0524 70.0235 98.39 70.2224 98.7421C70.4356 99.0878 70.5673 99.4399 70.6177 99.7985C70.3209 99.918 70.0466 100.073 69.7949 100.264C69.5574 100.448 69.3484 100.619 69.1679 100.777C68.9928 100.781 68.8177 100.784 68.6426 100.787C68.494 100.794 68.3353 100.827 68.1665 100.889C68.0621 100.753 67.8663 100.651 67.5789 100.584C67.3057 100.509 67.0316 100.443 66.7565 100.385C66.4834 100.311 66.2519 100.225 66.0622 100.128C65.8744 100.015 65.8188 99.8647 65.8954 99.6774C65.6958 99.6612 65.5041 99.5804 65.3202 99.4351C65.4262 99.448 65.5218 99.4351 65.6072 99.3963C65.3581 99.2348 65.123 99.0135 64.902 98.7324C64.6952 98.4449 64.4731 98.1719 64.2359 97.9135C64.0006 97.6389 63.7391 97.4144 63.4513 97.2399C63.1512 97.0558 62.7967 96.9879 62.3876 97.0364ZM63.6341 91.1149C63.712 91.2473 63.7848 91.3668 63.8524 91.4735C63.922 91.5639 63.9783 91.6527 64.0214 91.74C64.0646 91.8272 64.1006 91.9177 64.1294 92.0113C64.1726 92.0986 64.2208 92.1987 64.2742 92.3118C64.3762 92.357 64.4883 92.3748 64.6104 92.3651C64.7325 92.3554 64.8446 92.3732 64.9466 92.4184C65.0599 92.2601 65.1978 92.1212 65.3602 92.0016C65.5104 91.8724 65.6728 91.7529 65.8475 91.6431C66.0221 91.5332 66.1906 91.4185 66.353 91.299C66.5155 91.1795 66.6605 91.0373 66.7881 90.8726C66.9157 90.7078 67.0688 90.5544 67.2474 90.4122C67.4279 90.2539 67.6014 90.0989 67.7677 89.947C67.9341 89.7952 68.0872 89.6418 68.2271 89.4867C68.3547 89.3219 68.4293 89.1507 68.451 88.9731C68.0925 88.9375 67.6528 88.9617 67.1319 89.0457C66.611 89.1297 66.1035 89.2686 65.6095 89.4625C65.1175 89.6401 64.6796 89.8695 64.296 90.1506C63.9265 90.4252 63.7059 90.7466 63.6341 91.1149ZM87.0884 85.4066C87.2213 85.5294 87.3764 85.6344 87.5539 85.7216C87.7314 85.8088 87.916 85.8928 88.1078 85.9736C88.3015 86.0382 88.4942 86.1109 88.6859 86.1916C88.8776 86.2724 89.0551 86.3596 89.2184 86.4533C89.4184 86.5761 89.6084 86.7263 89.7883 86.904C89.9559 87.072 90.1022 87.2496 90.2272 87.437C90.3399 87.6147 90.419 87.7924 90.4646 87.9701C90.4978 88.138 90.473 88.2866 90.39 88.4159C90.4114 88.6808 90.3412 88.9263 90.1792 89.1524C90.0172 89.3786 89.9011 89.6144 89.8309 89.8599C89.7602 89.9988 89.6436 90.128 89.4812 90.2476C89.333 90.3606 89.1777 90.4769 89.0153 90.5965C88.9324 90.7257 88.8271 90.8727 88.6995 91.0374C88.5596 91.1925 88.4126 91.3508 88.2586 91.5123C88.0922 91.6641 87.9136 91.8063 87.7228 91.9387C87.5196 92.0615 87.3266 92.1568 87.1436 92.2246C86.8516 92.5251 86.5178 92.7835 86.1419 93C85.7926 93.2196 85.2986 93.4135 84.66 93.5814C84.2091 93.8625 83.7141 94.0644 83.1751 94.1872C82.6502 94.3035 82.1129 94.3568 81.5631 94.3471C81.0153 94.3212 80.4662 94.2501 79.916 94.1338C79.3678 94.0014 78.8499 93.8399 78.3625 93.6493C77.5501 93.1485 76.9474 92.6365 76.5543 92.1131C76.149 91.5801 75.8638 91.0535 75.6988 90.5334C75.5358 89.9972 75.4583 89.4754 75.4664 88.9682C75.4623 88.4513 75.4562 87.9506 75.4481 87.466C75.558 87.4467 75.622 87.4176 75.6402 87.3788C75.6603 87.3239 75.6672 87.2674 75.6609 87.2092C75.6423 87.1414 75.6298 87.0784 75.6234 87.0202C75.6313 86.9556 75.6647 86.9023 75.7236 86.8603C75.6393 86.6697 75.6468 86.4985 75.7459 86.3467C75.847 86.1787 75.8687 86.001 75.8109 85.8136C75.9145 85.7361 75.9844 85.6586 76.0207 85.581C76.0571 85.5035 76.0802 85.4244 76.09 85.3436C76.1141 85.2564 76.1443 85.174 76.1806 85.0965C76.2047 85.0092 76.2614 84.9301 76.3507 84.859L76.1485 84.6991C76.3065 84.5053 76.3812 84.3341 76.3724 84.1855C76.3656 84.0207 76.3557 83.8269 76.3425 83.604C76.4583 83.5361 76.5518 83.486 76.6229 83.4537C76.7083 83.415 76.817 83.3504 76.9489 83.2599C76.8912 83.0725 76.8621 82.9256 76.8616 82.8189C76.8754 82.7059 76.9258 82.5686 77.0127 82.4071C77.2569 82.3877 77.4909 82.3424 77.7146 82.2714C77.9525 82.1938 78.2171 82.1729 78.5084 82.2084C78.6452 82.2988 78.7859 82.357 78.9306 82.3828C79.063 82.399 79.2025 82.4119 79.3492 82.4216C79.4836 82.4216 79.617 82.4297 79.7494 82.4458C79.896 82.4555 80.0387 82.4975 80.1775 82.5718C80.2466 82.5557 80.2761 82.5347 80.2658 82.5088C80.2697 82.4765 80.3063 82.4523 80.3754 82.4361C80.5897 82.5524 80.7559 82.6219 80.8741 82.6445C80.9801 82.6574 81.1411 82.714 81.3574 82.8141C81.4088 82.9433 81.4806 83.0709 81.5727 83.1969C81.6668 83.3068 81.6734 83.4182 81.5924 83.5313C81.664 83.6056 81.7414 83.6314 81.8248 83.6088C81.896 83.5765 81.9693 83.5814 82.0448 83.6234C82.1693 83.7041 82.2277 83.7768 82.2198 83.8414C83.0392 84.0643 83.8537 84.3276 84.6633 84.6313C85.4606 84.9253 86.269 85.1837 87.0884 85.4066ZM86.1674 87.9991C86.0895 87.8667 86.0503 87.7471 86.0499 87.6405C86.0637 87.5275 85.9919 87.3999 85.8346 87.2577C85.6654 87.2125 85.5492 87.1737 85.4859 87.1414C85.4104 87.0994 85.3114 87.03 85.1888 86.933C84.4959 86.7747 83.8211 86.5777 83.1645 86.3418C82.4957 86.0963 81.829 85.888 81.1645 85.7167C81.1851 85.7684 81.1843 85.8298 81.1622 85.9009C81.1401 85.9719 81.0496 85.9978 80.8907 85.9784C80.9603 86.0689 80.9841 86.1496 80.962 86.2207C80.9276 86.2821 80.8677 86.3321 80.7824 86.3709C80.6848 86.4 80.5739 86.4274 80.4498 86.4533C80.3277 86.463 80.2065 86.4646 80.0864 86.4581C79.9557 86.8684 79.8189 87.2738 79.676 87.6744C79.533 88.075 79.4757 88.4901 79.5039 88.9198C79.4715 88.965 79.4482 88.9909 79.4339 88.9973C79.4075 88.9941 79.3709 89.0183 79.3243 89.07C79.4433 89.3058 79.5156 89.54 79.5409 89.7726C79.5683 89.9891 79.6018 90.2104 79.6414 90.4365C79.681 90.6627 79.7542 90.8888 79.861 91.1149C79.9678 91.3411 80.1611 91.5737 80.4411 91.8127C80.8545 91.8386 81.2432 91.7917 81.6072 91.6722C81.9712 91.5527 82.3116 91.4057 82.6285 91.2312C82.9597 91.0503 83.2644 90.8662 83.5426 90.6788C83.8227 90.4753 84.1051 90.3089 84.3896 90.1797C84.8645 89.8114 85.2174 89.4528 85.4481 89.1039C85.6665 88.7454 85.9063 88.3771 86.1674 87.9991ZM85.5471 82.6736C85.3894 82.4249 85.3252 82.1793 85.3548 81.937C85.3986 81.6883 85.4872 81.4573 85.6207 81.2441C85.7562 81.0147 85.9233 80.8015 86.1221 80.6045C86.3208 80.4074 86.5176 80.2265 86.7124 80.0617C87.0731 79.6385 87.4816 79.2089 87.938 78.7728C88.3963 78.3205 88.8863 77.8844 89.4078 77.4644C89.9436 77.038 90.5488 76.6487 91.2234 76.2966C91.8857 75.9348 92.7061 75.6537 93.6847 75.4534C93.8499 75.531 94.0304 75.594 94.226 75.6424C94.4217 75.6909 94.6174 75.7393 94.813 75.7878C95.0229 75.8298 95.2186 75.8783 95.4 75.9332C95.5692 75.9784 95.7161 76.0414 95.8406 76.1222C96.0932 76.1448 96.3296 76.19 96.5497 76.2578C96.7577 76.316 96.9373 76.4404 97.0888 76.631C97.0446 76.7731 96.9942 76.9104 96.9378 77.0429C96.8833 77.1592 96.8084 77.2771 96.7132 77.3966C96.0765 77.5484 95.5062 77.7616 95.0024 78.0362C94.4985 78.3108 94.0455 78.5547 93.6432 78.7679C93.4048 78.7389 93.1932 78.7663 93.0083 78.8503C92.8375 78.9278 92.6771 79.0312 92.527 79.1604C92.391 79.2832 92.248 79.4092 92.0978 79.5384C91.9619 79.6612 91.7964 79.7516 91.6011 79.8098C91.5569 79.9519 91.4465 80.086 91.2698 80.212C91.0952 80.3218 90.8992 80.4413 90.6818 80.5706C90.7289 80.6255 90.786 80.6529 90.8532 80.6529C90.9082 80.6432 90.952 80.6691 90.9849 80.7305C91.156 80.7595 91.324 80.7595 91.4888 80.7305C91.6678 80.6949 91.8469 80.6594 92.0259 80.6239C92.2192 80.5819 92.4033 80.5593 92.5784 80.556C92.7413 80.5431 92.9053 80.5754 93.0706 80.6529C93.284 80.556 93.5118 80.506 93.7541 80.5027C93.9964 80.4995 94.2286 80.5237 94.4507 80.5754C94.6729 80.6271 94.8788 80.7014 95.0686 80.7983C95.2603 80.8791 95.4113 80.9631 95.5216 81.0503C95.6624 81.1085 95.7551 81.1198 95.7997 81.0842C95.8444 81.0487 95.9329 81.039 96.0653 81.0552C96.2673 81.1618 96.5395 81.2441 96.8818 81.3023C97.2118 81.3508 97.5247 81.4299 97.8204 81.5397C98.1552 81.7691 98.4523 81.9775 98.7117 82.1648C98.9588 82.3425 99.148 82.5541 99.2793 82.7996C99.5194 83.2551 99.6251 83.7107 99.5964 84.1662C99.5819 84.6152 99.4738 85.061 99.272 85.5036C99.0721 85.93 98.7999 86.3435 98.4554 86.7441C98.1109 87.1447 97.75 87.5146 97.3727 87.8538C97.3035 87.8699 97.2466 87.8958 97.2019 87.9313C97.1573 87.9668 97.1124 87.9491 97.0673 87.878C97.0393 87.9975 96.9664 88.0993 96.8487 88.1833C96.7451 88.2608 96.609 88.3303 96.4403 88.3917C96.2838 88.4627 96.114 88.5322 95.9311 88.6C95.7623 88.6614 95.6191 88.7341 95.5013 88.8181C95.3159 88.7955 95.1377 88.7696 94.9665 88.7405C94.8218 88.7147 94.6669 88.663 94.5016 88.5855C94.4305 88.6178 94.3643 88.6097 94.303 88.5613C94.256 88.5063 94.204 88.4918 94.1471 88.5176C94.1099 88.382 94.078 88.3125 94.0515 88.3093C94.027 88.2899 93.9873 88.285 93.9324 88.2947C93.8917 88.298 93.851 88.3012 93.8102 88.3044C93.7573 88.298 93.7195 88.277 93.697 88.2414C93.6558 88.1381 93.5669 88.0411 93.4301 87.9507C93.281 87.8505 93.132 87.7504 92.983 87.6502C92.8339 87.5501 92.7123 87.4451 92.6182 87.3353C92.5383 87.219 92.547 87.093 92.6442 86.9573C93.1769 86.7764 93.6199 86.5599 93.9732 86.308C94.3284 86.0398 94.6245 85.7604 94.8616 85.4697C95.0986 85.1789 95.3021 84.8882 95.4719 84.5974C95.656 84.3002 95.8514 84.0208 96.058 83.7591C95.9903 83.6525 95.9553 83.554 95.9529 83.4635C95.9647 83.3666 95.9827 83.2745 96.0068 83.1873C96.0309 83.1001 96.0417 83.0112 96.0393 82.9208C96.0369 82.8303 95.9948 82.735 95.9129 82.6349C95.8413 82.5606 95.7639 82.5347 95.6805 82.5573C95.5991 82.5638 95.5216 82.538 95.448 82.4798L95.1581 82.5428C94.753 82.559 94.3368 82.6106 93.9096 82.6979C93.4701 82.7754 93.0743 82.8255 92.7221 82.8481C92.6392 82.9773 92.5082 83.0597 92.3292 83.0952C92.1644 83.1243 91.9569 83.1727 91.7067 83.2406C91.1985 83.4409 90.6861 83.6202 90.1696 83.7785C89.6673 83.9303 89.1302 84.0369 88.5583 84.0983C88.4685 84.0627 88.3778 84.0353 88.2861 84.0159C88.1944 83.9965 88.1039 84.0224 88.0146 84.0934C87.8312 84.0547 87.6539 84.0207 87.4828 83.9917C87.2993 83.9529 87.1169 83.9061 86.9355 83.8511C86.8169 83.7219 86.7156 83.6153 86.6318 83.5313C86.5357 83.4376 86.3889 83.3746 86.1912 83.3423C86.0888 83.1905 86.0028 83.0693 85.9332 82.9789C85.8636 82.8884 85.7349 82.7867 85.5471 82.6736ZM106.915 72.2601C106.559 72.4216 106.199 72.6155 105.836 72.8416C105.46 73.058 105.097 73.2761 104.748 73.4958C104.5 73.6541 104.254 73.8043 104.008 73.9464C103.776 74.0821 103.56 74.2033 103.359 74.3099C103.529 74.5683 103.668 74.8025 103.777 75.0125C103.886 75.2225 103.981 75.4309 104.064 75.6376C104.158 75.8541 104.266 76.0721 104.387 76.2918C104.51 76.4953 104.651 76.7134 104.811 76.946C104.865 77.1656 104.928 77.3659 105 77.5468C105.074 77.7116 105.186 77.8893 105.338 78.0799C105.351 78.3028 105.419 78.516 105.542 78.7195C105.653 78.9134 105.76 79.0781 105.865 79.2138L106 79.427C105.988 79.5239 106 79.595 106.035 79.6402C106.057 79.6758 106.058 79.721 106.038 79.7759C106.159 79.889 106.244 80.0182 106.293 80.1636C106.326 80.225 106.366 80.2831 106.413 80.338C106.448 80.3832 106.477 80.4156 106.502 80.4349C106.625 80.5319 106.669 80.611 106.634 80.6724C106.71 80.7144 106.777 80.7677 106.837 80.8323C106.884 80.8872 106.931 80.9421 106.978 80.997C107.082 81.1327 107.184 81.2313 107.284 81.2926C107.376 81.312 107.454 81.3298 107.52 81.3459C107.599 81.3556 107.677 81.3815 107.752 81.4235C107.887 81.4235 107.981 81.4186 108.036 81.4089C108.13 81.4122 108.258 81.4073 108.421 81.3944L108.797 81.4526C109.223 81.7013 109.441 81.9533 109.45 82.2085C109.47 82.4896 109.224 82.7464 108.711 82.979L108.455 83.0953C108.323 83.0791 108.231 83.0597 108.18 83.0371C108.03 83.0597 107.906 83.0775 107.811 83.0904C107.715 83.1033 107.602 83.0937 107.472 83.0613C107.213 83.0872 107.003 83.1066 106.84 83.1195L106.556 83.134C106.421 83.0274 106.347 82.9693 106.335 82.9596C106.125 82.9176 105.924 82.8562 105.733 82.7754C105.555 82.6882 105.385 82.5978 105.222 82.5041C105.083 82.4298 104.943 82.3635 104.802 82.3054C104.676 82.2408 104.547 82.1923 104.417 82.16C103.678 81.6108 103.155 81.1004 102.85 80.6288C102.545 80.1571 102.265 79.6967 102.011 79.2477C101.879 79.0022 101.748 78.7567 101.617 78.5111C101.473 78.2559 101.309 78.0023 101.125 77.7504L101.133 77.5178C101.037 77.3175 100.955 77.1559 100.89 77.0332C100.826 76.8943 100.762 76.7554 100.699 76.6164C100.656 76.5292 100.612 76.4501 100.566 76.379C100.523 76.2918 100.485 76.2175 100.453 76.1561C100.367 76.1949 100.295 76.2352 100.236 76.2772C100.165 76.3095 100.1 76.3467 100.041 76.3887C99.9681 76.4371 99.9021 76.4824 99.8432 76.5244C99.7721 76.5567 99.701 76.589 99.6298 76.6213C99.5302 76.6665 99.453 76.694 99.3981 76.7037C99.3028 76.8232 99.1628 76.925 98.9778 77.0089L98.7644 77.1059C98.7217 77.1252 98.6791 77.1446 98.6364 77.164C98.5957 77.1672 98.5611 77.1753 98.5326 77.1882C98.3904 77.2528 98.2949 77.3191 98.2463 77.3869C98.0756 77.4644 97.912 77.5387 97.7555 77.6098L97.5421 77.7067C97.5137 77.7197 97.4842 77.7407 97.4538 77.7697C97.4111 77.7891 97.3756 77.8053 97.3471 77.8182C97.2475 77.8634 97.1347 77.907 97.0086 77.949C96.8703 77.9813 96.7065 78.0023 96.5172 78.012C96.1503 77.9345 95.9324 77.9038 95.8632 77.9199L95.4505 77.8327C95.3628 77.781 95.274 77.7374 95.1843 77.7019C95.0823 77.6566 94.9742 77.6066 94.8599 77.5517C94.6805 77.4806 94.4949 77.4047 94.3031 77.3239C94.1134 77.227 93.9205 77.101 93.7244 76.9459C93.6405 76.8619 93.5954 76.7909 93.5891 76.7327C93.5828 76.6746 93.5754 76.6245 93.5671 76.5825L93.3554 76.3354L93.6512 76.2239L94.2487 75.9525C94.7039 75.7458 95.154 75.5261 95.599 75.2935C96.0317 75.0512 96.4787 74.8025 96.9398 74.5473C97.1998 74.3987 97.4599 74.2501 97.7199 74.1015C97.9941 73.9464 98.2755 73.7881 98.564 73.6266C98.5106 73.5135 98.4633 73.4053 98.4221 73.3019L98.5436 73.1323C98.7874 73.0063 98.9959 72.9498 99.169 72.9627C99.3441 72.9595 99.4979 72.966 99.6303 72.9821C99.9188 72.8206 100.207 72.6591 100.496 72.4975C100.786 72.3199 101.07 72.1373 101.349 71.95C101.771 71.6818 102.2 71.4185 102.634 71.1601C103.083 70.8952 103.535 70.6594 103.991 70.4526C104.19 70.3622 104.388 70.2798 104.585 70.2055C104.782 70.1312 104.971 70.0682 105.152 70.0165L105.495 70.0214C105.611 70.0601 105.735 70.0876 105.867 70.1037C106.014 70.1134 106.161 70.1231 106.307 70.1328C106.613 70.1619 106.943 70.2104 107.298 70.2782C107.652 70.346 107.986 70.5302 108.299 70.8306C108.332 70.9986 108.332 71.1052 108.3 71.1504L108.328 71.4121L108.097 71.4945C108.011 71.5333 107.945 71.5785 107.899 71.6302C107.84 71.6722 107.787 71.719 107.74 71.7707C107.708 71.8159 107.676 71.8611 107.643 71.9064C107.599 71.9419 107.547 71.9807 107.488 72.0227C107.36 72.0808 107.253 72.1293 107.168 72.168C107.084 72.1907 107 72.2213 106.915 72.2601ZM119.711 70.6368C119.949 70.5593 120.141 70.5254 120.288 70.5351C120.449 70.5383 120.593 70.5722 120.719 70.6368C120.848 70.6853 120.96 70.7564 121.056 70.85C121.152 70.9437 121.255 71.0342 121.366 71.1214C121.218 71.4477 120.874 71.7869 120.334 72.139C119.782 72.4815 119.183 72.8223 118.536 73.1615C117.878 73.491 117.229 73.8011 116.589 74.0919C115.948 74.3826 115.462 74.6265 115.129 74.8236C114.434 75.2306 113.91 75.5601 113.557 75.8121C113.205 76.0479 112.982 76.2256 112.887 76.3451C112.604 76.4582 112.348 76.5212 112.118 76.5341C111.888 76.547 111.674 76.5373 111.477 76.505C111.267 76.463 111.059 76.4049 110.853 76.3306C110.647 76.2563 110.421 76.1836 110.174 76.1125C110.133 76.0091 110.006 75.8912 109.794 75.7588C109.581 75.6263 109.355 75.5536 109.115 75.5407C109.216 75.4793 109.234 75.3873 109.169 75.2645C109.091 75.1321 108.993 75.0545 108.875 75.0319C109.053 74.8898 109.264 74.7557 109.508 74.6297C109.754 74.4876 109.999 74.3535 110.243 74.2275C110.486 74.1015 110.71 73.9771 110.913 73.8544C111.118 73.7155 111.269 73.5782 111.366 73.4425C112.065 73.1098 112.78 72.7625 113.509 72.4007C114.253 72.0324 114.947 71.6867 115.591 71.3637C115.894 71.3023 116.215 71.2022 116.555 71.0632C116.882 70.9146 117.221 70.7838 117.57 70.6707C117.908 70.548 118.26 70.4721 118.626 70.443C118.993 70.4139 119.354 70.4785 119.711 70.6368ZM130.646 70.8888C131.085 71.1473 131.345 71.388 131.425 71.6109C131.519 71.8273 131.502 72.026 131.372 72.2069C131.269 72.391 131.082 72.5526 130.809 72.6915C130.537 72.8304 130.254 72.9435 129.962 73.0307C129.648 72.9596 129.305 72.8482 128.934 72.6963C128.563 72.5445 128.193 72.3846 127.823 72.2166C127.442 72.0389 127.074 71.8628 126.719 71.6884C126.378 71.5075 126.075 71.3476 125.81 71.2087C125.734 71.06 125.611 70.9098 125.441 70.758C125.274 70.59 125.092 70.4285 124.896 70.2734C124.714 70.1119 124.525 69.9536 124.329 69.7985C124.135 69.6273 123.96 69.4626 123.805 69.3043C123.389 68.852 123.041 68.3997 122.761 67.9474C122.494 67.4887 122.166 67.0348 121.778 66.5858C121.696 66.4856 121.577 66.4097 121.422 66.358C121.282 66.2999 121.183 66.2304 121.125 66.1496C121.091 66.1044 121.103 66.0608 121.162 66.0188C121.208 65.9671 121.208 65.9138 121.161 65.8589C121.069 65.7329 120.966 65.6425 120.851 65.5875C120.751 65.5262 120.676 65.4309 120.624 65.3016C120.597 65.1918 120.542 65.0416 120.457 64.851C120.375 64.6442 120.216 64.4649 119.979 64.3131C120.033 64.1968 120.068 64.074 120.084 63.9448C120.1 63.8156 120.128 63.6961 120.168 63.5862C120.21 63.4602 120.272 63.3407 120.353 63.2276C120.448 63.1081 120.603 62.9999 120.816 62.903C121.052 62.9482 121.258 63.0225 121.434 63.1259C121.624 63.2228 121.806 63.3229 121.982 63.4263C122.171 63.5232 122.369 63.6088 122.575 63.6832C122.769 63.7478 122.988 63.7704 123.232 63.751C123.33 63.8285 123.453 63.9254 123.6 64.0417C123.747 64.158 123.901 64.2711 124.062 64.3809C124.211 64.4811 124.369 64.5699 124.534 64.6475C124.701 64.7088 124.86 64.7282 125.011 64.7056C125.343 65.2871 125.683 65.8573 126.031 66.4162C126.394 66.9686 126.798 67.5097 127.245 68.0395C127.678 68.5596 128.168 69.062 128.714 69.5466C129.273 70.0247 129.918 70.4721 130.646 70.8888ZM137.708 58.2753C137.352 58.4368 136.993 58.6307 136.629 58.8568C136.254 59.0733 135.891 59.2913 135.542 59.511C135.294 59.6693 135.047 59.8195 134.801 59.9616C134.57 60.0973 134.353 60.2185 134.152 60.3251C134.322 60.5835 134.462 60.8177 134.57 61.0277C134.679 61.2377 134.775 61.4461 134.857 61.6528C134.952 61.8693 135.059 62.0873 135.18 62.307C135.303 62.5105 135.445 62.7286 135.605 62.9612C135.658 63.1809 135.721 63.3811 135.793 63.5621C135.867 63.7268 135.98 63.9045 136.131 64.0951C136.145 64.318 136.213 64.5312 136.336 64.7347C136.446 64.9286 136.554 65.0933 136.658 65.229L136.794 65.4422C136.782 65.5391 136.793 65.6102 136.828 65.6554C136.851 65.691 136.852 65.7362 136.832 65.7911C136.952 65.9042 137.037 66.0334 137.087 66.1788C137.12 66.2402 137.159 66.2983 137.207 66.3532C137.241 66.3985 137.271 66.4308 137.295 66.4501C137.418 66.5471 137.462 66.6262 137.428 66.6876C137.503 66.7296 137.571 66.7829 137.63 66.8475C137.677 66.9024 137.724 66.9573 137.771 67.0123C137.876 67.1479 137.978 67.2465 138.078 67.3078C138.169 67.3272 138.248 67.345 138.313 67.3612C138.393 67.3708 138.47 67.3967 138.546 67.4387C138.68 67.4387 138.775 67.4338 138.83 67.4241C138.923 67.4274 139.052 67.4225 139.214 67.4096L139.59 67.4678C140.017 67.7165 140.235 67.9685 140.244 68.2237C140.263 68.5048 140.017 68.7616 139.505 68.9942L139.249 69.1105C139.116 69.0943 139.025 69.0749 138.974 69.0523C138.823 69.0749 138.7 69.0927 138.604 69.1056C138.509 69.1186 138.396 69.1089 138.265 69.0766C138.007 69.1024 137.796 69.1218 137.633 69.1347L137.349 69.1492C137.214 69.0426 137.141 68.9845 137.129 68.9748C136.919 68.9328 136.718 68.8714 136.526 68.7906C136.349 68.7034 136.178 68.613 136.015 68.5193C135.876 68.445 135.737 68.3788 135.596 68.3206C135.469 68.256 135.341 68.2075 135.21 68.1752C134.471 67.626 133.949 67.1156 133.643 66.644C133.338 66.1723 133.058 65.712 132.804 65.2629C132.673 65.0174 132.541 64.7719 132.41 64.5264C132.267 64.2711 132.103 64.0175 131.918 63.7656L131.927 63.533C131.83 63.3327 131.749 63.1711 131.683 63.0484C131.62 62.9095 131.556 62.7706 131.492 62.6317C131.449 62.5444 131.405 62.4653 131.36 62.3942C131.317 62.307 131.279 62.2327 131.246 62.1713C131.161 62.2101 131.089 62.2504 131.03 62.2924C130.959 62.3248 130.894 62.3619 130.835 62.4039C130.762 62.4524 130.696 62.4976 130.637 62.5396C130.566 62.5719 130.494 62.6042 130.423 62.6365C130.324 62.6817 130.246 62.7092 130.192 62.7189C130.096 62.8384 129.956 62.9402 129.771 63.0242L129.558 63.1211C129.515 63.1405 129.473 63.1598 129.43 63.1792C129.389 63.1824 129.355 63.1905 129.326 63.2034C129.184 63.2681 129.088 63.3343 129.04 63.4021C128.869 63.4797 128.706 63.554 128.549 63.625L128.336 63.7219C128.307 63.7349 128.278 63.7559 128.247 63.7849C128.205 63.8043 128.169 63.8205 128.141 63.8334C128.041 63.8786 127.928 63.9222 127.802 63.9642C127.664 63.9965 127.5 64.0175 127.311 64.0272C126.944 63.9497 126.726 63.919 126.657 63.9351L126.244 63.8479C126.156 63.7962 126.067 63.7526 125.978 63.7171C125.876 63.6719 125.768 63.6218 125.653 63.5669C125.474 63.4958 125.288 63.4199 125.097 63.3391C124.907 63.2422 124.714 63.1162 124.518 62.9611C124.434 62.8771 124.389 62.8061 124.383 62.7479C124.376 62.6898 124.369 62.6397 124.361 62.5977L124.149 62.3506L124.445 62.2391L125.042 61.9678C125.497 61.761 125.948 61.5413 126.393 61.3087C126.825 61.0664 127.272 60.8177 127.733 60.5625C127.993 60.4139 128.253 60.2653 128.513 60.1167C128.788 59.9616 129.069 59.8033 129.357 59.6418C129.304 59.5287 129.257 59.4205 129.216 59.3171L129.337 59.1475C129.581 59.0215 129.789 58.965 129.963 58.9779C130.138 58.9747 130.291 58.9812 130.424 58.9973C130.712 58.8358 131.001 58.6743 131.289 58.5127C131.58 58.3351 131.864 58.1525 132.142 57.9652C132.565 57.697 132.993 57.4338 133.428 57.1753C133.877 56.9104 134.329 56.6746 134.784 56.4678C134.983 56.3774 135.181 56.295 135.379 56.2207C135.576 56.1464 135.765 56.0834 135.946 56.0317L136.288 56.0366C136.404 56.0753 136.529 56.1028 136.661 56.1189C136.808 56.1286 136.954 56.1383 137.101 56.148C137.406 56.1771 137.736 56.2256 138.091 56.2934C138.446 56.3612 138.779 56.5454 139.092 56.8458C139.125 57.0138 139.126 57.1204 139.093 57.1656L139.122 57.4273L138.89 57.5097C138.805 57.5485 138.739 57.5937 138.692 57.6454C138.633 57.6874 138.58 57.7342 138.534 57.7859C138.501 57.8311 138.469 57.8764 138.437 57.9216C138.392 57.9571 138.34 57.9959 138.281 58.0379C138.153 58.096 138.047 58.1445 137.961 58.1833C137.878 58.2059 137.794 58.2366 137.708 58.2753ZM136.955 59.3269C136.797 59.0781 136.733 58.8326 136.763 58.5903C136.806 58.3415 136.895 58.1106 137.029 57.8974C137.164 57.668 137.331 57.4548 137.53 57.2577C137.729 57.0606 137.925 56.8797 138.12 56.715C138.481 56.2918 138.889 55.8621 139.346 55.426C139.804 54.9737 140.294 54.5376 140.816 54.1177C141.351 53.6912 141.957 53.302 142.631 52.9498C143.294 52.588 144.114 52.307 145.093 52.1067C145.258 52.1842 145.438 52.2472 145.634 52.2957C145.83 52.3441 146.025 52.3926 146.221 52.441C146.431 52.483 146.626 52.5315 146.808 52.5864C146.977 52.6316 147.124 52.6946 147.248 52.7754C147.501 52.798 147.737 52.8432 147.958 52.9111C148.165 52.9692 148.345 53.0936 148.497 53.2842C148.452 53.4264 148.402 53.5637 148.346 53.6961C148.291 53.8124 148.216 53.9303 148.121 54.0498C147.484 54.2017 146.914 54.4149 146.41 54.6895C145.906 54.9641 145.453 55.208 145.051 55.4212C144.813 55.3921 144.601 55.4196 144.416 55.5036C144.245 55.5811 144.085 55.6845 143.935 55.8137C143.799 55.9365 143.656 56.0624 143.506 56.1917C143.37 56.3144 143.204 56.4049 143.009 56.463C142.965 56.6052 142.854 56.7392 142.678 56.8652C142.503 56.9751 142.307 57.0946 142.09 57.2238C142.137 57.2787 142.194 57.3062 142.261 57.3062C142.316 57.2965 142.36 57.3223 142.393 57.3837C142.564 57.4128 142.732 57.4128 142.897 57.3837C143.076 57.3482 143.255 57.3126 143.434 57.2771C143.627 57.2351 143.811 57.2125 143.986 57.2093C144.149 57.1964 144.313 57.2287 144.478 57.3062C144.692 57.2093 144.92 57.1592 145.162 57.156C145.404 57.1527 145.636 57.177 145.859 57.2287C146.081 57.2804 146.287 57.3547 146.476 57.4516C146.668 57.5323 146.819 57.6163 146.929 57.7036C147.07 57.7617 147.163 57.773 147.208 57.7375C147.252 57.7019 147.341 57.6922 147.473 57.7084C147.675 57.815 147.947 57.8974 148.29 57.9555C148.62 58.004 148.933 58.0831 149.228 58.193C149.563 58.4224 149.86 58.6307 150.12 58.8181C150.367 58.9958 150.556 59.2074 150.687 59.4529C150.927 59.9084 151.033 60.3639 151.004 60.8194C150.99 61.2684 150.882 61.7143 150.68 62.1568C150.48 62.5833 150.208 62.9968 149.863 63.3973C149.519 63.7979 149.158 64.1678 148.78 64.507C148.711 64.5232 148.654 64.549 148.61 64.5846C148.565 64.6201 148.52 64.6023 148.475 64.5313C148.447 64.6508 148.374 64.7525 148.257 64.8365C148.153 64.9141 148.017 64.9835 147.848 65.0449C147.692 65.116 147.522 65.1854 147.339 65.2533C147.17 65.3147 147.027 65.3873 146.909 65.4713C146.724 65.4487 146.546 65.4229 146.374 65.3938C146.23 65.368 146.075 65.3163 145.909 65.2387C145.838 65.271 145.772 65.263 145.711 65.2145C145.664 65.1596 145.612 65.145 145.555 65.1709C145.518 65.0352 145.486 64.9657 145.459 64.9625C145.435 64.9431 145.395 64.9383 145.34 64.948C145.3 64.9512 145.259 64.9544 145.218 64.9577C145.165 64.9512 145.127 64.9302 145.105 64.8947C145.064 64.7913 144.975 64.6944 144.838 64.6039C144.689 64.5038 144.54 64.4036 144.391 64.3035C144.242 64.2033 144.12 64.0984 144.026 63.9885C143.946 63.8722 143.955 63.7462 144.052 63.6105C144.585 63.4296 145.028 63.2132 145.381 62.9612C145.736 62.6931 146.032 62.4136 146.269 62.1229C146.506 61.8322 146.71 61.5414 146.88 61.2507C147.064 60.9535 147.259 60.674 147.466 60.4123C147.398 60.3057 147.363 60.2072 147.361 60.1168C147.373 60.0198 147.391 59.9278 147.415 59.8405C147.439 59.7533 147.45 59.6645 147.447 59.574C147.445 59.4836 147.403 59.3883 147.321 59.2881C147.249 59.2138 147.172 59.188 147.088 59.2106C147.007 59.2171 146.929 59.1912 146.856 59.1331L146.566 59.1961C146.161 59.2122 145.745 59.2639 145.317 59.3511C144.878 59.4286 144.482 59.4787 144.13 59.5013C144.047 59.6305 143.916 59.7129 143.737 59.7485C143.572 59.7775 143.365 59.826 143.115 59.8938C142.606 60.0941 142.094 60.2734 141.577 60.4317C141.075 60.5835 140.538 60.6901 139.966 60.7515C139.876 60.716 139.786 60.6885 139.694 60.6691C139.602 60.6498 139.512 60.6756 139.422 60.7467C139.239 60.7079 139.062 60.674 138.891 60.6449C138.707 60.6061 138.525 60.5593 138.343 60.5044C138.225 60.3752 138.123 60.2686 138.04 60.1846C137.944 60.0909 137.797 60.0279 137.599 59.9956C137.497 59.8437 137.411 59.7226 137.341 59.6321C137.271 59.5417 137.143 59.4399 136.955 59.3269ZM155.245 45.5504C155.443 45.5827 155.633 45.6263 155.814 45.6812C155.983 45.7264 156.164 45.7361 156.355 45.7103C156.59 45.9849 156.863 46.2272 157.173 46.4372C157.471 46.6375 157.787 46.8604 158.12 47.1059C158.852 47.9329 159.159 48.7244 159.039 49.4803C158.908 50.2266 158.499 50.8856 157.811 51.4574C157.933 51.5543 157.976 51.6415 157.94 51.7191C157.692 51.8774 157.54 52.0227 157.484 52.1552C157.427 52.2876 157.384 52.4217 157.354 52.5574C157.338 52.6866 157.294 52.8287 157.221 52.9838C157.151 53.1227 156.969 53.2891 156.677 53.4829C156.74 53.6218 156.726 53.7349 156.635 53.8221C156.558 53.9029 156.468 53.982 156.364 54.0596C156.263 54.1209 156.18 54.1969 156.115 54.2873C156.038 54.3681 156.05 54.4844 156.153 54.6362L155.911 55.9591C155.496 56.056 155.166 56.1675 154.923 56.2935C154.667 56.4098 154.441 56.497 154.246 56.5551C154.05 56.6133 153.842 56.6165 153.62 56.5648C153.412 56.5067 153.122 56.3484 152.75 56.0899C152.642 55.9866 152.612 55.9009 152.661 55.8331C152.711 55.7491 152.702 55.6619 152.632 55.5714C152.363 55.3582 152.209 55.1838 152.172 55.0481C152.137 54.8963 152.147 54.7541 152.204 54.6217C152.26 54.4892 152.318 54.3487 152.376 54.2001C152.422 54.0418 152.392 53.8496 152.285 53.6234C152.427 53.4522 152.541 53.2325 152.628 52.9644C152.716 52.6801 152.782 52.4136 152.826 52.1649C153.022 51.8773 153.18 51.6302 153.299 51.4235C153.433 51.2102 153.545 51.0067 153.636 50.8129C153.727 50.6191 153.805 50.4155 153.872 50.2023C153.938 49.9891 154.01 49.7274 154.088 49.4173C153.858 49.3236 153.637 49.3172 153.426 49.3979C153.216 49.4625 153.003 49.5594 152.785 49.6887C152.262 49.7888 151.79 49.9196 151.367 50.0812C150.946 50.2265 150.46 50.4091 149.909 50.6287C149.722 50.7289 149.591 50.8113 149.516 50.8759C149.443 50.9243 149.302 50.9809 149.092 51.0455C149.068 51.1327 149.018 51.2167 148.941 51.2974C148.878 51.3718 148.801 51.4525 148.709 51.5397C148.62 51.6108 148.53 51.69 148.439 51.7772C148.349 51.8482 148.279 51.9258 148.229 52.0098C147.883 52.0905 147.539 52.1018 147.197 52.0437C146.854 51.9855 146.513 51.9726 146.173 52.0049C146.059 51.95 146.025 51.8967 146.072 51.845C146.118 51.7933 146.066 51.7255 145.915 51.6415C145.712 51.6576 145.592 51.6512 145.555 51.6221C145.532 51.5866 145.441 51.5672 145.28 51.564C145.14 51.383 145.053 51.2167 145.018 51.0648C144.985 50.8969 144.971 50.7353 144.976 50.5803C144.97 50.4155 144.969 50.2556 144.974 50.1005C144.98 49.9455 144.953 49.7823 144.893 49.6111C145.072 49.469 145.19 49.3236 145.249 49.175C145.309 49.0102 145.356 48.8439 145.39 48.6759C146.085 48.2688 146.813 47.9151 147.576 47.6147C148.326 47.3045 149.105 47.0267 149.915 46.7812C150.738 46.5292 151.592 46.3095 152.475 46.1222C153.372 45.9283 154.295 45.7377 155.245 45.5504ZM157.622 57.6309C157.777 57.7892 157.884 57.9087 157.941 57.9895C158.013 58.0638 158.085 58.13 158.159 58.1882C158.232 58.2463 158.331 58.3158 158.456 58.3965C158.595 58.4708 158.809 58.5871 159.099 58.7454L159.457 58.949L159.213 59.1283C159.154 59.1703 159.088 59.2688 159.016 59.4238C158.957 59.5725 158.895 59.7001 158.828 59.8067C158.727 59.9746 158.639 60.1443 158.564 60.3155C158.516 60.4899 158.4 60.6191 158.215 60.7031C157.903 60.7225 157.68 60.7322 157.546 60.7322C157.412 60.7322 157.277 60.7322 157.143 60.7322C156.961 60.6773 156.787 60.6191 156.62 60.5578C156.453 60.4964 156.278 60.4382 156.097 60.3833C155.968 60.3348 155.885 60.3042 155.846 60.2912C155.807 60.2783 155.775 60.2702 155.748 60.267C155.736 60.2573 155.716 60.2589 155.687 60.2718C155.661 60.2686 155.581 60.2589 155.449 60.2428L155.1 60.1265C154.988 60.0554 154.903 59.9795 154.846 59.8987C154.79 59.8018 154.734 59.713 154.677 59.6322C154.654 59.5967 154.625 59.5563 154.591 59.5111C154.558 59.4497 154.529 59.4093 154.505 59.3899L154.193 59.3027L154.161 59.0652C154.112 58.9199 154.084 58.8181 154.078 58.76C154.071 58.7018 154.073 58.6324 154.083 58.5516L154.146 58.3626C154.518 58.1785 154.8 58.0121 154.993 57.8635C155.272 57.7827 155.471 57.7456 155.591 57.752C155.699 57.7488 155.813 57.7504 155.933 57.7569C156.188 57.7634 156.351 57.7504 156.422 57.7181L156.849 57.5243L157.082 57.7617L157.622 57.6309Z"
        fill="#181818"
      />
    </svg>
  );
};

export default PostItButton;
