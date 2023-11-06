export default function Footer() {
  return (
    <footer className="flex-col justify-center bg-gray-900 text-white pr-12 lg:pr-52 pl-12 lg:pl-52 p-2">
      <div className="flex justify-center gap-3 border-gray-400 border-b-2">
        <h1 className="text-center mb-2 text-base">Contact Us</h1>
        <a
          href="https://www.linkedin.com/in/md-samiullah-sayem/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </div>

      <p className="text-xs text-center mt-3">
        © 2023 www.todo-react.com | Powered by: SYM_!7 Copyright: Any
        unauthorized use or reproduction of Concerty content for commercial
        purposes is strictly prohibited and constitutes copyright infringement
        liable to legal action.
      </p>
    </footer>
  );
}
