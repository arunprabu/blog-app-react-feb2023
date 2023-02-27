import React from 'react'
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';

const UnitTestingDemo = () => {
  return (
    <div>
      <h1>Unit Testing Examples!</h1>
      <a href="https://reactjs.org/docs/testing.html">Unit Testing Reference</a>
      <hr/>
      <CompanyInfo foundedYear="1994" foundedPlace='Chennai'/>
      <hr/>
      <Counter />

    </div>
  );
}

export default UnitTestingDemo