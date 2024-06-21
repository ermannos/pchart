/*
    Copyright (C) 2019-2024  Ermanno Scanagatta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import React from "react";
import Store from "../store/Store";

export const StoreContext = React.createContext<Store | undefined>(undefined);

export const StoreProvider: React.FC<{ value: Store, children: React.ReactNode }> = ({ value, children }) => {
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore(): Store | undefined {
  const context = React.useContext(StoreContext);
  return context;
}
