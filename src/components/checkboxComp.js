import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "./Checkbox";
import { Countries } from "./data";

const CheckboxComp = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [Europe, setEurope] = useState([]);
  const [Country, setCountry] = useState([]);

  const EuropeData = Countries.filter((country) => {
    if (country.continent === "Europe") {
      return country;
    }
  });

  const OtherData = Countries.filter((country) => {
    if (country.continent !== "Europe") {
      return country;
    }
  });

  useEffect(() => {
    setEurope(EuropeData);
    setCountry(OtherData);
  }, []);


  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(Europe.map((li) => li.name));
    if (isCheckAll) {
      setIsCheck([]);
    }
    
  };
  console.log(isCheck);

  const handleClick = (e) => {

    const { name, checked } = e.target;
    setIsCheck([...isCheck, name]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== name));
    }
  };

  const catalog = Europe.map(({ id, name }) => {
    return (
      <>
        <li style={{ listStyle: "none", fontSize: "17px", lineHeight: "30px" }}>
          <Checkbox
            key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick={handleClick}
            isChecked={isCheck.includes(name)}
          />
          {name}
        </li>
      </>
    );
  });
  const catalog2 = Country.map(({ id, name }) => {
    return (
      <>
        <li style={{ listStyle: "none", fontSize: "17px", lineHeight: "30px" }}>
          <Checkbox
            key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick={handleClick}
            isChecked={isCheck.includes(name)}
          />

          {name}
        </li>
      </>
    );
  });

  return (
    <div>
      <div className="MainComp" style={{ textAlign: "left" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pick your destination</Typography>
          </AccordionSummary>
          <AccordionDetails>{catalog2}</AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <Checkbox
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  handleClick={handleSelectAll}
                  isChecked={isCheckAll}
                />
                Europe
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{catalog}</AccordionDetails>
          </Accordion>
        </Accordion>
      </div>
    </div>
  );
};

export default CheckboxComp;
