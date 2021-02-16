import React from 'react';
import Footer from '@ka-react-components/footer';

export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
