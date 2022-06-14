import { useRef } from "react";
import { useState } from "react";

import CardHolder from "./components/CardHolder";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ErrorCard from "./components/ErrorCard";

import "./App.css";

const App = () => {
  //Repo state
  const [repos, setRepos] = useState([]);

  //Error state
  const [error, setError] = useState({
    status: false,
    message: "No Public Repos",
  });

  //Ref to CardHolder component -> Scroll to cardholder once valid results
  const CardHolderRef = useRef(null);

  //Fetch data from https://api.github.com/users/${username}/repos
  const fetchRepos = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((result) => result.json())
      .then((data) => {
        // If data is not an array then there has been an error
        if (!Array.isArray(data)) {
          setError({ status: true, message: data.message });
        }

        setRepos(data);

        // Wait 0.1s and scroll smoothly to the cardholder component
        setTimeout(
          () =>
            CardHolderRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }),
          100
        );
      })
      .catch((err) => setError({ status: true, message: err.message }));
  };

  return (
    <div className="app">
      <SearchBar fetchRepos={fetchRepos} />

      {
        // If nothing in repo array: Error or no public repos. Else: Display the Cardholder
        repos.length > 0 ? (
          <CardHolder refProp={CardHolderRef}>
            <UserCard userDetails={repos[0].owner} repoCount={repos.length} />

            {repos.map((repo, index) => {
              return <RepoCard key={index} repo={repo} />;
            })}
          </CardHolder>
        ) : (
          // Display "Not found" or "No public repos"(default error message state)
          <>
            {error.status ? (
              <CardHolder refProp={CardHolderRef}>
                <ErrorCard error={error} />
              </CardHolder>
            ) : (
              <CardHolder refProp={CardHolderRef}>
                <ErrorCard error={error} />
              </CardHolder>
            )}
          </>
        )
      }
    </div>
  );
};

export default App;
