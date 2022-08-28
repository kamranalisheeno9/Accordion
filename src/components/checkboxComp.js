import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const EuropeData = [
  { name: "Rome" },
  { name: "Paris" },
  { name: "Kiev" },
];
const Countries = ["Brazil", "Kenya"];


const CheckboxComp = () => {
  const [Europe, setEurope] = useState([]);
  const [country, setCountry] = useState([]);
  
  
  
  useEffect(() => {
    setEurope(EuropeData);
  }, []);
  
  
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "europe") {
      let tempUser = Europe.map((user) => {
        return { ...user, isChecked: checked };
      });
      setEurope(tempUser);
    } else {
      let tempUser = Europe.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setEurope(tempUser);
    }
    console.log(e.target.name);

  };

  
  const getValue = (e) => {
    const countryNames = country;
    if (e.target.checked == true) {
      countryNames.push(e.target.name);
      setCountry(countryNames);
    }
    console.log(e.target.name);
  };

  
  return (
    <div className="MainComp" style={{ textAlign: "left" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pick your destination</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" variant="standard">
            {Countries.map((countries, key) => {
              return (
                <FormGroup key={key}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={countries}
                        onChange={(e) => getValue(e)}
                      />
                    }
                    label={countries}
                  />
                </FormGroup>
              );
            })}
          </FormControl>
        </AccordionDetails>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <FormControl component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ marginLeft: "20px" }}
                        name="europe"
                
                        checked={!Europe.some((user) => user?.isChecked !== true)}
                        onChange={handleChange}
                      />
                    }
                    label="Europe"
                  />
                </FormGroup>
              </FormControl>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset" variant="standard">
              {Europe.map((user, index) => {
                return (
                  <FormGroup key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                        name={user.name}
                        checked={user?.isChecked || false}
                        onChange={handleChange}
                        />
                      }
                      label={user.name}
                    />
                  </FormGroup>
                );
              })}
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Accordion>
    </div>
  );
};

export default CheckboxComp;
