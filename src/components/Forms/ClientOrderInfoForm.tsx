'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ClientOrderInfoFormSchema } from '@/utils/validations/ClientOrderInfoFormSchema';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Phone from '@/components/ui/Phone';
import { Textarea } from '@/components/ui/Textarea';
//import { checkoutClientDataType } from '@/types';

const ClientOrderInfoForm = ({
  darkmode = false,
  // getClientInfo,
}: {
  darkmode: boolean;
  // getClientInfo: ({ data }: { data: checkoutClientDataType }) => void;
}) => {
  const form = useForm<z.infer<typeof ClientOrderInfoFormSchema>>({
    resolver: zodResolver(ClientOrderInfoFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof ClientOrderInfoFormSchema>) {
    // const info:checkoutClientDataType = {
    //   name: values.name,
    //   phone: values.phone,
    //   email: values.email,
    //   description: values.description,
    // };
    // getClientInfo(values);
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="div_container flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={darkmode ? '' : 'text-white'}>
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Full Name"
                  {...field}
                  className="bg-transparent"
                  darkmode={darkmode}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={darkmode ? '' : 'text-white'}>
                Phone
              </FormLabel>
              <FormControl>
                <Phone darkmode={darkmode} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={darkmode ? '' : 'text-white'}>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Email Address"
                  {...field}
                  darkmode={darkmode}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Email Address. (It will not be shared with anyone)</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={darkmode ? '' : 'text-white'}>
                Description
              </FormLabel>
              <FormControl>
                {/* <Input placeholder="Enter Email Address" {...field}  darkmode={darkmode} /> */}
                <Textarea
                  placeholder="Tell us a little bit about Project"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Email Address. (It will not be shared with anyone)</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ClientOrderInfoForm;
