import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CheckboxComp = () => {

  const Countries = ["Brazil", "Kenya"];
  const EuropeCountries = ["Rome", "Paris", "Kiev"];

  const [country, setCountry] = useState([]);
  const [Europe, setEurope] = useState([]);

  const getValue = (e) => {
    const countryNames = country;
    countryNames.push(e.target.value);
    setCountry(countryNames);
};

const getValueEurope = (e) => {
    const EuropeNames = Europe;
    EuropeNames.push(e.target.value);
    setEurope(EuropeNames);
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
                        value={countries}
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
                        value="Europe"
                        onChange={(e) => getValueEurope(e)}
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
              {EuropeCountries.map((countries, key) => {
                return (
                  <FormGroup key={key}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={countries}
                          onChange={(e) => getValueEurope(e)}
                        />
                      }
                      label={countries}
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
