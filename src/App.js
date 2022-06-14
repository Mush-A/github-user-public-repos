import { useState } from "react";
import "./App.css";
import CardHolder from "./components/CardHolder";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

const App = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async (username) => {
    await fetch(`https://api.github.com/users/${username}/repos`)
      .then((result) => result.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <SearchBar fetchRepos={fetchRepos} />

      {repos.length > 0 ? (
        <CardHolder>
          <UserCard userDetails={repos[0].owner} />
          {repos.map((repo, index) => {
            return <RepoCard key={index} repo={repo} />;
          })}
        </CardHolder>
      ) : (
        <CardHolder>{"ENTER USERNAME AND FIND"}</CardHolder>
      )}
    </div>
  );
};

export default App;
