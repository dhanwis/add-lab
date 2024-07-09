import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import img from './lbmin6.png'; 
import { FaTimes } from 'react-icons/fa'; 

function User() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the desired route
    navigate('/packages');
  };

  const packaged = [
    { 
      name: "Full Body Checkup", 
      lab: "Hyatt Labs", 
      tests: [
        { name: "Fasting Blood Sugar (FBS) Test", 
          subTests: [
            "HbA1c (Glycosylated Hemoglobin) Test",
            "Vitamin B12 Test",
            "Average Blood Glucose",
            "Vitamin D Total"
          ]
        },
        { name: "Iron Profile", 
          subTests: [
            "Total Iron Binding Capacity",
            "Serum Iron Test",
            "UIBC",
            "Transferrin Saturation"
          ]
        },
        { name: "Thyroid Profile Test (T3, T4, UTSH) / TFT", 
          subTests: [
            "Triiodothyronine (T3) Test",
            "Thyroxine (T4) Test",
            "Thyroid Stimulating Hormone - Ultrasensitive (UTSH)"
          ]
        },
        { name: "Liver Function Test (LFT)", 
          subTests: [
            "Albumin Test",
            "Alkaline Phosphatase (ALP) Test",
            "Gamma Glutamyl Transferase (GGT) Test",
            "Total Protein Test",
            "Aspartate Aminotransferase (AST / SGOT) Test",
            "SGPT / ALT (Alanine Transaminase) Test",
            "Bilirubin Direct",
            "Bilirubin Total",
            "Bilirubin-Indirect",
            "Globulin",
            "Albumin/Globulin Ratio"
          ]
        },
        { name: "Lipid Profile Test", 
          subTests: [
            "LDL Cholesterol Direct Test",
            "Total Cholesterol",
            "HDL Cholesterol Test",
            "Triglycerides Test",
            "Serum VLDL Cholesterol",
            "LDL/HDL Ratio",
            "TC/HDL Cholesterol Ratio",
            "Non-HDL Cholesterol",
            "HDL/LDL Cholesterol Ratio",
            "TRIG/HDL Ratio"
          ]
        },
        { name: "Renal / Kidney Function Test (RFT / KFT)", 
          subTests: [
            "Blood Urea Nitrogen (BUN) / Serum Urea Test",
            "Calcium (Ca) Test",
            "Creatinine Test",
            "EGFR",
            "Uric Acid Test",
            "BUN / Creatinine Ratio",
            "Urea / Creatinine Ratio",
            "Urea (Calculated)"
          ]
        },
        { name: "CBC Test", 
          subTests: [
            "AEC Test",
            "Hemoglobin (Hb) Test",
            "Platelet Count Test",
            "Erythrocyte Count (RBC) Test",
            "Packed Cell Volume (PCV)",
            "Mean Cell Volume (MCV) Test",
            "Mean Cell Hemoglobin (MCH) Test",
            "Mean Corpuscular Hb Concentration (MCHC)",
            "Total Leukocytes / WBC Count (TLC) Test",
            "Absolute Neutrophil Count",
            "Absolute Lymphocyte Count (ALC) Test",
            "Absolute Monocyte Count",
            "Absolute Basophils Count (ABC) Test",
            "Immature Granulocyte Percentage",
            "RDW SD",
            "Nucleated Red Blood Cells Percentage",
            "Immature Granulocytes",
            "RDW-CV",
            "Nucleated Red Blood Cells"
          ]
        },
        { name: "Urine Routine Test",
          subTests: [
            "Specific Gravity",
            "pH-value",
            "Nitrite",
            "Urine Protein Test",
            "Urine Glucose",
            "Ketones",
            "Urobilinogen",
            "Urine Bilirubin",
            "Urine Blood",
            "Red Blood Cells",
            "Yeast Cells",
            "Bacteria",
            "Volume",
            "Bile Salt",
            "Parasites",
            "MUCS",
            "Leukocyte Esterase"
          ]
        }
      ],
      price: 3500,
      numTestsIncluded: 90
    },
    { 
      name: "Postnatal Package", 
      lab: "Riott Innovations", 
      tests: [
        { 
          name: "Blood Group Test",
          subTests: []
        },
        {
          name: "Blood Sugar Tests",
          subTests: [
            "Random Blood Sugar (RBS) Test",
            "HbA1c (Glycosylated Hemoglobin) Test"
          ]
        },
        {
          name: "Hepatitis Tests",
          subTests: [
            "Hepatitis B Surface Antigen (HBsAg) Test",
            "Hepatitis C Virus - Quantitative (HCV)"
          ]
        },
        {
          name: "HIV Test",
          subTests: [
            "HIV 1 & 2 Antibodies Test"
          ]
        },
        {
          name: "Venereal Disease Research Laboratory (VDRL) Test",
          subTests: []
        },
        {
          name: "Average Blood Glucose",
          subTests: []
        },
        {
          name: "Serum Iron Test",
          subTests: []
        },
        {
          name: "Thyroid Tests",
          subTests: [
            "Thyroid Stimulating Hormone - Ultrasensitive (UTSH)"
          ]
        },
        {
          name: "CBC Test",
          subTests: [
            "AEC Test",
            "Hemoglobin (Hb) Test",
            "Platelet Count Test",
            "Erythrocyte Count (RBC) Test",
            "Packed Cell Volume (PCV)",
            "Mean Cell Volume (MCV) Test",
            "Mean Cell Haemoglobin (MCH) Test",
            "Mean Corpuscular Hb Concentration (MCHC)",
            "Total Leucocytes / WBC Count (TLC) Test",
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils",
            "Basophils",
            "Absolute Neutrophil Count",
            "Absolute Lymphocyte Count (ALC) Test",
            "Absolute Monocyte Count",
            "Absolute Basophils Count (ABC) Test",
            "Immature Granulocyte Percentage",
            "RDW SD",
            "Nucleated Red Blood Cells Percentage",
            "Immature Granulocytes",
            "RDW-CV",
            "Nucleated Red Blood Cells"
          ]
        },
        {
          name: "Urine Routine Test",
          subTests: [
            "Specific Gravity",
            "pH-value",
            "Nitrite",
            "Urine Protein Test",
            "Urine Glucose",
            "Ketones",
            "Urobilinogen",
            "Urine Bilirubin",
            "Urine Blood",
            "Epithelial Cells",
            "Casts",
            "Crystals",
            "Pus Cells",
            "Colour",
            "Appearance",
            "Bile Pigment",
            "Red Blood Cells",
            "Yeast Cells",
            "Bacteria",
            "Volume",
            "Bile Salt",
            "Parasites",
            "MUCS",
            "Leukocyte Esterase"
          ]
        }
      ],
      price: 2580,
      numTestsIncluded: 55
    },
    { 
      name: "Senior Citizen Package", 
      lab: "Neethi Diagnostics", 
      tests: [
        { 
          name: "Amylase",
          subTests: []
        },
        {
          name: "Blood Sugar Tests",
          subTests: [
            "Fasting Blood Sugar (FBS)",
            "Average Blood Glucose"
          ]
        },
        {
          name: "Electrolyte Tests",
          subTests: [
            "Chloride (Cl)",
            "Serum Sodium (Na)"
          ]
        },
        {
          name: "Ferritin",
          subTests: []
        },
        {
          name: "HbA1c (Glycosylated Hemoglobin)",
          subTests: []
        },
        {
          name: "Lipase",
          subTests: []
        },
        {
          name: "Vitamin Tests",
          subTests: [
            "Vitamin B12",
            "Vitamin D Total"
          ]
        },
        {
          name: "Serum Zinc",
          subTests: []
        },
        {
          name: "Liver Function Test (LFT)",
          subTests: [
            "Albumin",
            "Alkaline Phosphatase (ALP)",
            "Gamma Glutamyl Transferase (GGT)",
            "Total Protein",
            "Aspartate Aminotransferase (AST / SGOT)",
            "SGPT / ALT (Alanine Transaminase)",
            "Bilirubin Direct",
            "Bilirubin Total",
            "Bilirubin-Indirect",
            "Globulin",
            "Albumin/Globulin Ratio"
          ]
        },
        {
          name: "Lipid Profile Test",
          subTests: [
            "LDL Cholesterol Direct",
            "Total Cholesterol",
            "HDL Cholesterol",
            "Triglycerides",
            "Serum VLDL Cholesterol",
            "LDL/HDL Ratio",
            "TC/HDL Cholesterol Ratio",
            "Non-HDL Cholesterol",
            "HDL/LDL Cholesterol Ratio",
            "TRIG/HDL Ratio"
          ]
        },
        {
          name: "Renal / Kidney Function Test (RFT / KFT)",
          subTests: [
            "Blood Urea Nitrogen (BUN) / Serum Urea",
            "Calcium (Ca)",
            "Creatinine",
            "EGFR",
            "Uric Acid",
            "BUN / Creatinine Ratio",
            "Urea / Creatinine Ratio",
            "Urea (Calculated)"
          ]
        },
        {
          name: "CBC Test",
          subTests: [
            "AEC",
            "Hemoglobin (Hb)",
            "Platelet Count",
            "Erythrocyte Count (RBC)",
            "Packed Cell Volume (PCV)",
            "Mean Cell Volume (MCV)",
            "Mean Cell Hemoglobin (MCH)",
            "Mean Corpuscular Hb Concentration (MCHC)",
            "Total Leukocytes / WBC Count (TLC)",
            "Absolute Neutrophil Count",
            "Absolute Lymphocyte Count (ALC)",
            "Absolute Monocyte Count",
            "Absolute Basophils Count (ABC)",
            "Immature Granulocyte Percentage",
            "RDW SD",
            "Nucleated Red Blood Cells Percentage",
            "Immature Granulocytes",
            "RDW-CV",
            "Nucleated Red Blood Cells"
          ]
        },
        {
          name: "Urine Routine Test",
          subTests: [
            "Specific Gravity",
            "pH-value",
            "Nitrite",
            "Urine Protein",
            "Urine Glucose",
            "Ketones",
            "Urobilinogen",
            "Urine Bilirubin",
            "Urine Blood",
            "Red Blood Cells",
            "Yeast Cells",
            "Bacteria",
            "Volume",
            "Bile Salt",
            "Parasites",
            "MUCS",
            "Leukocyte Esterase"
          ]
        }
      ],
      price: 2599,
      numTestsIncluded: 63
    }
  ];

  const handleCardClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Welcome to DLabs - Ultimate Health Partner</h1>
        <p style={{lineHeight:"30px",fontWeight:"bold"}}>Discover Our Comprehensive Lab Packages</p>
        <Button variant="success" onClick={handleButtonClick} style={styles.button}>
         + Add Packages
        </Button>
      </div>

      <div style={styles.cardContainer}>
        {packaged.map((pkg, index) => (
          <Card key={index} style={styles.card} onClick={() => handleCardClick(pkg)}>
            <Card.Body>
              <Card.Title>{pkg.name}</Card.Title>
              {/* <Card.Text>{pkg.lab}</Card.Text> */}
              <Card.Text>Number of Tests Included: {pkg.numTestsIncluded}</Card.Text>
              <Card.Text><b>₹ {pkg.price} onwards</b></Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
      <Modal.Header>
        <Modal.Title style={{ marginLeft: "120px", fontWeight: "bold" }}>{selectedPackage && selectedPackage.name}</Modal.Title>
        <div style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }} onClick={handleCloseModal}>
          <FaTimes />
        </div>
      </Modal.Header>
      <Modal.Body>
        {selectedPackage && (
          <div>
            <h5>Tests Included:</h5>
            <ul>
              {selectedPackage.tests.map((test, index) => (
                <li key={index}>
                  {test.name}
                  {test.subTests.length > 0 && (
                    <ul>
                      {test.subTests.map((subTest, subIndex) => (
                        <li key={subIndex}>{subTest}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        <Button variant="secondary" onClick={handleCloseModal} style={{color:"white"}}>
          Close
        </Button>
        <Button variant="success" style={{ marginLeft: "25px",color:"white" }}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  heading: {
    margin: 0,
    fontSize: '2rem'
  },
  button: {
    marginTop: '10px',
    color:"white"
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    
  },
  card: {
    width: '300px',
    cursor: 'pointer',  }
};

export default User;
