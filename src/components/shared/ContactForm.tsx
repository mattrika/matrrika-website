"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = React.useCallback(async (values: z.infer<typeof formSchema>) => {
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", values);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    setCaptchaValue(null);
  }, [captchaValue, form]);

  React.useEffect(() => {
    if (isSuccess) {
      recaptchaRef.current?.reset();
    }
  }, [isSuccess]);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const labelStyle = "text-sm font-normal uppercase tracking-widest text-(--brand-text-muted) mb-2 block";
  const inputStyle = "bg-transparent border-t-0 border-x-0 border-b border-(--brand-text-main)/20 rounded-none px-0 py-3 text-xl font-normal placeholder:text-(--brand-text-muted)/40 focus-visible:ring-0 focus-visible:border-(--brand-primary) transition-all outline-none h-auto w-full shadow-none";
  const errorStyle = "text-red-500 text-xs mt-1 font-medium";

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <CheckCircle2 className="w-16 h-16 text-(--brand-primary) animate-in zoom-in duration-500" />
        <h3 className="text-3xl font-bold text-(--brand-text-main)">Message Sent!</h3>
        <p className="text-(--brand-text-muted) max-w-md">
          Thank you for reaching out. We&apos;ve received your message and will get back to you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="mt-4 border-(--brand-primary) text-(--brand-primary) hover:bg-(--brand-primary) hover:text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className=" w-full max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelStyle}>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className={inputStyle}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className={errorStyle} />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelStyle}>Your Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@example.com"
                      className={inputStyle}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className={errorStyle} />
                </FormItem>
              )}
            />

            {/* Subject */}
            <div className="col-span-1 md:col-span-2">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelStyle}>Your Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your subject"
                        className={inputStyle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={errorStyle} />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelStyle}>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write here your message"
                        className={`${inputStyle} min-h-[120px] resize-none`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={errorStyle} />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div
              onClick={() => !captchaValue && recaptchaRef.current?.execute()}
              className={`
                relative flex items-center justify-between w-full max-w-[480px] h-[74px] px-2 bg-white rounded-xl  shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 group
                ${captchaValue ? 'bg-[#f9f9f9]' : 'hover:bg-gray-50'}
              `}
            >
              <div className="flex items-center">
                <div className="relative -ml-4 mr-6">
                  <div className={`
                    w-[54px] h-[54px] rounded-[14px] flex items-center justify-center transition-all duration-500
                    ${captchaValue ? 'bg-[#ffffff] border-2 border-[#4db33d]' : 'bg-[var(--brand-primary)] border border-[var(--brand-primary)]  shadow-[0_4px_12px_rgba(26,115,232,0.3)]'}
                  `}>
                    {captchaValue ? (
                      <CheckCircle2 className="w-8 h-8 text-[#4db33d] animate-in zoom-in duration-300" />
                    ) : (
                      <div className="w-6 h-6 border-[3px] border-white rounded-md opacity-90" />
                    )}
                  </div>
                </div>

                {/* Typography: i'm not a robot */}
                <span className="text-[15px] md:text-[17px] font-normal text-[#202124] tracking-[0.25em] lowercase select-none font-sans antialiased uppercase">
                  i&apos;m not a robot
                </span>
              </div>

              {/* reCAPTCHA Branding Section */}
              <div className="flex flex-col items-center pr-4">
                <div className="relative w-[32px] h-[32px] mb-1">
                  {/* Custom reCAPTCHA Icon Approximation */}
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#4a90e2] animate-[spin_10s_linear_infinite]">
                    <path fill="currentColor" d="M12,4V1L8,5l4,4V6c3.31,0,6,2.69,6,6c0,1.01-0.25,1.97-0.7,2.8l1.46,1.46C19.54,15.03,20,13.57,20,12C20,7.58,16.42,4,12,4z M4.7,9.2L3.24,7.74C2.46,8.97,2,10.43,2,12c0,4.42,3.58,8,8,8v3l4-4l-4-4v3c-3.31,0-6-2.69-6-6C4,10.99,4.25,10.03,4.7,9.2z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[9px] font-bold text-[#555] tracking-tight uppercase">reCAPTCHA</span>
                  <div className="flex gap-1.5 mt-0.5 text-[7px] text-[#777] font-medium uppercase font-sans">
                    <span className="hover:underline">Privacy</span>
                    <span className="w-0.5 h-0.5 bg-[#777] rounded-full self-center" />
                    <span className="hover:underline">Terms</span>
                  </div>
                </div>
              </div>

              {/* Real Invisible reCAPTCHA */}
              <div className="absolute opacity-0 pointer-events-none">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Sample Test Key
                  onChange={handleCaptchaChange}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 px-10 py-4 bg-(--brand-primary) text-white font-bold rounded-lg hover:bg-(--brand-primary-hover) transition-all duration-300 shadow-lg shadow-(--brand-primary)/20 flex items-center gap-2 h-auto text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
