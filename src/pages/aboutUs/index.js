import React from "react";
import { Image } from "react-bootstrap";

import imgAboutLogo from "../../assets/profile/AboutUS.png";
import imgAboutTxt from "../../assets/icons/AboutTxt.png";
import imgTwitter from "../../assets/icons/Twitter.png";
import imgLinkedIn from "../../assets/icons/Linkedin.png";
import imgFacebook from "../../assets/icons/Facebook.png";
import imgYoutube from "../../assets/icons/Youtube.png";


function AboutUs() {
    return (
        <div>
            <h1 className="text-center fw-bold">Pocket Money</h1>
            <div className="center">
                {/* <Image className="center" src={imgAboutTxt} width={"40%"}/> */}
                <div className="text-center mb-1">
                    <br></br>
                    <br></br>
                    <h4>
                        We are D Coders, the developrs of this application.
                        <br></br>
                        This application provides platform for students to Earn, Save and Spend Pocket Money.
                        <br></br>
                        Also Start-Up and Content Creator can hire students according to their needs.
                        <br></br>
                        We respect your privacy your data is safe with us.
                    </h4>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="container-xxl pb-5" id="contact">
                <div className="container py-5">

                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 class="display-5 mb-0">Contact Us</h1>
                        </div>
                        <div class="col-lg-6 text-lg-end">
                            <a class="btn btn-primary" href="https://www.instagram.com/dhiraj_karangale/">Say Hello</a>
                        </div>
                    </div>

                    <div className="row g-5">

                        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p class="mb-2">Add:</p>
                            <h3 class="fw-bold">Pune, Maharashtra, India</h3>
                            <hr class="w-100"></hr>
                            <p class="mb-2">Call me:</p>
                            <h3 class="fw-bold">+91 9988776655</h3>
                            <hr class="w-100"></hr>
                            <p class="mb-2">Mail me:</p>
                            <h3 class="fw-bold">dkhelp02@gmail.com</h3>
                            <hr class="w-100"></hr>
                            <p class="mb-2">Follow me:</p>

                            <div className="d-flex pt-2 col-lg-12">
                                <a className="" href="https://twitter.com/dhirajkarangale"> <Image src={imgTwitter} width={"30%"} /></a>
                                <a className="" href="https://www.linkedin.com/in/dhiraj-karangale-464ab91bb"> <Image src={imgLinkedIn} width={"30%"} /></a>
                                <a className="" href="https://www.youtube.com/channel/UC_Dnn-QqlnrdYpKXycyzJDA"> <Image src={imgYoutube} width={"50%"} /></a>
                                <a className="margin-bottom: 10" href="https://www.facebook.com/dhiraj.karangale.02"> <Image src={imgFacebook} width={"150%"} /></a>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="col-lg-12">
                                <h3 className="">Thanks for visiting Us !!! <br></br>
                                    I hope you had a good experience with us…anything we could improve or that you liked? <br></br>
                                    Share your feedback with us. We actually read it!</h3>
                            </div>
                        </div>
                        <Image src={imgAboutLogo} width={"70%"} />

                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutUs