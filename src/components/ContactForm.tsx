import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Mail,
  Phone,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    shootType: initialService || 'Wedding',
    preferredDate: '',
    location: '',
    estimatedBudget: '',
    hours: 'Full Day (6-8 hours)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact phone number.';
    }

    if (!formData.location.trim()) {
      errs.location =
        'Please indicate your shoot location or venue in Lagos.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please tell us a little about your occasion.';
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

            subject: `New Photography Enquiry - ${formData.shootType}`,

            from_name: formData.fullName,
            email: formData.email,

            fullName: formData.fullName,
            phone: formData.phone,
            shootType: formData.shootType,
            preferredDate: formData.preferredDate,
            location: formData.location,
            estimatedBudget: formData.estimatedBudget,
            hours: formData.hours,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Web3Forms error:', error);

      setSubmitError(
        'We could not send your enquiry. Please try again or contact us directly on WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello Tublack Imagery!

Name: ${formData.fullName || 'Prospective Client'}
Shoot Type: ${formData.shootType}
Date: ${formData.preferredDate || 'Not specified'}
Location: ${formData.location || 'Lagos'}
Details: ${
        formData.message ||
        'I would like to inquire about booking a shoot.'
      }`
    );

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-[#1d4ed8] font-semibold mb-3">
            Inquiries &amp; Bookings
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b1b38] font-normal tracking-tight">
            Let's talk about your shoot.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Tell us a little about your plans, and we'll get back to you
            with availability and the right package for your shoot.
          </p>
        </div>

        {submitted ? (
          /* ============================================================
             SUCCESS MESSAGE
          ============================================================ */
          <div className="p-10 sm:p-14 bg-[#f8fafc] border border-emerald-300 rounded-2xl text-center max-w-2xl mx-auto shadow-sm animate-in fade-in duration-300">

            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-5" />

            <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1b38] font-medium">
              Enquiry Received
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Thank you,{' '}
              <strong className="text-[#0b1b38]">
                {formData.fullName}
              </strong>
              . We have received your details for your upcoming{' '}
              <strong className="text-[#1d4ed8]">
                {formData.shootType}
              </strong>{' '}
              shoot in Lagos.
            </p>

            <p className="mt-2 text-xs text-slate-500">
              We usually respond within 24 hours with package
              availability and next steps.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0b1b38] hover:bg-[#142850] rounded transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-sky-300" />
                <span>Follow up on WhatsApp</span>
              </button>

              {/* Send Another */}
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSubmitError('');
                  setErrors({});

                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    shootType: 'Wedding',
                    preferredDate: '',
                    location: '',
                    estimatedBudget: '',
                    hours: 'Full Day (6-8 hours)',
                    message: '',
                  });
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0b1b38] bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          /* ============================================================
             CONTACT FORM
          ============================================================ */
          <div className="bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm">

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >

              {/* ======================================================
                  ROW 1: NAME & EMAIL
              ====================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#0b1b38] placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-300 focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38]'
                    }`}
                  />

                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#0b1b38] placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-300 focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38]'
                    }`}
                  />

                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* ======================================================
                  ROW 2: PHONE & SHOOT TYPE
              ====================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="e.g. +234 803 000 0000"
                    className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#0b1b38] placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-300 focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38]'
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Shoot Type */}
                <div>
                  <label
                    htmlFor="shootType"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Type of Shoot{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="shootType"
                    value={formData.shootType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        shootType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-sm text-[#0b1b38] focus:outline-none focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38] transition-colors"
                  >
                    <option value="Wedding">
                      Wedding Photography
                    </option>
                    <option value="Birthday">
                      Birthday Photography
                    </option>
                    <option value="Portrait">
                      Portrait Photography
                    </option>
                    <option value="Pre-Wedding">
                      Pre-Wedding Photography
                    </option>
                    <option value="Event">
                      Event Photography
                    </option>
                    <option value="Couple">
                      Couple Photography
                    </option>
                    <option value="Lifestyle">
                      Lifestyle Photography
                    </option>
                    <option value="Corporate">
                      Corporate Coverage
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* ======================================================
                  ROW 3: DATE & LOCATION
              ====================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredDate: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-sm text-[#0b1b38] focus:outline-none focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38] transition-colors"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Location / Venue{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value,
                      })
                    }
                    placeholder="e.g. Victoria Island, Lekki, Ikeja, or Destination"
                    className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#0b1b38] placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.location
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-300 focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38]'
                    }`}
                  />

                  {errors.location && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* ======================================================
                  ROW 4: BUDGET & HOURS
              ====================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Budget */}
                <div>
                  <label
                    htmlFor="estimatedBudget"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Estimated Budget (Optional)
                  </label>

                  <input
                    id="estimatedBudget"
                    type="text"
                    value={formData.estimatedBudget}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        estimatedBudget: e.target.value,
                      })
                    }
                    placeholder="e.g. ₦500,000 - ₦1,500,000 / Flexible"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-sm text-[#0b1b38] placeholder-slate-400 focus:outline-none focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38] transition-colors"
                  />
                </div>

                {/* Hours */}
                <div>
                  <label
                    htmlFor="hours"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                  >
                    Number of Hours
                  </label>

                  <select
                    id="hours"
                    value={formData.hours}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hours: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-sm text-[#0b1b38] focus:outline-none focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38] transition-colors"
                  >
                    <option value="2-4 hours (Studio / Portrait / Short Event)">
                      2 - 4 hours (Studio / Portrait / Short Event)
                    </option>

                    <option value="6-8 hours (Half Day / Birthday Gala)">
                      6 - 8 hours (Half Day / Birthday Gala)
                    </option>

                    <option value="Full Day (8-14 hours)">
                      Full Day (8 - 14 hours)
                    </option>

                    <option value="Multi-Day (Traditional + White Wedding)">
                      Multi-Day (Traditional + White Wedding)
                    </option>
                  </select>
                </div>
              </div>

              {/* ======================================================
                  ROW 5: MESSAGE
              ====================================================== */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0b1b38] mb-2"
                >
                  Tell us about your occasion{' '}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us a little about your occasion, the theme, specific moments you want captured, or questions regarding our packages..."
                  className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#0b1b38] placeholder-slate-400 focus:outline-none transition-colors ${
                    errors.message
                      ? 'border-red-500 ring-1 ring-red-500'
                      : 'border-slate-300 focus:border-[#0b1b38] focus:ring-1 focus:ring-[#0b1b38]'
                  }`}
                />

                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* ======================================================
                  SUBMIT ERROR
              ====================================================== */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                  {submitError}
                </div>
              )}

              {/* ======================================================
                  SUBMIT CTA
              ====================================================== */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#0b1b38] hover:bg-[#142850] disabled:opacity-50 transition-all duration-200 rounded shadow-md focus-visible:ring-2 focus-visible:ring-[#0b1b38]"
                >
                  <span>
                    {submitting
                      ? 'Submitting Enquiry...'
                      : 'Submit Enquiry'}
                  </span>

                  <ArrowUpRight className="w-4 h-4 text-sky-300" />
                </button>

                <p className="text-xs text-slate-500 text-center sm:text-right">
                  Strict privacy. We respect your confidentiality.
                </p>
              </div>
            </form>

            {/* ========================================================
                ALTERNATIVE DIRECT CHANNELS
            ======================================================== */}
            <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1d4ed8]" />

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#0b1b38] transition-colors font-medium"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Phone Numbers → WhatsApp */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1d4ed8]" />

                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {SITE_CONFIG.phoneNumbers.map((phone) => (
                    <a
                      key={phone.whatsapp}
                      href={`https://wa.me/${phone.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0b1b38] transition-colors font-medium"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#1d4ed8]" />

                <button
                  onClick={handleWhatsAppDirect}
                  className="text-[#1d4ed8] hover:text-[#0b1b38] hover:underline font-semibold"
                >
                  Chat directly on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};