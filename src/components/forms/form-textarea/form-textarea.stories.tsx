import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormProvider, useForm } from "react-hook-form";
import { RHTextarea } from "./rh-textarea";

const meta: Meta<typeof RHTextarea> = {
  title: "Form/FormTextarea",
  component: RHTextarea,
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
type Story = StoryObj<typeof RHTextarea>;

export const Default: Story = {
  args: {
    name: "bio",
    label: "Bio",
    placeholder: "Tell us a little bit about yourself",
    description: "You can @mention other users and organizations.",
  },
};
