export const html = `<div
  className="flex flex-row md:flex-col p-4 mb-4 md:mb-8 w-full md:w-1/2 lg:w-1/2 xl:w-1/4 justify-between md:justify-center items-center bg-white md:bg-transparent shadow-md md:shadow-none"
>
  <div className="flex flex-row md:flex-col w-full h-full md:pb-4 justify-between md:justify-center items-center md:bg-white md:shadow-lg rounded-md">
    <div
      className="w-24 h-24 md:-mt-12 rounded-full"
      id="user-pic"
    >
      <img alt="team" className="w-full h-full rounded-lg md:rounded-full" src="https://picsum.photos/id/1005/200"/>
    </div>
    <div className="flex flex-col w-2/3 md:justify-center">
      <h1 className="text-xl md:text-center text-gray-700">Joe User</h1>
      <h3 className="text-md md:text-center text-gray-500">Software Engineer</h3>
      <div className="flex flex-row justify-start md:justify-center">
        <span className="flex flex-row justify-center items-center">
          <a href="tel:555-555-5557"
            className="inline-flex items-center justify-center p-2 mr-2 text-white font-medium leading-6 bg-gray-600 rounded-full focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </span>
        <span className="flex flex-row justify-center">
        <a
          href="mailto:juser@email.com"
          className="inline-flex items-center justify-center p2 mr-2 text-base font-medium leading-6 rounded-full focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </span>
      <span className="flex flex-row justify-center">
        <a href="tel:555-555-5558"
          className="inline-flex items-center justify-center p2 mr-2 text-base font-medium leading-6 rounded-full focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</div>
`;
