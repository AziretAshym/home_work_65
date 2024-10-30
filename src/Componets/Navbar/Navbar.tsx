import React, { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../AxiosAPI.ts';
import { IPage, IPageAPI } from '../../types';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [pages, setPages] = useState<IPage[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosAPI<IPageAPI>('pages.json');
      if (response.data) {
        const dataFromAPI: IPage[] = Object.keys(response.data).map((pageKey) => ({
          id: pageKey,
          ...response.data[pageKey],
        }));
        setPages(dataFromAPI);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-5">
      <div className="container">
        <div className="collapse navbar-collapse d-flex justify-content-center">
          <div className="navbar-nav fs-3 gap-5">
            {pages.map((page) => (
              <NavLink
                to={`/pages/${page.title.toLowerCase()}`}
                key={page.title}
                className="nav-link text-white link-info"
              >
                {page.title}
              </NavLink>
            ))}
          </div>
          <a className="fs-3 nav-link text-white link-info ms-auto pointer-event">Admin</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
