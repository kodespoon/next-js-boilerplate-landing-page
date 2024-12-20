export const metadata = {
  title: 'Sign Up - Saas Free',
  description: 'Page description',
};

import Image from 'next/image';

export default function SignUp() {
  const avatars = [
    { src: '/images/avatar-01.png', alt: 'Avatar 01' },
    { src: '/images/avatar-02.png', alt: 'Avatar 02' },
    { src: '/images/avatar-03.png', alt: 'Avatar 03' },
    { src: '/images/avatar-04.png', alt: 'Avatar 04' },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="lg:flex lg:space-x-20">
          {/* Left side */}
          <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
            {/* Avatars */}
            <div className="flex -space-x-3 -ml-0.5 mb-6">
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  className="rounded-full border-2 border-slate-900 box-content"
                  src={avatar.src}
                  width={40}
                  height={40}
                  alt={avatar.alt}
                />
              ))}
            </div>
            {/* Headline */}
            <h1 className="h2 font-sans mb-8 text-center lg:text-left">
              Consectetur adipiscin
            </h1>
            {/* List */}
            <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </li>
            </ul>
          </div>
          {/* Right side */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Bg gradient */}
            <div
              className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-200 -z-10"
              aria-hidden="true"
            />
            <div className="p-6 md:p-8">
              <div className="font-sans text-xl font-bold mb-6">Let's talk</div>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label
                        className="block text-sm text-slate-800 font-medium mb-1"
                        htmlFor="name"
                      >
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        className="form-input text-sm py-2 w-full"
                        type="text"
                        required
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        className="block text-sm text-slate-800 font-medium mb-1"
                        htmlFor="surname"
                      >
                        Surname <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="surname"
                        className="form-input text-sm py-2 w-full"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="email"
                    >
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="form-input text-sm py-2 w-full"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="phone"
                    >
                      Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      className="form-input text-sm py-2 w-full"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="referrer"
                    >
                      How did you hear about us?{' '}
                      <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="referrer"
                      className="form-select py-2 w-full"
                      required
                    >
                      <option>Twitter</option>
                      <option>Medium</option>
                      <option>GitHub</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="message"
                    >
                      How can we help with?{' '}
                      <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      className="form-textarea text-sm py-2 w-full"
                      rows={4}
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                    Request Demo{' '}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
