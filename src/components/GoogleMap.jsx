import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.343225709605!2d83.9359693762763!3d28.196882903729183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595fd4c66a063%3A0xfdba2c66a2615e03!2sRound%20House%20Camping%20Castle!5e0!3m2!1sen!2snp!4v1739346017812!5m2!1sen!2snp"
        width="600"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  );
};

export default GoogleMap;
