import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "./sonner";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Show Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
      >
        Show Error Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() => toast.info("Event has been created")}
      >
        Show Info Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() => toast.warning("Event has been created")}
      >
        Show Warning Toast
      </Button>
    </div>
  ),
};
