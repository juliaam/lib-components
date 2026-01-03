import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormProvider, useForm } from "react-hook-form";
import { RHSelect } from "./rh-select";

const meta: Meta<typeof RHSelect> = {
  title: "Form/FormSelect",
  component: RHSelect,
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
type Story = StoryObj<typeof RHSelect>;

export const Default: Story = {
  args: {
    name: "framework",
    label: "Label",
    placeholder: "Select your framework",
    options: [
      { label: "Next.js", value: "next" },
      { label: "SvelteKit", value: "svelte" },
      { label: "Astro", value: "astro" },
      { label: "Nuxt.js", value: "nuxt" },
    ],
    description: "This is the framework you will be using.",
  },
};
