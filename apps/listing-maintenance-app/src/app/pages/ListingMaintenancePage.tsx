import React from 'react';
import styled from 'styled-components';
import { Text } from '@mantine/core';
import Select from 'react-select';

import { ChockablockUI } from '@igluu/chockablock-ui';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function PaymentsPage() {
  return (
    <div>
      <Text>Listing Maintenance page</Text>
      <ChockablockUI {...{}} />

      <Select options={options} />
    </div>
  );
}
