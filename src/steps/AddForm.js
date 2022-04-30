import { useState } from 'react';
import { nanoid } from 'nanoid';
import { defValues } from './defines';

function AddForm({form, setForm, onChange}) {

  const handleCancel = () => setForm(defValues);
  const handleOnChange = evt => {
    evt.preventDefault();
    setForm({ ...form, [evt.target.id]: evt.target.value });
  }
  const handleSubmit = evt => {
    if (Number(form.distance) <= 0 || !form.date) {
      alert('Error!');
      return;
    }
    // Удалим свойство для корректной работы
    onChange({...form, id: form.id ? form.id : nanoid()}, form.edit && true);
    // Сброс формы
    setForm(defValues);
  }

  return (
    <form className="form" onSubmit={evt => evt.preventDefault()}>
      <table className="form_table">
        <tr>
          <td>Дата (ДД.ММ.ГГГГ)</td>
          <td>Пройдено КМ</td>
          <td></td>
        </tr>
        <tr>
          <td><input type="date" id="date" value={form.date} onChange={handleOnChange} /></td>
          <td>
            <input
              type="number"
              min="0.1"
              max="9999.9"
              id="distance"
              value= {form.distance}
              onChange={handleOnChange} />
          </td>
          <td>
            <button className="button" onClick={handleSubmit}>{ form.edit ? 'Изменить' : 'OK'}</button>
            {
              form.edit &&
              <button className="button" onClick={handleCancel}>Отмена</button>
            }
          </td>
        </tr>
      </table>
    </form>
  )
}

export default AddForm;
