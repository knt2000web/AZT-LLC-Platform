import { useState } from 'react';
import { supabase } from '../lib/supabase';

const DOMAINS = [
  'Aviation Solutions',
  'Integrated Defense',
  'Maritime Security',
  'Infrastructure Security',
  'Other / Unspecified',
];

const INITIAL = {
  full_name:       '',
  organization:    '',
  domain_interest: DOMAINS[0],
  description:     '',
};

export default function InquiryForm() {
  const [form,   setForm]   = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.full_name.trim())    e.full_name    = 'Full name is required.';
    if (!form.organization.trim()) e.organization = 'Organization is required.';
    if (!form.description.trim())  e.description  = 'Please provide a brief description.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    try {
      const { error } = await supabase.from('inquiries').insert([form]);
      if (error) throw error;
      setStatus('success');
      setForm(INITIAL);
    } catch (err) {
      console.error('[InquiryForm]', err);
      setStatus('error');
    }
  };

  return (
    <section id="inquiry" className="bg-primary py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white rounded-sm shadow-2xl p-8 md:p-14 relative overflow-hidden">

          {/* Watermark icon */}
          <span
            className="material-symbols-outlined absolute right-8 top-8 text-primary/5 select-none"
            translate="no"
            style={{ fontSize: '120px' }}
          >
            encrypted
          </span>

          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-2">Secure Inquiry Portal</h2>
          <p className="text-secondary text-sm mb-8 max-w-xl">
            Submit your requirements for executive review. All communications are strictly confidential.
          </p>
          <div className="w-12 h-px bg-accent mb-8" />

          {/* Success state */}
          {status === 'success' && (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <span
                className="material-symbols-outlined text-green-600"
                translate="no"
                style={{ fontSize: '56px' }}
              >
                check_circle
              </span>
              <h3 className="text-xl font-black text-primary uppercase tracking-widest">Message Received</h3>
              <p className="text-secondary text-sm max-w-sm">
                Your inquiry has been transmitted and logged securely. An AZT executive will contact you within 48 business hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-[10px] uppercase tracking-widest font-black text-accent underline"
              >
                Submit another inquiry
              </button>
            </div>
          )}

          {/* Error state */}
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 p-4 mb-6 flex items-start gap-3">
              <span
                className="material-symbols-outlined text-red-500 flex-shrink-0"
                translate="no"
                style={{ fontSize: '20px' }}
              >
                error
              </span>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-red-700">Transmission Failed</p>
                <p className="text-xs text-red-600 mt-1">
                  A technical error occurred. Please retry or contact us directly at{' '}
                  <a href="mailto:aztradingpower@outlook.com" className="underline">aztradingpower@outlook.com</a>.
                </p>
              </div>
            </div>
          )}

          {/* Form — hidden when success */}
          {status !== 'success' && (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name + Org */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Full Name"
                  name="full_name"
                  type="text"
                  placeholder="REQUIRED"
                  value={form.full_name}
                  onChange={handleChange}
                  error={errors.full_name}
                />
                <Field
                  label="Organization / Agency"
                  name="organization"
                  type="text"
                  placeholder="REQUIRED"
                  value={form.organization}
                  onChange={handleChange}
                  error={errors.organization}
                />
              </div>

              {/* Domain select */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">
                  Domain of Interest
                </label>
                <select
                  name="domain_interest"
                  value={form.domain_interest}
                  onChange={handleChange}
                  className="w-full bg-surface-container border border-accent/30 focus:outline-none focus:ring-1 focus:ring-primary p-4 text-sm font-medium text-primary"
                >
                  {DOMAINS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">
                  Brief Description of Requirement
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="PLEASE PROVIDE HIGH-LEVEL DETAILS..."
                  value={form.description}
                  onChange={handleChange}
                  className={`w-full bg-surface-container border p-4 text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-1 focus:ring-primary resize-none ${
                    errors.description ? 'border-red-400' : 'border-accent/30'
                  }`}
                />
                {errors.description && (
                  <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.description}</p>
                )}
              </div>

              {/* Footer row */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
                <div className="flex items-start gap-3 text-[10px] text-secondary uppercase font-semibold leading-tight max-w-sm">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    translate="no"
                    style={{ fontSize: '16px', fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 16" }}
                  >
                    security
                  </span>
                  Transmission secured via AES-256 encryption. Unauthorized access is strictly prohibited.
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-primary text-white px-12 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-accent hover:text-primary transition-colors w-full md:w-auto border border-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-3 h-3 border border-white/50 border-t-white rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Reusable field
function Field({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-secondary block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-surface-container border p-4 text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-1 focus:ring-primary ${
          error ? 'border-red-400' : 'border-accent/30'
        }`}
      />
      {error && (
        <p className="text-[10px] text-red-500 uppercase tracking-widest">{error}</p>
      )}
    </div>
  );
}
