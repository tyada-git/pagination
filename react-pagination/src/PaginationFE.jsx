import React, { useEffect, useState } from "react";

const PaginationFE = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setInfo(data.users));
  }, []);

  const offset = 10;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(info.length / offset);
  const currentUser = info.slice((page - 1) * offset, page * offset);
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <h3>Pagination from FE</h3>
      {currentUser.map((user) => {
        return (
          <>
            <h3>{user.firstName}</h3>
            <p>{user.age}</p>
          </>
        );
      })}
      <button onClick={handlePrev} disabled={page <= 1}>
        prev
      </button>
      {page}
      <button onClick={handleNext}>next</button>
    </>
  );
};
export default PaginationFE;
