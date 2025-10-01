'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, CheckCircle2 } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ConvertKit integration - replace with actual form ID
    const formId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
    
    try {
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="h-16 w-16 mx-auto mb-6 text-green-300" />
            <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
            <p className="text-lg text-purple-100">
              Check your inbox for a confirmation email and get ready for exclusive concert alerts.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss a Show
          </h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100">
            Get weekly alerts for the best country and pop concerts in your city, plus exclusive venue tips and early access to tickets.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-purple-700 hover:bg-purple-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Get Alerts'}
            </Button>
          </form>

          <p className="text-sm text-purple-200 mt-4">
            Free forever. Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
