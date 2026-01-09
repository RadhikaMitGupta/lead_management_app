"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import ChatBot from "@/component/ChatBot";

type Property = {
  name:string;
  id: string;
  uimgUrl: string;
  location:string;
  title:string;
  area:string;
  apartmentType:string;
  price:string;
  description:string
};

const ALL_PROPERTIES: Property[] = [
  { name: "JP Nagar", id: "1",uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme0F5ly7luGucfKdrOWfJIm-sS930vsGBHg&s",  location: "JP Nagar, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Koramangala", id: "2",uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCdGOI0u0BLHDDj4czDLHvXXgf1E_6kbTuQ&s",  location: "Koramangala, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Indira Nagar", id: "3",  uimgUrl:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme0F5ly7luGucfKdrOWfJIm-sS930vsGBHg&s",  location: "Indira Nagar, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Jayanagar", id: "4", uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTstFipeZsz31ECECmirjMkvkiLSqsvAYlaw&s",  location: "Jayanagar, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "HSR Layout", id: "5",  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsEVV-poXoR9ipe-fN17-EO2dNanl7iwetQ&s",  location: "HSR Layout, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Whitefield", id: "6",  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme0F5ly7luGucfKdrOWfJIm-sS930vsGBHg&s",  location: "Whitefield, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Electronic City", id: "7", uimgUrl: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/09ced807-183d-4da9-b54d-85dea9a57499.webp", location: "Electronic City, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Hosur Road", id: "8", uimgUrl: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/0e3f30bb-5955-4073-a75b-5107d5172a5e.webp",  location: "Hosur Road, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  { name: "Others", id: "9",  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTstFipeZsz31ECECmirjMkvkiLSqsvAYlaw&s", location: "Others, Bengaluru",title: "Premium 3 BHK Apartment",area: "1650 sq.ft",apartmentType: "3 BHK", price: "₹1.25 Cr",    description:
      "Spacious and well-ventilated apartment with modern amenities, close to metro, schools, and hospitals.",},
  // add all properties here
];

type Props = {
  params: {
    id: string;
  };
};

export default function PropertyDetails({ params }: Props) {
//  const { idffffff } = params;
      const [booked, setBooked] = useState(false);
      const [contactOwner,setContactOwner] = useState(false)
      const [showReasonModal, setShowReasonModal] = useState(false);
const [reason, setReason] = useState("");
  const paramsc = useParams();
  const idc = paramsc?.id as string;
   console.log("id45654",idc)
 const propertys = ALL_PROPERTIES.find(p => p.id === idc);

  if (!propertys) {
    return <h2>Property not found</h2>;
  }

 
  const openWhatsApp = () => {
      setContactOwner(true)
      setShowReasonModal(true)
  const phoneNumber = "919876543210"; // country code + number (no +, no spaces)
//   const message = "Hi, I'm interested in this property. Please contact me.";

//   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");
}

  return (
    <>
      <Header />

      <main style={styles.page}>
        <div style={styles.card}>
          {/* IMAGE */}
          <img src={propertys.uimgUrl} alt="Property" style={styles.image} />

          {/* DETAILS */}
          <div style={styles.details}>
            <h1 style={styles.title}>{propertys.title}</h1>
            <p style={styles.location}>{propertys.location}</p>

            <div style={styles.infoGrid}>
              <Info label="Area" value={propertys.area} />
              <Info label="Apartment Type" value={propertys.apartmentType} />
              <Info label="Price" value={propertys.price} />
              <Info label="Property ID" value={propertys.id} />
            </div>

            <p style={styles.description}>{propertys.description}</p>

            
                <div style={{display:"flex",flexDirection:"row",gap:30}}>
                <button
                style={styles.bookBtn}
                onClick={() => setBooked(true)}
              >
                Book Property
              </button>
               <button
                style={styles.bookBtn1}
                onClick={openWhatsApp}
              >
               Not Interested
              </button>
                </div>
            
          {booked && (
              <div style={styles.success}>
                ✅ We have booked your property.  
                Our team will connect with you soon.
              </div>)}
          
          </div>
        </div>
      </main>

      <Footer />
           <ChatBot />
           {showReasonModal && (
  <div style={styles.overlay}>
    <div style={styles.modal}>
      <h2 style={styles.modalTitle}>Tell us why you’re not interested</h2>

      <textarea
        placeholder="Please write your reason..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        style={styles.modalTextarea}
      />

      <div style={styles.modalActions}>
        <button
          style={styles.cancelBtn}
          onClick={() => {
            setShowReasonModal(false);
            setReason("");
          }}
        >
          Cancel
        </button>

        <button
          style={styles.submitBtn}
          disabled={!reason.trim()}
          onClick={() => {
            console.log("Reason submitted:", reason);
            alert("Thank you for your feedback!");
            setShowReasonModal(false);
            setReason("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}

/* ================= HEADER ================= */
const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.leftTitle}>Property Details</h1>
    <h1 style={styles.rightTitle}>Help & Support</h1>
  </header>
);

/* ================= FOOTER ================= */
const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.footerText}>
      © {new Date().getFullYear()} Lead Management App
    </p>
    <p style={styles.footerText}>
      Address: JP Nagar, Bengaluru, Karnataka, India
    </p>
  </footer>
);

/* ================= INFO BOX ================= */
const Info = ({ label, value }: { label: string; value: string }) => (
  <div style={styles.infoBox}>
    <span style={styles.infoLabel}>{label}</span>
    <span style={styles.infoValue}>{value}</span>
  </div>
);

/* ================= STYLES ================= */
const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#39b54a",
  },
  leftTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    margin: 0,
  },
  rightTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    margin: 0,
    cursor: "pointer",
  },

  page: {
    minHeight: "calc(100vh - 140px)",
    backgroundColor: "#f9fafb",
    display: "flex",
    justifyContent: "center",
    padding: 40,
  },
  card: {
    display: "flex",
    maxWidth: 1000,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  image: {
    width: "45%",
    objectFit: "cover",
  },
  details: {
    padding: 30,
    width: "55%",
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 6,
  },
  location: {
    color: "#6b7280",
    marginBottom: 20,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  infoValue: {
    display: "block",
    fontSize: 15,
    fontWeight: 600,
  },
  description: {
    marginBottom: 24,
    color: "#374151",
    lineHeight: 1.6,
  },
  bookBtn: {
    backgroundColor: "#39b54a",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: 8,
    border: "none",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },
    bookBtn1: {
    backgroundColor: "grey",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: 8,
    border: "none",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },
  success: {
    backgroundColor: "#ecfdf5",
    color: "#065f46",
    padding: 16,
    borderRadius: 8,
    fontWeight: 600,
  },
  footer: {
    backgroundColor: "#f3f4f6",
    padding: "16px 0",
    textAlign: "center",
    boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
  },
  footerText: {
    color: "#4b5563",
    fontSize: 14,
    margin: "4px 0",
  },
  notInterestedBtn: {
  backgroundColor: "#ef4444",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: 8,
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
},

overlay: {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
},

modal: {
  backgroundColor: "#fff",
  borderRadius: 12,
  width: 420,
  padding: 24,
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
},

modalTitle: {
  marginBottom: 12,
  fontSize: 18,
  fontWeight: 600,
},

modalTextarea: {
  width: "100%",
  height: 100,
  padding: 12,
  borderRadius: 8,
  border: "1px solid #d1d5db",
  resize: "none",
},

modalActions: {
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 16,
},

cancelBtn: {
  backgroundColor: "#e5e7eb",
  padding: "8px 16px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
},

submitBtn: {
  backgroundColor: "#39b54a",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
},

};

