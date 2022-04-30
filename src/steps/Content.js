import { useState } from 'react';
import AddForm from './AddForm';
import ItemList from './ItemList';
import { defValues } from './defines';

function Content() {
  const [form, setForm] = useState(defValues);
  const [results, setResults] = useState([]);

  const handleChange = (data, edit = false) => setResults(prev =>
    edit ? prev.map(o => o.id === data.id ? data : o) : [...prev, data]
  );
  return (
    <div className="content">
      <AddForm onChange={handleChange} setForm={setForm} form={form} />
      <ItemList results={results} onChange={setResults} onEditForm={setForm} form={form} />
    </div>
  );
}

export default Content;
