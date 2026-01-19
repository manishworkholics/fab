interface CheckIconProps {
  isWhiteCheck?: boolean;
}

const CheckIcon = ({ isWhiteCheck }: CheckIconProps) => {
  return (
    <>
      {!isWhiteCheck && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
            fill="#3CC76B"
          />
          <path
            d="M11.0481 5.92496C10.8101 5.68696 10.4181 5.68696 10.1801 5.92496L7.28908 8.81596L6.06408 7.59096C5.82608 7.35296 5.43408 7.35296 5.19608 7.59096C4.95808 7.82896 4.95808 8.21396 5.19608 8.45896L6.86208 10.118C6.98108 10.237 7.13508 10.293 7.28908 10.293C7.45008 10.293 7.60408 10.237 7.72308 10.118L11.0481 6.79296C11.2861 6.55496 11.2861 6.16996 11.0481 5.92496Z"
            fill="white"
          />
        </svg>
      )}

      {isWhiteCheck && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"></path>
        </svg>
      )}
    </>
  );
};

export default CheckIcon;
