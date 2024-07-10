import React, { useContext } from 'react';
import { ReferralContext } from '../context/ReferralContext';

const RequestedList = () => {
  const { referrals } = useContext(ReferralContext);

  return (
    <div className="min-h-screen flex flex-col items-center bg-custom-gradient p-8">
      <h1 className="text-[#57E1E1] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
        Requested Referrals
      </h1>
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        {referrals.length === 0 ? (
          <p className="text-gray-200 text-center">No referrals requested yet.</p>
        ) : (
          <ul className="bg-white bg-opacity-50 p-4 rounded-lg shadow-lg w-full">
            {referrals.map((referral, index) => (
              <li key={index} className="mb-4">
                <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-md text-white">
                  <h2 className="text-xl font-bold mb-2">{referral.company}</h2>
                  <p className="text-md mb-1">
                    <strong>Role:</strong> {referral.role}
                  </p>
                  <p className="text-md mb-1">
                    <strong>Expected Salary:</strong> {referral.salary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RequestedList;
