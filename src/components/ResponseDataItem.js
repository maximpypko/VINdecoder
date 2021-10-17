function ResponseDataItem({ element }) {
  return (
    <tr className="content_table-row">
      <td className="content_table-item">{element.Variable}</td>
      <td className="content_table-item">{element.Value}</td>
    </tr>
  );
}

export default ResponseDataItem;
