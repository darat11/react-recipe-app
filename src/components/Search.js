import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slated text-capitalize">
              search recipes with{" "}
              <strong className="text-orange">Food2Fork</strong>
            </h1>
            <form className="mt-4"></form>
            <label htmlFor="search" className="text-capitalize">
              type recipes seperated with comma
            </label>
            <div className="input-group">
              <input
                type="text"
                name="search"
                className="form-control form-control-lg"
                placeholder="chicken,onion,carrots"
                value={search}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="input-group-text bg-primary text-white"
                  onClick={handleSubmit}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
