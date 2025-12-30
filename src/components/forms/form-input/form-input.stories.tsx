import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "./form-input";

const meta: Meta<typeof FormInput> = {
  title: "Form/FormInput",
  component: FormInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const methods = useForm();
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
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
    description: "This is your public display name.",
  },
};

export const WithIcon: Story = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "email@example.com",
    icon: <Mail className="h-4 w-4" />,
  },
};
