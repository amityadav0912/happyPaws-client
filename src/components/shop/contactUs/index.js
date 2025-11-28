import React, { Fragment } from "react";
import Layout from "../layout";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsComponent = () => {
  const email = "amit09yadav12@gmail.com";
  const phoneNo = "+91 8306334469";
  const address = "110A, Pratap Nagar, Jaipur, Rajasthan";
  const imageUrl = require("./adopt.jpg");

  return (
    <div className="max-w-4xl mx-auto my-24 px-6">
      {/* Header Image */}
      <div className="w-full flex justify-center mb-12">
        <img
          src={imageUrl}
          alt="Contact"
          className="rounded-2xl shadow-xl w-full max-w-2xl object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-wide">
        Contact Us
      </h2>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-8 text-center">

        {/* Email */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
          <Mail className="mx-auto mb-4" size={40} />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-600">{email}</p>
        </div>

        {/* Phone */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
          <Phone className="mx-auto mb-4" size={40} />
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">{phoneNo}</p>
        </div>

        {/* Address */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
          <MapPin className="mx-auto mb-4" size={40} />
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-600 leading-relaxed">{address}</p>
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-16 text-center">
        <span className="text-gray-700 text-3xl font-bold tracking-wide">
          We're here to help you
        </span>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <Fragment>
      <Layout children={<ContactUsComponent />} />
    </Fragment>
  );
};

export default ContactUs;
