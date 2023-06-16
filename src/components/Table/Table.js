import "./Table.scss";
import TableFields from "../TableFields/TableFields";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function Table({ category, athletes, setSelectedAthletes, selectedAthletes }) {
  return (
    <section className="table">
      <TableFields athletes={athletes} />

      {category === "registered" &&
        athletes
          .filter((athlete) => athlete.attendance_status !== "Waitlist")
          .map((athlete) => (
            <TableRow
              category={category}
              athlete={athlete}
              selectedAthletes={selectedAthletes}
              setSelectedAthletes={setSelectedAthletes}
            />
          ))}

      {category === "waitlist" &&
        athletes
          .filter((athlete) => athlete.attendance_status === "Waitlist")
          .map((athlete) => (
            <TableRow
              category={category}
              athlete={athlete}
              selectedAthletes={selectedAthletes}
              setSelectedAthletes={setSelectedAthletes}
            />
          ))}
    </section>
  );
}

export default Table;
