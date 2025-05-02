import React, { useEffect, useState } from "react";

const UpcomingBEPagination = () => {
  const [users, setUser] = useState([]);
  const limit = 4;
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        `https://dummyjson.com/users?limit=${limit}&skip=${page * limit}`
      );
      const data = await res.json();
      setUser(data.users);
    };
    fetchUsers();
  }, [page]);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUser(data.users));
  //   }, []);
  console.log("only userss", users);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  return (
    <>
      <h1> Show users Pagination from BE</h1>
      {users.map((user) => {
        return (
          <>
            <h3>{user.firstName}</h3>
            <p>{user.age}</p>
          </>
        );
      })}
      <button onClick={handlePrev}>prev</button>
      {page}
      <button onClick={handleNext}>next</button>
    </>
  );
};

export default UpcomingBEPagination;
