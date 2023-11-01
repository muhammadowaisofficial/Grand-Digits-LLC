import React from 'react'
import GetStartedForm from './Forms/GetStartedForm'

const GetStarted = () => {
  return (
    <section className="section Get_Started bg-darkpurpule">
        <div className="heading">
            <h3 className="section_mainheading text-center text-white">Get in touch</h3>
            <p className="section_description text-center text-white">Feel free to contact us regarding any query. We will be happy to serve you at our best.</p>
          </div>

          {/* Get Started Form */}
          <GetStartedForm darkmode={false} />

    </section>
  )
}

export default GetStarted