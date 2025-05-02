import React from "react";

const Footer = () => {
  return (
    <div className="bg-amber-500">
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
        <footer className="footer sm:footer-horizontal  p-10 text-white">
          <nav>
            <h6 className="footer-title text-indigo-800">Services</h6>
            <a className="link link-hover font-medium">
              Volunteer Opportunities
            </a>
            <a className="link link-hover font-medium">Community Projects</a>
            <a className="link link-hover font-medium">Event Participation</a>
            <a className="link link-hover font-medium">Partner with Us</a>
          </nav>
          <nav>
            <h6 className="footer-title text-indigo-800">Company</h6>
            <a className="link link-hover font-medium">About us</a>
            <a className="link link-hover font-medium">Contact</a>
            <a className="link link-hover font-medium">Jobs</a>
            <a className="link link-hover font-medium">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-indigo-800">Legal</h6>
            <a className="link link-hover font-medium">Terms of use</a>
            <a className="link link-hover font-medium">Privacy policy</a>
            <a className="link link-hover font-medium">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer text-base-content py-4">
          <aside className="grid-flow-col items-center">
            <img
              src="https://img.icons8.com/?size=64&id=104283&format=png"
              alt=""
            />

            <h1 className="text-2xl">
              <span className="text-6xl font-bold text-indigo-500 -mr-3">
                V
              </span>
              olunteer{" "}
              <span className="relative text-6xl font-bold text-indigo-500 top-3 right-2">
                C
              </span>
              <span className="relative right-6">onnect</span>
            </h1>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
                {/* Facebook */}
              <a target="blank" href="https://www.facebook.com/"><img src="https://img.icons8.com/?size=48&id=13912&format=png" alt="" /></a>
              {/* Youtube */}
              <a target="blank" href="https://www.youtube.com/"><img src="https://img.icons8.com/?size=48&id=9a46bTk3awwI&format=png" alt="" /></a>
              {/* X handle */}
              <a target="blank" href="https://x.com/"><img className="" src="https://img.icons8.com/?size=50&id=A4DsujzAX4rw&format=png" alt="" /></a>
             
            </div>
          </nav>
         
        </footer>
        <div className="text-center">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              TF Industries Ltd
            </p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
