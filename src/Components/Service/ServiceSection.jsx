import React from "react";
import ServiceCard from "./ServiceCard";
import "./Service.css";
import { AiOutlineAudit } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { RiStockFill } from "react-icons/ri";
import { BsFillMotherboardFill } from "react-icons/bs";


const services = [
  {
    icon: <AiOutlineAudit/>,
    title: " 🔍Audit & Assurance",
    description:[
      "Statutory Audit (as per Companies Act other regulations)",
      "Tax Audit (under Income Tax Act)",
      "Internal Audit ",
      "Concurrent Audit (especially for banks) ",
      "Stock Audit / Inventory Verification  ",
      "Forensic Audit  ",
      "Due Diligence  ",
      "Mystery Audits  ",
      "Process & Compliance Audits  ",

    ]
  },
  {
    icon: <MdAccountBalance/>,
    title: " 💼Accounting",
    description:[
     "Preparation and maintenance of books of accounts ",
     "Finalization of financial statements  ",
     "Management accounting and reporting ",
     "Payroll processing and compliance",
     "Budgeting and forecasting   ",
  
    ]
  },
  {
    icon: <TbTax/>,
    title: " 🧾Taxation Services",
    description:[
    "Income Tax Return filing (individuals, firms, companies) ",
    "Tax planning and advisory",
    "Representation before tax authorities ",
    "TDS compliance and returns  ",
    "GST registration and return filing",
    "GST audits   ",
    "Advisory on GST applicability and structuring ",
    "Assistance in GST Assessments and Appeals  ",
    ]
  },
  {
    icon: <FaAcquisitionsIncorporated/>,
    title: " 🏛️Corporate Compliance",
    description:[
      "Company incorporation (Private Ltd, LLP, Section 8 Company etc.) ",
      "ROC filings and MCA compliance ",
      "Secretarial services (in partnership with CS professionals)  ",
      "FEMA compliance (15CA & 15CB) ",
      "RBI and SEBI-related filings (if applicable) ",
      "Trademark & IP registration assistance  ",
    ]
  },
  {
    icon: <SiHomeadvisor/>,
    title: " 💡Consulting",
    description:[
      "Business advisory and strategic planning   ",
      "SOP development and implementation   ",
      "Financial due diligence   ",
      "Internal control review and risk management  ",
      "Project report and CMA data preparation for loans   ",
      "Virtual CFO services  ",
      "Startup and MSME advisory ",
    ]
  },
  {
    icon: <RiStockFill/>,
    title: " 💰Investment Advisory",
    description:[
      "Loan syndication and project financing .",
      "Investment planning (in collaboration with financial advisors)   ",
      "Business restructuring and turnaround planning   ",
      "Working capital management, Budgeting   ",
      "Net worth certificate, CMA data ",
    ]
  },
  {
    icon: <BsFillMotherboardFill/>,
    title: "  💼Other Services",
    description:[
     "Partnership, Proprietorship creation ",
    "RERA registration and Compliance ",
    "Society, Trust and Section 8 Company registration ",
    "Digital Signature Certificate (DSC) ",
    "PAN & TAN Registration",
    "CA Certification  ",
    ]}
];

const ServicesSection = () => {
  return (
    <section id="service">
      <div className="section-title">
        <h2 className="sub-title">My Services</h2>
        <h3 className="title">A brief of Offering Services</h3>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
