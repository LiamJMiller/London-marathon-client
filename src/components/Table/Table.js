import "./Table.scss";
import TableFields from "../TableFields/TableFields";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function Table({ athletes }) {
  return (
    <section className="table">
      <TableHeader />
      <TableFields />
      <TableRow /> {/* Map athletes to TableRows */}
    </section>
  );
}

export default Table;
