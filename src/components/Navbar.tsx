//	Copyright (C) 2021  StackSurveyor
//
//	This program is free software: you can redistribute it and/or modify
//	it under the terms of the GNU General Public License as published by
//	the Free Software Foundation, either version 3 of the License, or
//	(at your option) any later version.
//
//	This program is distributed in the hope that it will be useful,
//	but WITHOUT ANY WARRANTY; without even the implied warranty of
//	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//	GNU General Public License for more details.
//
//	You should have received a copy of the GNU General Public License
//	along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React from "react";

import NavLogo from "../img/logo.png";

export const Navbar: React.FC = () => {
  return (
    <section className="navbar-section">
      <nav className="bg-white shadow-lg font-poppins">
        <div>
          <div className="flex flex-wrap justify-end ">
            <a
              href="/"
              className="flex-1 mr-auto text-black text-3xl font-semibold py-7"
            >
              <img
                alt="StackSurveyor"
                className="ml-10 pr-10 h-8"
                draggable={false}
                src={NavLogo}
              />
            </a>
            <ul className="text-black-400 sm:self-center text-xl border-t sm:border-none flex-wrap">
              <li className="sm:inline-block px-4">
                <a href="/" className="p-3">
                  Log In
                </a>
              </li>
              <li className="sm:inline-block px-4">
                <a href="/" className="p-3">
                  Sign Up
                </a>
              </li>
              <li className="sm:inline-block pl-4">
                <a
                  href="/"
                  className="nav-button h-full hover:text-white bg-blurple shadow-lg text-white px-7"
                >
                  Create Survey
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
