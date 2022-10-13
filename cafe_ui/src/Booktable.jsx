import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import Main from "./components/main";
import Book from "./components/book";
import ThankYou from "./components/thankYou";
import Navbar from "./components/navbar";

export default _ => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
    </div>
  );
};
