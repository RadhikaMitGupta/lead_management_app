 "use client";
import React, { useState,useRef ,useEffect} from "react";
import ChatBot from "@/component/ChatBot";

/* ================= TYPES ================= */
type Option = {
  id: string;
  name: string;
};

type FilterKey = "A" | "B" | "C" | "D";

type FilterConfig = {
  key: FilterKey;
  title: string;
  options: Option[];
};

/* ================= OPTIONS ================= */
const LOCATION_OPTIONS: Option[] = [
  { name: "JP Nagar", id: "1" },
  { name: "Koramangala", id: "2" },
  { name: "Indira Nagar", id: "3" },
  { name: "Jayanagar", id: "4" },
  { name: "HSR Layout", id: "5" },
  { name: "Whitefield", id: "6" },
  { name: "Electronic City", id: "7" },
  { name: "Hosur Road", id: "8" },
  { name: "Others", id: "9" },
];

const APARTMENT_OPTIONS: Option[] = [
  { name: "One BHK", id: "1" },
  { name: "Two BHK", id: "2" },
  { name: "Three BHK", id: "3" },
  { name: "Four BHK", id: "4" },
  { name: "Other", id: "5" },
];

const PRICE_OPTIONS: Option[] = [
  { name: "Below 50 Lac", id: "1" },
  { name: "Below 1 Cr", id: "2" },
  { name: "Below 1.5 Cr", id: "3" },
  { name: "Below 2 Cr", id: "4" },
  { name: "Below 3 Cr", id: "5" },
  { name: "Above 4 Cr", id: "6" },
  { name: "Other", id: "7" },
];

const AREA_OPTIONS: Option[] = [
  { name: "Near Metro", id: "1" },
  { name: "Near Airport", id: "2" },
  { name: "Near Bus Stop", id: "3" },
  { name: "Other", id: "4" },
];

/* ================= FILTER CONFIG ================= */
const FILTERS: FilterConfig[] = [
  {
    key: "A",
    title: "Select Location",
    options: LOCATION_OPTIONS,
  },
  {
    key: "B",
    title: "Select Apartment Type",
    options: APARTMENT_OPTIONS,
  },
  {
    key: "C",
    title: "Select Price Range",
    options: PRICE_OPTIONS,
  },
  {
    key: "D",
    title: "Select Area Preference",
    options: AREA_OPTIONS,
  },
];

const imageData1 = [
 {
  id:"1",
  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme0F5ly7luGucfKdrOWfJIm-sS930vsGBHg&s",
  address:"JP Nagar"
 },
  {
  id:"2",
  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCdGOI0u0BLHDDj4czDLHvXXgf1E_6kbTuQ&s",
  address:"Kormangala"
 },

  {
  id:"3",
  uimgUrl:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme0F5ly7luGucfKdrOWfJIm-sS930vsGBHg&s",
  address:"Indranagr"
 },
  {
  id:"4",
  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTstFipeZsz31ECECmirjMkvkiLSqsvAYlaw&s",
  address:"Jayanagar"
 },
]
const imageData2 = [
 {
  id:"5",
  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsEVV-poXoR9ipe-fN17-EO2dNanl7iwetQ&s",
  address:"HSR Layout"
 },

  {
  id:"6",
  uimgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme0F5ly7luGucfKdrOWfJIm-sS930vsGBHg&s",
  address:"Whitefield"
 }, 
 {
  id:"7",
  uimgUrl: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/09ced807-183d-4da9-b54d-85dea9a57499.webp",
  address:"Electronic City"
 },
  {
  id:"8",
  uimgUrl: "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/0e3f30bb-5955-4073-a75b-5107d5172a5e.webp",
  address:"Hosur Road"
 },
]

/* ================= DASHBOARD ================= */
const Dashboard = () => {
  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);
  const [submitted,setSubmitted] = useState(false) 
  const [isClicked,setisClicked] = useState(true)
  const [selectedFilters, setSelectedFilters] = useState<
    Record<FilterKey, Option[]>
  >({
    A: [],
    B: [],
    C: [],
    D: [],
  });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);



  const toggleDropdown = (key: FilterKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleSelect = (key: FilterKey, option: Option) => {
    setSelectedFilters((prev) => {
      const exists = prev[key].some((item) => item.id === option.id);

      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((item) => item.id !== option.id)
          : [...prev[key], option],
      };
    });
  };

  return (
    <div>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.leftTitle}>Dashboard</h1>
        <h1 style={styles.rightTitle}>Help & Support</h1>
      </header>

      {/* FILTERS */}
      <div style={styles.filtersRow}>
        {FILTERS.map(({ key, title, options }) => (
          <div key={key} style={styles.filterBlock}>
            <h2 style={styles.title}>{title}</h2>

            <div
              style={styles.dropdownButton}
              onClick={() => toggleDropdown(key)}
            >
              Click to Select
            </div>

          <div style={{ minHeight: 250,  position: "relative" }}>
          {openDropdown === key && (
            <MultiSelectDropdown
              data={options}
              selected={selectedFilters[key]}
              onSelect={(item) => handleSelect(key, item)}
            />
          )}

          <SelectedChips
            items={selectedFilters[key]}
            onRemove={(item) => handleSelect(key, item)}
          />
        </div>
          </div>
        ))}
      </div>

           <div style={{display:"flex",justifyContent: "center", // horizontal center
  alignItems: "center",flexDirection:"row" }}>
          <button style={{backgroundColor:"#39b54a",height:40,width:220,color:"#fff",borderRadius:8 }} onClick={()=>{
            // alert("Submited")
            setSubmitted(true)
           setisClicked((prev)=> !prev)
          } } >
        Search Properties
      </button>
       <button style={{backgroundColor:"#39b54a",height:40,width:220,color:"#fff",borderRadius:8 ,marginLeft:10}} onClick={()=>{
            // alert("Submited")
            setSubmitted(false)
        setSelectedFilters({
          A: [],
          B: [],
          C: [],
          D: [],
        });
          } } >
        Clear 
      </button>
        </div>

      {/* TEXTAREA */}
      <div style={styles.textAreaBlock}>
        <h2>In case your criteria are not covered by the options above, please specify them below.</h2>

        <textarea
          placeholder="Type here..."
          style={styles.textarea}
        />
      </div>

          {submitted &&  (
              <div style={{display:"flex",flexDirection:"row",  gap: 20,
        paddingLeft: 20, paddingRight:20, marginBottom:50,
        justifyContent: "center", // horizontal center
        alignItems: "center",height:400,}}>
          {isClicked &&  imageData1.map((elem)=>{
            return (
              <div style={{width: "23%", height: 300,marginBottom:120}} >
                 <img
              src={elem?.uimgUrl}
              alt="My image"
              style={{ width: "100%", height: "100%", borderRadius: 4,objectFit: "cover", }}
            />
            <h1 style={{marginTop:10,textAlign:"center",fontWeight:"700",fontSize:20}}>{elem?.address}</h1>
              </div>
            )
          }) }

            {!isClicked &&  imageData2.map((elem)=>{
            return (
         <div  style={{width: "100%", height: 300,marginBottom:120}}>
                 <img
              src={elem?.uimgUrl}
              alt="My image"
              style={{ width: "100%", height: "100%", borderRadius: 4,objectFit: "cover", }}
            />
            <h1 style={{marginTop:10,textAlign:"center",fontWeight:"700",fontSize:20}}>{elem?.address}</h1>
              </div>
            )
          }) }

      </div>
          )}
      {/* CHATBOT */}
    
      <Footer />
        <ChatBot />
    </div>
  );
};

type SelectedChipsProps = {
  items: Option[];
  onRemove: (item: Option) => void;
};

const SelectedChips = ({ items, onRemove }: SelectedChipsProps) => {
  if (!items.length) return null;

  return (
    <div style={styles.chipsContainer}>
      {items.map((item) => (
        <div key={item.id} style={styles.chip}>
          {item.name}
          <span
            style={styles.remove}
            onClick={() => onRemove(item)}
          >
            ✕
          </span>
        </div>
      ))}
    </div>
  );
};



type DropDownProps = {
  data: Option[];
  selected: Option[];
  onSelect: (item: Option) => void;
};

const MultiSelectDropdown = ({
  data,
  selected,
  onSelect,
}: DropDownProps) => {
  const selectedIds = selected.map((el) => el.id);

  return (
    <div style={styles.dropdown}>
      {data.map((item) => (
        <div key={item.id} style={styles.dropdownItem}>
          <span>{item.name}</span>

          <input
            type="checkbox"
            checked={selectedIds.includes(item.id)}
            onChange={() => onSelect(item)}
          />
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Lead Management App
        </p>
        <p style={styles.text}>
          Address: JP Nagar, Bengaluru, Karnataka, India
        </p>
      </div>
    </footer>
  );
};

 

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",                // ⭐ KEY
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#39b54a",
  },
  leftTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    margin: 0,                      // ⭐ IMPORTANT
  },
  rightTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    margin: 0,                      // ⭐ IMPORTANT
    cursor: "pointer",
  },
  filtersRow: {
  display: "flex",
  gap: 60,
  padding: 20,
  justifyContent: "center", // horizontal center
  alignItems: "center",     // vertical center
  },
  filterBlock: {
    width: 240,
  },
  title: {
    fontWeight: 600,
    marginBottom: 10,
    textAlign:"center"
  },
  dropdownButton: {
    padding: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 4,
    textAlign: "center",
    cursor: "pointer",
  },
  dropdown: {
    marginTop: 6,
    maxHeight: 200,
    overflowY: "auto",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  dropdownItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    borderBottom: "1px solid #f1f1f1",
    paddingRight:20
  },
  textAreaBlock: {
    padding: 20,
    paddingLeft:80
  },
  textarea: {
    width: "60%",
    height: 100,
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    border: "1px solid #d1d5db",
  },
  chipsContainer: {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 8,
},
chip: {
  display: "flex",
  alignItems: "center",
  padding: "6px 10px",
  backgroundColor: "#e6f7ea",
  borderRadius: 16,
  fontSize: 13,
},
remove: {
  marginLeft: 6,
  cursor: "pointer",
  fontWeight: "bold",
},

footer: {
  backgroundColor: "#f3f4f6",
  padding: "20px 0",
  marginTop: 60,

  position: "fixed",
  bottom: 0,
  left: 0,        // ⭐ IMPORTANT
  width: "100%",  // ⭐ IMPORTANT

  textAlign: "center",
  boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
  zIndex: 1000,
},
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    color: "#4b5563",
    fontSize: 14,
    margin: "4px 0",
  },

};


export default Dashboard