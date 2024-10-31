import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosAPI from '../../AxiosAPI.ts';
import { IPage } from '../../types';
import Page from '../../Componets/Page/Page.tsx';
import Loader from '../../Componets/Ui/Loader/Loader.tsx';


const Content = () => {
  const params = useParams<{ pageName: string }>();
  const [page, setPage] = useState<IPage | null>(null);
  const [loading, setLoading] = useState<boolean>(false)


  const fetchPageData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosAPI<IPage>(`pages/${params.pageName}.json`);
      if (response.data) {
        setPage(response.data);
      } else {
        setPage(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [params.pageName]);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchPageData();
    }
  }, [fetchPageData, location]);


  return (
    <>
      {loading ? <Loader /> : (
        <>
          {page ? <Page title={page.title} subtitle={page.subtitle} content={page.content} /> : (
            <Page title="Page Not Found" subtitle="" content="" />
          )}
        </>
      )}
    </>
  );

};

export default Content;
