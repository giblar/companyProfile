const Button = (props) => {
  const {
    children = ". . . ",
    onClick = () => {},
    type = "button",
    Color ="border-black"
  } = props;
  return (
    <>
      <button class={`flex items-center px-4 py-2 border ${Color} rounded-full`}>
        <span class="mr-2">{children}</span>
        <div class="bg-red-500 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </div>
      </button>
    </>
  );
};

export default Button;
