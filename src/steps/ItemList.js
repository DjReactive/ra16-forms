import React from 'react'
import { defaultItem } from './defines';

function ItemList({results, onChange, onEditForm, form}) {
  return (
    <table className="listing">
      <tbody>
      {
        results.length > 0 ?
        results.map(o =>
        <Item key={o.id}
          id={o.id}
          item={o}
          highlight={form.id === o.id}
          allItems={results}
          onChange={onChange}
          onEditForm={onEditForm}
        />) :
        <Item item={defaultItem} />
      }
      </tbody>
    </table>
  )
}

function Item({item, id, highlight, allItems, onChange, onEditForm}) {
  return (
    <tr colSpan={ !item.distance ? '3' : 'false' } className={highlight && 'choosen'}>
      <td>{ item.date }</td>
      { item.distance && <td>{ item.distance }</td> }
      { item.distance && <td>
        <ItemOptions
          id={id}
          allItems={allItems}
          onChange={onChange}
          onEditForm={onEditForm}
        />
      </td> }
    </tr>
  );
}

function ItemOptions({id, allItems, onChange, onEditForm}) {
  const onEdit = () => {
    const [form] = allItems.filter(o => o.id === id);
    onEditForm({ ...form, edit: true });
  }
  const onRemove = () => onChange(prevResults => prevResults.filter(o => o.id !== id));
  return (
    <React.Fragment>
      <button className="button_option" onClick={onEdit}>{`\u{1F589}`}</button>
      <button className="button_option" onClick={onRemove}>{`\u{2716}`}</button>
    </React.Fragment>
  );
}

export default ItemList;
