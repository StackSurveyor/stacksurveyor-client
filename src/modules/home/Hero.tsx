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
import SurveyForm from "../../img/undraw_customer_survey_form.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-body relative">
        <div className="hero-content absolute">
          <h1 className="text-lg text-white">
            PREMIUM SURVEYS NOW FREE
            <br />
            FOR EVERYONE
          </h1>
          <p className="text-xl text-white pt-10">
            We have engineered the service for creating
            <br /> and taking premium, simple and secure surveys from
            <br />
            the ease of the world.
          </p>
          <form>
            <div>
              <input
                className="mt-16 px-5"
                placeholder="HAVE A SURVEY CODE? ENTER HERE"
                type="text"
                maxLength={6}
              />
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </form>
        </div>
        <div className="animatedParent">
          <img
            className="absolute animated fadeInRight"
            src={SurveyForm}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
