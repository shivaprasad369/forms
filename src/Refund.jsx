import React from 'react'

export default function Refund() {
  return (
    <div className='md:px-[10%] max-mdLpx-[3%] flex justify-center items-center  flex-col py-[2rem]'>
    <div className="header pb-[2rem]">
        <h1 className='text-3xl font-bold '>REFUND POLICY</h1>
    </div>
    <div>
        <ol>
            <li>
                <div className="head">
                    <h1>1. Eligibility for Refunds</h1>
                </div>
                <div>
                    <h4>1.1. Full Refunds</h4>
                    <ul>
                        <li>You are eligible for a full refund if you request a refund within 7 days of your payment and you have not started the course or attended any classes</li>
                    </ul>
                </div>
                <div>
                   <h4> 1.2. No Refunds</h4>
                    <ul>
                        <li>We do not provide refunds if you have started the course, attended any classes, or completed more than half of the course content.</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="head">
                    <h1>2.  How to Request a Refund</h1>
                </div>
                <div>
                    <h4>2.1. Contact Us</h4>
                    <ul>
                        <li>To request a refund, please contact our support team at support@learnersitacademy.com within the eligible refund period.</li>
                    </ul>
                </div>
                <div>
                   <h4>2.2. Information to Include</h4>
                    <ul>
                        <li>Please include your name, the course name, your reason for the refund request, and any other relevant information that may help us process your request efficiently.</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="head">
                    <h1>3.  Processing Refunds</h1>
                </div>
                <div>
                    <h4>3.1. Approval</h4>
                    <ul>
                        <li>•	Once we receive your refund request, we will review it and notify you of the approval or rejection of your refund within 7-10 business days.
                          </li>
                            
                    </ul>
                </div>
                <div>
                   <h4>3.2. Refund Method
                </h4>
                    <ul>
                        <li>If your refund request is approved, we will process the refund using the original payment method. Please note that it may take some time for the refund to reflect in your account, depending on your payment provider's policies.</li>
                    </ul>
                </div>
            </li>

            <li>
                <div className="head">
                    <h1>4.  Exceptions</h1>
                </div>
                <div>
                    <h4>4.1. Technical Issues</h4>
                    <ul>
                        <li>If you are unable to start the course due to technical issues on our end, please contact our support team. We will do our best to resolve the issue or provide a refund if the problem cannot be resolved.
                          </li>
                            
                    </ul>
                </div>
                <div>
                   <h4>4.2. Special Circumstances
                </h4>
                    <ul>
                        <li>In certain special circumstances, we may consider refund requests outside of the standard policy on a case-by-case basis. Please contact our support team with your specific situation.</li>
                    </ul>
                </div>
            </li>
            
            <li style={{display: 'flex' ,flexDirection: 'column',gap: '10px',letterSpacing: '1px'}}>
                <div className="head">
                    <h1>5. Changes to This Refund Policy</h1>
                </div>
                <div>
                    We reserve the right to update or change our refund policy at any time. Any changes will be posted on this page, and the last updated date will be revised accordingly. We encourage you to review this policy periodically to stay informed of any updates.
                </div>
                <div>
                    If you have any questions or concerns about our refund policy, please contact us at<b> support@learnersitacademy.com.</b>
                </div>
            </li>

        </ol>
    </div>
</div>
  )
}
