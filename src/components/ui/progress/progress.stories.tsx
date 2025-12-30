import type { Meta, StoryObj } from "@storybook/react-vite";

import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => <Progress value={33} className="w-[60%]" />,
};
