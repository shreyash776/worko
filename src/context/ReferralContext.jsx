import React, { createContext, useState, useEffect } from 'react';

const ReferralContext = createContext();

const ReferralProvider = ({ children }) => {
  const [referrals, setReferrals] = useState(() => {
    const savedReferrals = localStorage.getItem('referrals');
    return savedReferrals ? JSON.parse(savedReferrals) : [];
  });

  useEffect(() => {
    localStorage.setItem('referrals', JSON.stringify(referrals));
  }, [referrals]);

  const addReferral = (company, role, salary) => {
    setReferrals([...referrals, { company, role, salary }]);
  };

  return (
    <ReferralContext.Provider value={{ referrals, addReferral }}>
      {children}
    </ReferralContext.Provider>
  );
};

export { ReferralContext, ReferralProvider };
