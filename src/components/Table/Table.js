import TableFields from "../TableFields/TableFields";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function Table({ athletes }) {
  return (
    <>
      <TableHeader />
      <TableFields />
      <TableRow /> {/* Map athletes to TableRows */}
    </>
  );
}

export default Table;
