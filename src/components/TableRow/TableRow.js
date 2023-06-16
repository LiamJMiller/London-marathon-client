import "./TableRow.scss";

const TableRow = ({ athlete }) => {
  return (
    <div className="table-row">
      <input className="table-row__col table-row__checkbox" type="checkbox" />
      <p className="table-row__col table-row__col--first-name">{athlete.first_name}</p>
      <p className="table-row__col table-row__col--last-name">{athlete.last_name}</p>
      <p className="table-row__col table-row__col--contact">{athlete.contact}</p>
      <p className="table-row__col table-row__col--event">{athlete.event}</p>
      <p className="table-row__col table-row__col--attendance-status">{athlete.attendance_status}</p>
      <p className="table-row__col table-row__col--age">{athlete.age}</p>
      <p className="table-row__col table-row__col--wheelchair-ambulant">{athlete.wheelchair_ambulant}</p>
      <p className="table-row__col table-row__col--borough">{athlete.borough}</p>
    </div>
    );
};

export default TableRow;
