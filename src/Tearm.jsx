import React from 'react'

export default function Tearm() {
  return (
    <div className='md:px-[10%] max-md:px-[3%] flex justify-center items-center  flex-col py-[2rem]'>
    <div className="header pb-[2rem]">
        <h1 className='text-3xl font-bold '>TERMS & CONDITIONS </h1>
    </div>
    <div>
        <ol>
            <li>
                <div className="head">
                    <h1>1. Introduction</h1>
                </div>
                <div>
                    <h4>1.1.  Learners IT Academy offers online IT-related courses and training programs. These Terms and Conditions govern your use of our website and services.</h4>
                    
                </div>
    
            </li>
            <li>
                <div className="head">
                    <h1>2.  Definitions</h1>
                </div>
                <div>
                    <h4>2.1 "Company", "We", "Our", and "Us" refer to Learners IT Academy.</h4>
                  
                </div>
                <div>
                   <h4>2.2. "User", "You", and "Your" refer to the person accessing our website and enrolling in our courses.</h4>
                    
                </div>
                <div>
                    <h4>2.3. "Services" refer to the online courses, training programs, and any other services provided by [Company Name].</h4>
                </div>
            </li>
            <li>
                <div className="head">
                    <h1>3.  Eligibility</h1>
                </div>
                <div>
                    <h4>3.1. You must be at least 15+ years of age to use our services.
                    </h4>
                    <h4>3.2. By using our services, you represent and warrant that you meet all eligibility requirements and have the legal capacity to enter into this agreement.</h4>
                 
                </div>
            
            </li>

            <li>
                <div className="head">
                    <h1>4.  Account Registration</h1>
                </div>
                <div>
                    <h4>4.1. To access certain features of our services, you may need to create an account.</h4>
                   
                    <h4>4.2. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</h4>
                    <h4>4.3. You are responsible for safeguarding your password and any activities or actions under your account.</h4>
                </div>
            </li>
            
            <li style={{display: "flex" ,flexDirection:' column',gap: '10px',letterSpacing:' 1px'}}>
                <div className="head">
                    <h1>5. User Responsibilities</h1>
                </div>
                <div>
                    <h4>
                        5.1. You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.
                    </h4>
                    <h4>
                        5.2. You agree not to use our services:
                        </h4>
                            <ul>
                                <li>
                                    In any way that violates any applicable federal, state, local, or international law or regulation.
                                </li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                            </ul>
                </div>
               
            </li>

            <li>
                <div className="head">
                    <h1>6. Course Enrolment and Payment</h1>
                </div>
                <div>
                    <h4>6.1. All course fees must be paid in full before you access the course content.</h4>
                   
                    <h4>6.2. Payment can be made through the payment methods provided on our website.</h4>
                    <h4>6.3. We reserve the right to change our course fees at any time.</h4>
                </div>
            </li>

            <li>
                <div className="head">
                    <h1>7. Refund Policy</h1>
                </div>
                <div>
                    <h4>7.1. Refunds will be provided based on our Refund Policy, which can be found [insert link to Refund Policy].</h4>
                   
                </div>
            </li>

            <li>
                <div className="head">
                    <h1>8. Intellectual Property</h1>
                </div>
                <div>
                    <h4>8.1. All content provided in our courses is the property of Learners IT Academy and is protected by intellectual property laws.</h4>
                    <h4>8.2. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,</h4>
                   
                </div>
            </li>

        </ol>
    </div>
</div>
  )
}
