import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};
