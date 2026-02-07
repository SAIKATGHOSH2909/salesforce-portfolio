"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Linkedin, Github, Mail, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/components/animations/variants";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ContactFormData } from "@/types";

/**
 * Contact form schema validation
 */
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

/**
 * Contact section with form and social links
 * Professional CTA and form validation
 */
export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section
      id="contact"
      subtitle="Get In Touch"
      title="Let&apos;s Build Scalable Salesforce Solutions"
    >
      <div className="max-w-2xl mx-auto">
        {/* CTA Text */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-lg text-secondary-300 leading-relaxed">
            Looking for a Salesforce Developer or Consultant to help scale your platform? 
            Let&apos;s discuss how we can build enterprise-grade solutions together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeInUp}>
          <Card variant="glass">
            {isSubmitted ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-secondary-100 mb-2">
                  Message Sent!
                </h3>
                <p className="text-secondary-400">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-200 mb-2"
                  >
                    Name *
                  </label>
                  <motion.input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-100 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-200 mb-2"
                  >
                    Email *
                  </label>
                  <motion.input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-100 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondary-200 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <motion.input
                    {...register("company")}
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-100 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your company"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-200 mb-2"
                  >
                    Message *
                  </label>
                  <motion.textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-100 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center gap-6"
        >
          <motion.a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={SOCIAL_LINKS.email}
            className="p-3 bg-secondary-800/50 border border-secondary-700 rounded-lg text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Send Email"
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};
