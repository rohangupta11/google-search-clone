import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { useResultContext } from "./contexts/ResultContextProvider";

const Results = () => {
  const { results, isLoading, searchTerm, getResults } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(
        `${location.pathname}/q=${searchTerm}&num=40&lr=lang_en&hl=en`
      );
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;
  if (results.length === 0)
    return (
      <p className="my-44 text-center text-xl">
        {searchTerm === "" ? "Search Google or type a URL.." : "No Results Found!"}
      </p>
    );
  else {
    switch (location.pathname) {
      case "/search":
        return (
          <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
            {results.map(({ link, title, description }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                  <p className="text-sm max-w-fit">
                    {description.length > 100
                      ? description.substring(0, 120) + "..."
                      : description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        );
      case "/image":
        return (
          <div className="flex flex-wrap justify-center items-center">
            {results.map(({ image, link: { href, title } }, index) => (
              <a
                className="sm:p-3 p-5"
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-40 h-40"
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                />
                <p className="max-w-fit text-center break-words text-sm mt-2">
                  {title}
                </p>
              </a>
            ))}
          </div>
        );
      case "/news":
        return (
          <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
            {results.map(({ links, id, source, title }) => (
              <div key={id} className="md:w-2/5 w-full">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      case "/video":
        return (
          <div className="flex flex-wrap justify-between space-y-2">
            {results.map((video, index) => (
              <div key={index} className="p-2 sm:w-screen md:w-3/5 md:ml-56">
                {video?.additional_links?.[0]?.href && (
                  <div>
                    <a
                      href={video.additional_links[0].href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-sm">
                        {video.description.length > 60
                          ? video.description.substring(0, 60) + "..."
                          : video.description}
                      </p>
                      <h1 className="text-lg hover:underline dark:text-blue-300 text-blue-700 mb-2">
                        {video.title}
                      </h1>
                    </a>
                    {video.cite?.span === " › watch" && (
                      <ReactPlayer
                        url={video.additional_links[0].href}
                        controls
                        width="290px"
                        height="200px"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return "404! Thats an Error! The requested URL was not found on this server.";
    }
  }
};

export default Results;
