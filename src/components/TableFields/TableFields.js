import "./TableFields.scss";

const TableFields = () => {
  return (
    <div className="table-fields">
      <input
        type="checkbox"
        className="table-fields__checkbox"
        id=""
        name=""
        value=""
      />
      <h4 className="table-fields__item table-fields__item--first-name">First Name</h4>
      <h4 className="table-fields__item table-fields__item--last-name">Last Name</h4>
      <h4 className="table-fields__item table-fields__item--contact">Contact</h4>
      <h4 className="table-fields__item table-fields__item--event">Event</h4>
      <h4 className="table-fields__item table-fields__item--attendance-status">Attendance Status</h4>
      <h4 className="table-fields__item table-fields__item--age">Age</h4>
      <h4 className="table-fields__item table-fields__item--wheelchair-ambulant">Wheelchair/Ambulant</h4>
      <h4 className="table-fields__item table-fields__item--borough">Borough</h4>
    </div>
  );
};

export default TableFields;
