import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormProvider, useForm } from "react-hook-form";
import { RHSwitch } from "./rh-switch";

const meta: Meta<typeof RHSwitch> = {
  title: "Form/FormSwitch",
  component: RHSwitch,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          notifications: false,
        },
      });
      return (
        <FormProvider {...methods}>
          <form className="w-2/3 space-y-6">
            <Story />
          </form>
        </FormProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof RHSwitch>;

export const Default: Story = {
  args: {
    name: "notifications",
    label: "Enable Notifications",
    description: "Receive emails about new products, features, and more.",
  },
};
