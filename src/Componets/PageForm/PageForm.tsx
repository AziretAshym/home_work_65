import React from 'react';
import { IPage } from '../../types';

interface Props {
  selectedPage: string | null;
  pageData: IPage | null;
  onPageSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: (event: React.FormEvent) => void;
}

const PageForm: React.FC<Props> = ({ selectedPage, pageData, onPageSelect, onInputChange, onSave }) => {
  return (
    <div className="container w-50">
      <form onSubmit={onSave}>
        <div className="mb-3">
          <select className="form-select" value={selectedPage || ''} onChange={onPageSelect}>
            <option disabled value="">Choose page</option>
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="news">News</option>
            <option value="gallery">Gallery</option>
            <option value="contacts">Contacts</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Page title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={pageData?.title || ''}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subtitle" className="form-label">Page subtitle</label>
          <input
            type="text"
            className="form-control"
            id="subtitle"
            value={pageData?.subtitle || ''}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Page content</label>
          <textarea
            className="form-control"
            id="content"
            rows={3}
            value={pageData?.content || ''}
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default PageForm;
