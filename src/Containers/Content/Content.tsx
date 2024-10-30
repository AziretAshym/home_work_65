import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosAPI from '../../AxiosAPI.ts';
import { IPage } from '../../types';
import Page from '../../Componets/Page/Page.tsx';

const Content = () => {
  const params = useParams<{ pageName: string }>();
  const [page, setPage] = useState<IPage | null>(null);

  const fetchPageData = useCallback(async () => {
    try {
      const response = await axiosAPI<IPage>(`pages/${params.pageName}.json`);
      if (response.data) {
        setPage(response.data);
      } else {
        setPage(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
    }
  }, [params.pageName]);

  useEffect(() => {
    void fetchPageData();
  }, [fetchPageData]);


  return page ? (
    <Page title={page.title} subtitle={page.subtitle} content={page.content} />
  ) : (
    <Page title="Page Not Found" subtitle="" content="" />
  );
};

export default Content;
