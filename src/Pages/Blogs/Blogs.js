import React from 'react';

const Blogs = () => {
    return (

        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        #1. What are the Difference Between Authentication  And Authorization ?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center'>Authentication</h4>
                                <hr />
                                <li> Authentication verifies who the user is.</li>
                                <li> Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                                <li>Authentication is the first step of a good identity and access management process.</li>
                                <li>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and others .</li>
                            </div>
                            <div className="col-lg-6 col-sm-12 px-4 py-2">
                                <h4 className='text-center'>Authorization</h4>
                                <hr />
                                <li> Authorization determines what resources a user can access.</li>
                                <li> Authorization works through settings that are implemented and      maintained by the organization.</li>
                                <li> Authorization always takes place after authentication.</li>
                                <li> Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #2. Why are you using firebase? What other options do you have to implement authentication?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h4 className='text-success'>Firebase Authentication: </h4> Mainly we used Firebase For authentication purpose. It has saved countless hours of my life since it allows to authenticates your app with the users by doing email/Reset password, letting users sign in/sign up.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        <hr />

                        <h4> Other Options for implementation of  Authentication:</h4>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta</li>
                        <li>JSON Web Token</li>
                        etc...

                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #3. What other services does firebase provide other than authentication?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <li> <strong>Firebase Database:</strong>  used to store users data like chat messages, users details and other metadata</li>
                        <li><strong>Firebase Cloud Storage:</strong>  used to store user-generated content like the profile picture, multimedia messages, etc.</li>
                        <li><strong>Firebase Cloud Messaging:</strong> used to send notification</li>
                        <li><strong>Firebase Remote Config:</strong>  used to perform A/B testing on the go</li>

                    </div>
                </div>
            </div>
            
        </div>



    );
};

export default Blogs;