import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';

import { AccordionComponents } from '..';
import { Accordion } from './accordion.component';

const meta = {
  title: 'Accordion',
  tags: ['autodocs'],
  component: Accordion,
  decorators: [moduleMetadata({ imports: [AccordionComponents] })],
} satisfies Meta<Accordion>;
export default meta;

type Story = StoryObj<Accordion>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ui-accordion>
        <ui-accordion-item value="0">
          <ui-accordion-trigger>First section</ui-accordion-trigger>
          <ui-accordion-content>Panel 1</ui-accordion-content>
        </ui-accordion-item>
        <ui-accordion-item value="1">
          <ui-accordion-trigger>Second section</ui-accordion-trigger>
          <ui-accordion-content>Panel 2</ui-accordion-content>
        </ui-accordion-item>
        <ui-accordion-item value="2">
          <ui-accordion-trigger>Last section</ui-accordion-trigger>
          <ui-accordion-content>Panel 3</ui-accordion-content>
        </ui-accordion-item>
      </ui-accordion>
    `,
  }),
  args: {},
};
