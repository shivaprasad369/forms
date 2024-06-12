import React from 'react'

export default function Privacy() {
  return (
    <div className='md:px-[10%] max-mdLpx-[3%] flex justify-center items-center  flex-col py-[2rem]'>
    <div className="header pb-[2rem]">
        <h1 className='text-3xl font-bold '>PRIVACY POLICY </h1>
    </div>
    <div>
        <ol>
            <li>
                <div className="head" style={{display: 'flex' ,flexDirection: 'column',gap: '10px',letterSpacing: '1px'}}>
                    <h1>1. Information We Collect</h1>
                </div>
                <div>
                    <h4>1.1. Personal Information</h4>
                    <ul>
                        <li>We may collect personal information that you provide directly to us when you register for an account, enrol in a course, or communicate with us. This information may include your name, email address, phone number, payment information, and any other information you choose to provide.</li>
                    </ul>
                </div>
                <div>
                   <h4> 1.2. Usage Data</h4>
                    <ul>
                        <li>We may also collect information automatically when you use our services. This may include your IP address, browser type, operating system, referring URLs, access times, pages viewed, and other similar data.</li>
                    </ul>
                </div>
                <div>
                    <h4> 1.3. Cookies and Tracking Technologies</h4>
                     <ul>
                         <li>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</li>
                     </ul>
                 </div>
            </li>
            <li>
                <div className="head" style={{display: 'flex' ,flexDirection:' column',gap: '10px',letterSpacing: '1px'}}>
                    <h1>2.  How We Use Your Information</h1>
                </div>
                <h3>We use the information we collect in the following ways:</h3>
                <div>
                    <h4>2.1. To Provide and Maintain Our Service</h4>
                    <ul>
                        <li>	To create and manage your account, process payments, and provide customer support.</li>
                    </ul>
                </div>
                <div>
                   <h4>2.2. To Communicate with You</h4>
                    <ul>
                        <li>To send you updates, marketing communications, and other information that may be of interest to you.</li>
                    </ul>
                </div>
                <div>
                    <h4>2.3. To Improve Our Services</h4>
                     <ul>
                         <li>To analyse usage trends and to improve our website and services.
                            </li>
                     </ul>
                 </div>
                 <div>
                    <h4>2.4. To Comply with Legal Obligations</h4>
                     <ul>
                         <li>To comply with legal and regulatory requirements and to protect our legal rights.
                            </li>
                     </ul>
                 </div>
            </li>
            <li >
                <div className="head" style={{display: "flex",flexDirection:" column",gap: "10px",letterSpacing: "1px"}}>
                    <h1>3.  How We Share Your Information</h1>
                </div>
                <h3>We may share your information in the following circumstances:</h3>
                <div>
                    <h4>3.1. With Service Providers</h4>
                    <ul>
                        <li>We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                          </li>
                           
                    </ul>
                </div>
                <div>
                   <h4>3.2. For Legal Reasons
                </h4>
                    <ul>
                        <li>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                    </ul>
                </div>
                <div>
                    <h4>3.3. With Your Consent
                 </h4>
                     <ul>
                         <li>We may share your information with your consent or at your direction.</li>
                     </ul>
                 </div>
            </li>

            <li>
                <div className="head">
                    <h1>4. Data Security</h1>
                <p>
                    We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
                </p>
                </div>
                
            </li>
            
            <li style={{display: 'flex' ,flexDirection: 'column',gap: '10px',letterSpacing: '1px'}}>
                <div className="head">
                    <h1>5. Your Data Protection Rights</h1>
                <h3>Depending on your location, you may have the following rights regarding your personal data:</h3>
                </div>
                <div>
                    <h4>5.1. The Right to Access</h4>
                    <ul>
                        <li>You have the right to request copies of your personal data.</li>
                    </ul>
                </div>
                <div>
                    <h4>5.2. The Right to Rectification</h4>
                    <ul>
                        <li>You have the right to request that we correct any information you believe is inaccurate or complete information you believe</li>
                    </ul>
                </div>
            </li>

        </ol>
    </div>
</div>
  )
}
