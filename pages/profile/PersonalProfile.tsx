import type { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../../components';

const PersonalProfile: NextPage = () => {
  const [fullName, setFullName] = useState('Chau Tran');
  const [userName, setUserName] = useState('cmtran');
  const [password, setPassword] = useState('123');
  const [birthday, setBirthday] = useState('7/3/1995');
  const [phoneNum, setPhoneNum] = useState('0984454343');

  return (
    <PageLayout>
      <div className="container mx-auto">
        <h1>Personal Information</h1>
        <form
          action="/send-data-here"
          method="post"
          className="mt-20 max-w-7xl"
        >
          <fieldset>
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className=" mb-8 flex flex-row justify-around"
              >
                <div>
                  <div className="font-semibold">Full Name:</div>
                  <input
                    className="max-w-sm focus:outline-0"
                    type="text"
                    id="fullname"
                    name="fullname"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <button>Edit</button>
              </label>
              <label
                htmlFor="username"
                className="mb-8 flex flex-row justify-around"
              >
                <div>
                  <div className="font-semibold">Username:</div>
                  <input
                    className="max-w-sm  focus:outline-0"
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <button>Edit</button>
              </label>

              <label
                htmlFor="password"
                className="mb-8 flex flex-row  justify-around"
              >
                <div>
                  <div className="font-semibold">Password:</div>
                  <input
                    className="max-w-sm focus:outline-0"
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button>Edit</button>
              </label>

              <label
                htmlFor="birthday"
                className="mb-8 flex flex-row justify-around "
              >
                <div>
                  <div className="font-semibold">Birth Date:</div>
                  <input
                    className="max-w-sm  focus:outline-0"
                    type="date"
                    id="bday"
                    name="bday"
                    required
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <button>Edit</button>
              </label>

              <label
                htmlFor="phoneNum"
                className="mb-8 flex flex-row justify-around "
              >
                <div>
                  <div className="font-semibold">Phone Number:</div>
                  <input
                    className="max-w-sm  focus:outline-0"
                    type="phoneNum"
                    id="phoneNum"
                    name="phoneNum"
                    required
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div>
                <button>Edit</button>
              </label>

              <button className="" type="submit">
                SAVE
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </PageLayout>
  );
};

export default PersonalProfile;
