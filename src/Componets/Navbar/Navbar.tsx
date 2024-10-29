import React, { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../AxiosAPI.ts';
import { IPage, IPageAPI } from '../../types';

const Navbar = () => {
  const [pages, setPages] = useState<IPage[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosAPI<IPageAPI>('pages.json');
      if (response.data) {
        const titleFromAPI: IPage[] = Object.keys(response.data).map(pageKey => ({
          id: pageKey,
          ...response.data[pageKey],
        }));
        setPages(titleFromAPI)
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-center">
            <div className="navbar-nav fs-3 gap-5">
              {pages.map((page) => (
                <>
                  <a key={page.title} className="nav-link text-white" href="#">{page.title}</a>
                </>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;