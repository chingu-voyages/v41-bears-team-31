import React, { useEffect, useRef, useState } from 'react';
import reactDOM from 'react-dom';
import ButtonPrimary from '../Common/ButtonPrimary';

const Login = () => {
  return (
    <form className="mt-6 " onSubmit={(e) => {}}>
      <fieldset>
        <div className="">
          <label htmlFor="username">
            <div className="text-xl font-semibold">* Username:</div>
            <input
              className="h-8 w-full rounded border-2"
              type="text"
              id="username"
              name="username"
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
          <label htmlFor="password">
            <div className="mt-3 rounded text-xl font-semibold">
              * Password:
            </div>
            <input
              className="h-8 w-full border-2"
              type="password"
              id="password"
              name="password"
              required
              //   value={this.state.password}
              onChange={(e) => {
                // this.setState({ password: e.target.value });
              }}
            />
            {/* {this.state.incorrectPassword && (
                  <ErrorMessage message={this.state.error} />
                )} */}
          </label>
          <div className="mt-4">
            <ButtonPrimary>SUBMIT</ButtonPrimary>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Login;
