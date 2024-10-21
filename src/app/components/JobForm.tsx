'use client';
import '@radix-ui/themes/styles.css';
import { TextArea, RadioGroup, TextField, Theme } from '@radix-ui/themes';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import { useState } from 'react';
export default function JobForm() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <Theme>
      <form className="container mt-6 flex flex-col gap-4">
        <TextField.Root placeholder="Job Title" />
        <div className="grid grid-cols-3 gap-4 *:grow">
          <div>
            Workplace:
            <RadioGroup.Root defaultValue="hybrid" name="Workplace">
              <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
              <RadioGroup.Item value="hybrid">hybrid-remote</RadioGroup.Item>
              <RadioGroup.Item value="remote">Fully remote</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Employment:
            <RadioGroup.Root defaultValue="full" name="Employment">
              <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
              <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
              <RadioGroup.Item value="contract">Contract</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Salary
            <TextField.Root>
              <TextField.Slot>₹</TextField.Slot>
              <TextField.Slot>lpa</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          Location:
          <div className="flex gap-4 *:grow">
            <CountrySelect
              onChange={(e) => {
                setCountryid(e.id);
              }}
              placeHolder="Select Country"
            />
            <StateSelect
              countryid={countryid}
              onChange={(e) => {
                setstateid(e.id);
              }}
              placeHolder="Select State"
            />
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e) => {
                console.log(e);
              }}
              placeHolder="Select City"
            />
          </div>
        </div>
        <TextArea placeholder="Job description" resize={'vertical'} />
      </form>
      ;
    </Theme>
  );
}
