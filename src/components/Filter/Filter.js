import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Filter() {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Buscar camisetas"
          aria-label="Buscar camisetas"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          <BsSearch />
        </Button>
      </InputGroup>
    </div>
  );
}

export default Filter;
