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
import { Helmet } from "react-helmet";

interface Props {
  page: React.FC;
  title: string;
}

export const PageWrapper: React.FC<Props> = ({ page, title }) => {
  // Page wrapper component
  // Renders the page passed down as prop, along with dynamic title
  return (
    <>
      <Helmet>
        <title>{title} - StackSurveyor</title>
      </Helmet>
      {React.createElement(page)}
    </>
  );
};
