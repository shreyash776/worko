import React, { useContext, useEffect, useState } from 'react';
import { ReferralContext } from '../context/ReferralContext';

const ReferralPage = () => {
  const [companies, setCompanies] = useState([]);
  const { addReferral } = useContext(ReferralContext);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    salary: '',
    message: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCompanies();
  }, [searchTerm]);

  const fetchCompanies = async () => {
    try {
      let url = 'https://worko-backend-2.onrender.com/api/companies';
      if (searchTerm) {
        url = `https://worko-backend-2.onrender.com/api/companies/search?name=${encodeURIComponent(searchTerm)}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch companies')
      }
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleRequestClick = (company) => {
    setFormData({ ...formData, company });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReferral(formData.company, formData.role, formData.salary);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-custom-gradient p-8">
      <h1 className="text-[#57E1E1] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
        Get referred to over 1000+ companies
      </h1>
      <p className="text-[#d4fafa] text-opacity-70 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 text-center max-w-2xl">
        Select a company you want a referral for. Enter the URL for the job posting that you want, and send your profile off to our referral.
      </p>
      <div className="w-full sm:w-2/3 md:w-1/3 mb-8">
        <input
          type="text"
          placeholder="Search for a company..."
          className="w-full p-3 rounded-lg shadow-lg border-4 border-[#47C1C1] hover:border-[#47C1C1]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {companies.map((company, index) => (
          <div key={index} className="border-8 border-[#57E1E1] bg-white p-4 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-black mb-4">{company.name}</h2>
            <p className="text-sm font text-black mb-4">{company.
              description}</p>

            <button
              className="border-2 border-[#57E1E1] text-[#57E1E1] hover:bg-[#57E1E1] hover:text-white font-bold py-2 px-4 rounded"
              onClick={() => handleRequestClick(company.name)}
            >
              Request Referral
            </button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Request Referral</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Job Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Enter job role"
                  className="w-full p-2 border-2 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Expected Salary</label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="Enter expected salary"
                  className="w-full p-2 border  border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#57E1E1] hover:bg-[#47C1C1] text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralPage;
