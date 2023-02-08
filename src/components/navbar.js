import React, { Component, useState } from "react";

const Navbar = (props) => {
  const onTrigger = (event) => {
    event.preventDefault();
    props.parentCallback(event.target.search.value);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark mb-10"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dummy Products
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products per Page
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      onClick={() => props.changeLimit(10)}
                      className="dropdown-item"
                      href="#"
                    >
                      10
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => props.changeLimit(20)}
                      className="dropdown-item"
                      href="#"
                    >
                      20
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => props.changeLimit(30)}
                      className="dropdown-item"
                      href="#"
                    >
                      30
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => props.changeLimit(50)}
                      className="dropdown-item"
                      href="#"
                    >
                      50
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={onTrigger}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
