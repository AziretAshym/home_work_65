import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosAPI from '../../AxiosAPI.ts';
import PageForm from '../../Componets/PageForm/PageForm.tsx';
import { IPage, IPageAPI } from '../../types';

const EditPage: React.FC = () => {
  const [pages, setPages] = useState<IPageAPI | null>(null);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [pageData, setPageData] = useState<IPage | null>(null);
  const navigate = useNavigate();

  const fetchPages = useCallback(async () => {
    try {
      const response = await axiosAPI.get<IPageAPI>('pages.json');
      setPages(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);

  const pageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageKey = event.target.value;
    setSelectedPage(pageKey);
    setPageData(pages ? pages[pageKey] : null);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setPageData((prevState) => (prevState ? { ...prevState, [id]: value } : prevState));
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPage && pageData) {
      try {
        await axiosAPI.put(`pages/${selectedPage}.json`, pageData);
        navigate(`/pages/${selectedPage}`);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Edit page</h2>
      <PageForm
        selectedPage={selectedPage}
        pageData={pageData}
        onPageSelect={pageSelect}
        onInputChange={inputChange}
        onSave={save}
      />
    </div>
  );
};

export default EditPage;
