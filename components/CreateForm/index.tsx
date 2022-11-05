import React, { useEffect, useRef, useState } from 'react';
import reactDOM from 'react-dom';
import ButtonPrimary from '../Common/ButtonPrimary';

const CreateForm = () => {
  return (
    <form className="mt-6">
      <div className="mb-6 flex justify-start" id="dropdownCategory">
        <div>
          <div className="dropend relative">
            <button
              className="
              dropdown-toggle
              flex
              items-center
              whitespace-nowrap
              rounded
              bg-purple-800
              px-6
              py-2.5
              text-xs
              font-medium
              uppercase
              leading-tight text-white
              shadow-md transition duration-150 ease-in-out
              hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800
              active:text-white
              active:shadow-lg
              "
              type="button"
              id="dropdownMenuButton1e"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pick a category
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-right"
                className="ml-2 w-1.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
              >
                <path
                  fill="currentColor"
                  d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                ></path>
              </svg>
            </button>
            <ul
              className="
              dropdown-menu
              absolute
              z-50
              float-left
              m-0
              mt-1
              hidden
              hidden
              min-w-max
              list-none
              rounded-lg
              border-none
              bg-white
              bg-clip-padding
              py-2
              text-left
              text-base
              shadow-lg
              "
              aria-labelledby="dropdownMenuButton1e"
            >
              <li>
                <a
                  className="
                  dropdown-item
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  py-2
                  px-4
                  text-sm
                  font-normal
                  text-gray-700
                  hover:bg-gray-100
                  "
                  href="#"
                >
                  Makeup
                </a>
              </li>
              <li>
                <a
                  className="
                  dropdown-item
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  py-2
                  px-4
                  text-sm
                  font-normal
                  text-gray-700
                  hover:bg-gray-100
                  "
                  href="#"
                >
                  Costumes
                </a>
              </li>
              <li>
                <a
                  className="
                  dropdown-item
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  py-2
                  px-4
                  text-sm
                  font-normal
                  text-gray-700
                  hover:bg-gray-100
                  "
                  href="#"
                >
                  Party
                </a>
              </li>
              <li>
                <a
                  className="
                  dropdown-item
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  py-2
                  px-4
                  text-sm
                  font-normal
                  text-gray-700
                  hover:bg-gray-100
                  "
                  href="#"
                >
                  Recipe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <fieldset>
        <div>
          <label htmlFor="title">
            <div className="text-xl font-semibold">Spook Title:</div>
            <input
              className="h-10 w-full rounded border-2"
              type="text"
              id="title"
              name="title"
              required
              value=""
              onChange={(e) => {
                // this.setState({ username: e.target.value });
              }}
            />
            {/* {this.state.incorrectUsername && (
                  <ErrorMessage message={this.state.error} />
                )} */}
          </label>
          <label htmlFor="desc">
            <div className="mt-3 rounded text-xl font-semibold">
              Spook Description:
            </div>
            <input
              className="h-10 w-full border-2"
              type="text"
              id="desc"
              name="desc"
              //   value={this.state.password}
              onChange={(e) => {
                // this.setState({ password: e.target.value });
              }}
            />
            {/* {this.state.incorrectPassword && (
                  <ErrorMessage message={this.state.error} />
                )} */}
          </label>
          <label htmlFor="uploadMedia">
            <div className="mt-3 rounded text-xl font-semibold">
              Upload Spooky Visuals:
            </div>
            <input
              className="h-10 w-full border-2"
              type="file"
              id="uploadMedia"
              name="uploadMedia"
              //   value={this.state.password}
              onChange={(e) => {
                // this.setState({ password: e.target.value });
              }}
            />
            {/* {this.state.incorrectPassword && (
                  <ErrorMessage message={this.state.error} />
                )} */}
          </label>
          <div className="mt-6">
            <ButtonPrimary>SPOOK THEM OUT!</ButtonPrimary>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default CreateForm;
