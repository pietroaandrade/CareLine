import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/footer"
import Main from "./components/Landing"
import Contact from "./components/Contact"
import Servicos from "./components/Servicos"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar/Navbar"
import QueueManagement from "./components/Dashboard/QueueManagement"
import PatientsOverview from "./components/Dashboard/PatientsOverview"
import Sobre from "./components/Sobre"

function App() {
  const [patients, setPatients] = useState({});
  const [nextId, setNextId] = useState(1);
  const [commonWaitList, setCommonWaitList] = useState([]);
  const [urgentWaitList, setUrgentWaitList] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [calledPatient, setCalledPatient] = useState(null);

  const insurances = ["porto seguro", "bradesco", "amil", "sulamérica", "unimed"];

  const createPatient = (patientData) => {
    const id = nextId;
    const newPatient = {
      id,
      name: patientData.name,
      email: patientData.email,
      phone: patientData.phone,
      address: patientData.address,
      insurance: patientData.insurance,
      symptoms: patientData.symptoms,
      temperature: patientData.temperature,
      report: { laudo: "", receita: "", mensagem: "" }
    };

    setPatients(prevPatients => ({
      ...prevPatients,
      [id]: newPatient
    }));
    setNextId(prevId => prevId + 1);

    if (patientData.urgency === 'urgente') {
      setUrgentWaitList(prevList => [...prevList, { name: patientData.name, id }]);
    } else {
      setCommonWaitList(prevList => [...prevList, { name: patientData.name, id }]);
    }
  };

  const viewPatientDetails = (id) => {
    setSelectedPatientId(id);
  };

  const updatePatientReport = (patientId, reportData) => {
    setPatients(prevPatients => ({
      ...prevPatients,
      [patientId]: {
        ...prevPatients[patientId],
        report: reportData
      }
    }));
  };

  const callNextPatient = () => {
    if (urgentWaitList.length > 0) {
      const [nextPatient] = urgentWaitList;
      setUrgentWaitList(prevList => prevList.slice(1));
      setCalledPatient(nextPatient);
      setSelectedPatientId(nextPatient.id);
    } else if (commonWaitList.length > 0) {
      const [nextPatient] = commonWaitList;
      setCommonWaitList(prevList => prevList.slice(1));
      setCalledPatient(nextPatient);
      setSelectedPatientId(nextPatient.id);
    } else {
      alert('No patients in the waiting list.');
      setCalledPatient(null);
      setSelectedPatientId(null);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/services"
        element={
          <>
            <Header />
            <Servicos />
            <Footer />
          </>
        }
      />
      <Route
        path="/sobre"
        element={
          <>
            <Header />
            <Sobre />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div className="flex h-screen bg-gray-100">
              <Navbar />
              <main className="flex-1 p-4 overflow-y-auto">
                <QueueManagement
                  patients={patients}
                  nextId={nextId}
                  commonWaitList={commonWaitList}
                  urgentWaitList={urgentWaitList}
                  selectedPatientId={selectedPatientId}
                  calledPatient={calledPatient}
                  insurances={insurances}
                  onCreatePatient={createPatient}
                  onViewDetails={viewPatientDetails}
                  onUpdateReport={updatePatientReport}
                  onCallNextPatient={callNextPatient}
                />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <div className="flex h-screen bg-gray-100">
              <Navbar />
              <main className="flex-1 p-4 overflow-y-auto">
                <PatientsOverview
                  patients={patients}
                  selectedPatientId={selectedPatientId}
                  onViewDetails={viewPatientDetails}
                  onUpdateReport={updatePatientReport}
                />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;