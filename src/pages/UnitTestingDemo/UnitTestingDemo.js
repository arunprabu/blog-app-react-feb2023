import React from 'react'
import CompanyInfo from './CompanyInfo/CompanyInfo';
import ContactForm from './ContactForm/ContactForm';
import Counter from './Counter/Counter';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const UnitTestingDemo = () => {
  return (
    <div>
      <h1>Unit Testing Examples!</h1>
      <a href="https://reactjs.org/docs/testing.html">Unit Testing Reference</a>
      <hr/>
      <CompanyInfo foundedYear="1994" foundedPlace='Chennai'/>
      <hr/>
      <Counter />
      <hr/>
      <ContactForm />
      <hr/>
      <Users />

      <hr/>
      <Posts />

    </div>
  );
}

export default UnitTestingDemo