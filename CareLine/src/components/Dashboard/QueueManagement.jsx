import React, { useState } from 'react';
import PatientForm from './PatientForm';
import PatientList from './PatientList';
import PatientDetails from './PatientDetails';

export default function QueueManagement({
    patients,
    nextId,
    commonWaitList,
    urgentWaitList,
    selectedPatientId,
    calledPatient,
    insurances,
    onCreatePatient,
    onViewDetails,
    onUpdateReport,
    onCallNextPatient
}) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        insurance: '',
        symptoms: '',
        temperature: '',
        urgency: 'comum'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreatePatient(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            insurance: '',
            symptoms: '',
            temperature: '',
            urgency: 'comum'
        });
        setShowForm(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Gestão de Fila</h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {showForm ? 'Cancelar' : 'Adicionar Paciente'}
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Endereço</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Convênio</label>
                            <select
                                name="insurance"
                                value={formData.insurance}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="">Selecione o Convênio</option>
                                {insurances.map(insurance => (
                                    <option key={insurance} value={insurance}>
                                        {insurance}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Temperatura</label>
                            <input
                                type="number"
                                step="0.1"
                                name="temperature"
                                value={formData.temperature}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Sintomas</label>
                            <textarea
                                name="symptoms"
                                value={formData.symptoms}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Urgência</label>
                            <select
                                name="urgency"
                                value={formData.urgency}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="comum">Comum</option>
                                <option value="urgente">Urgente</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Adicionar Paciente
                        </button>
                    </div>
                </form>
            )}

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Fila de Urgência</h3>
                    <div className="space-y-2">
                        {urgentWaitList.map(patient => (
                            <div
                                key={patient.id}
                                className={`p-3 rounded ${
                                    selectedPatientId === patient.id ? 'bg-blue-100' : 'bg-gray-50'
                                }`}
                                onClick={() => onViewDetails(patient.id)}
                            >
                                <p className="font-medium">{patient.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Fila Comum</h3>
                    <div className="space-y-2">
                        {commonWaitList.map(patient => (
                            <div
                                key={patient.id}
                                className={`p-3 rounded ${
                                    selectedPatientId === patient.id ? 'bg-blue-100' : 'bg-gray-50'
                                }`}
                                onClick={() => onViewDetails(patient.id)}
                            >
                                <p className="font-medium">{patient.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={onCallNextPatient}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                >
                    Chamar Próximo Paciente
                </button>
            </div>

            {calledPatient && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Em Atendimento</h3>
                    <div className="p-3 bg-blue-100 rounded">
                        <p className="font-medium">{calledPatient.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
} 