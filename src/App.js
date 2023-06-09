import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";
import { useState, useEffect, useCallback } from "react";

function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("childName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.childName.toLowerCase().includes(query.toLowerCase()) ||
        item.parentName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    }
  )
  .sort((a, b) => {
    let order = (orderBy === "asc") ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    );
  });

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3"><BiCalendar className="inline-block text-red-400 align-top"/>Tiny Tots Pediatrics: Upcoming Appointments</h1>
      <AddAppointments
        onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
        lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}

      />
      <Search query = { query }
        onQueryChange = { myQuery => setQuery(myQuery) }
        orderBy = { orderBy }
        onOrderByChange = { mySort => setOrderBy(mySort) }
        sortBy = { sortBy }
        onSortByChange = { mySort => setSortBy(mySort) }
        />

      <ul className="divide-y divide-gray-200">
        {filteredAppointments
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={
                appointmentId => setAppointmentList(
                  appointmentList.filter(appointment => appointment.id !== appointmentId)
                )
              } />
        ))}
      </ul>

    </div>
  );
}

export default App;
