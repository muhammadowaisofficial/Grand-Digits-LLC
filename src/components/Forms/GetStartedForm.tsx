'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { GetStartedFormSchema } from '@/utils/validations/GetStartedFormSchema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { categories } from '@/content/Categories';
import Phone from '@/components/ui/Phone';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/utils/trpc-provider';

const GetStartedForm = ({ darkmode }: { darkmode: boolean }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const contactMail = api.email.contact.useMutation();

  const form = useForm<z.infer<typeof GetStartedFormSchema>>({
    resolver: zodResolver(GetStartedFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      services: '',
    },
  });

  async function onSubmit(values: z.infer<typeof GetStartedFormSchema>) {
    setIsLoading(true);

    try {
      
      const res = await contactMail.mutateAsync(values)
      if (res) {
        toast({
          title: 'Success',
          description: 'Thank you for contacting us. We will be with you shortly.',
          variant: 'default',
        });
      }
      else {
        toast({
          title: 'Something went Wrong.',
          description: 'There was an error during Email. Please Try Again Later.',
          variant: 'destructive',
        });
      }

      // throw new Error();
    } catch (error) {
      // toast notification
      toast({
        title: 'Error Sending Email',
        description: 'There was an error during Email. Please Try Again Later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="div_container mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
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
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={darkmode ? '' : 'text-white'}>
                Services
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={
                      darkmode
                        ? 'SelectTrigger text-black'
                        : 'SelectTrigger text-white'
                    }
                  >
                    {/* <p className="text-muted-foreground">Select</p> */}
                    {/* <SelectValue placeholder={"Select"}  /> */}
                    {field.value ? (
                      <SelectValue placeholder={'Select'} />
                    ) : (
                      <p className="text-muted-foreground">Select</p>
                    )}
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => {
                    return (
                      <SelectItem value={category.name} key={category.id}>
                        {category.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              {/* <FormDescription>Please Select a Service</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit" isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default GetStartedForm;
