import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormCheckbox } from "./form-checkbox";

const meta: Meta<typeof FormCheckbox> = {
  title: "Form/FormCheckbox",
  component: FormCheckbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormCheckbox>;

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

export const Default: Story = {
  render: (args) => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        mobile: true,
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormCheckbox
            description="You can manage your mobile notification settings in the mobile settings page."
            {...args}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
  args: {
    label: "Use different settings for my mobile devices",
    name: "mobile",
  },
};
