import "./Table.scss";
import TableFields from "../TableFields/TableFields";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function Table({ category, athletes }) {

  return (
    <section className="table">
      <TableFields athletes={athletes}/>

      {athletes
        .filter(athlete => athlete.attendance_status !== "Waitlist")
        .map(athlete => <TableRow category={category} athlete={athlete}/>)}
    </section>
  );
}

export default Table;