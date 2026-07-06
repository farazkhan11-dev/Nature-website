import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X, CreditCard, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import Header from '../components/Header.jsx';
import Subscription from '../components/Subscription.jsx';

const plans = [
  {
    name: 'Wanderer',
    price: 'Free',
    period: '',
    description: 'For anyone just starting to explore.',
    features: [
      'Browse all listed places',
      'Save up to 5 places',
      'Basic trail details & ratings',
    ],
    highlight: false,
  },
  {
    name: 'Trailblazer',
    price: '$4',
    period: '/month',
    description: 'For regular hikers who plan ahead.',
    features: [
      'Everything in Wanderer',
      'Unlimited saved places',
      'Offline maps for saved trails',
      'Closure & weather alerts',
    ],
    highlight: true,
  },
  {
    name: 'Pathfinder',
    price: '$9',
    period: '/month',
    description: 'For the ones who go furthest.',
    features: [
      'Everything in Trailblazer',
      'Printable topo maps',
      'Priority scouting requests',
      'Early access to new listings',
    ],
    highlight: false,
  },
];

// Formats "1234567890123456" -> "1234 5678 9012 3456"
function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

// Formats "1225" -> "12/25"
function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form, setForm] = useState({ email: '', name: '', card: '', expiry: '', cvv: '' });
  const [submitting, setSubmitting] = useState(false);

  const closeModal = () => {
    setSelectedPlan(null);
    setForm({ email: '', name: '', card: '', expiry: '', cvv: '' });
  };

  const update = (field) => (e) => {
    let { value } = e.target;
    if (field === 'card') value = formatCardNumber(value);
    if (field === 'expiry') value = formatExpiry(value);
    if (field === 'cvv') value = value.replace(/\D/g, '').slice(0, 3);
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.email.includes('@') ||
      !form.name.trim() ||
      form.card.replace(/\s/g, '').length !== 16 ||
      form.expiry.length !== 5 ||
      form.cvv.length !== 3
    ) {
      toast.error('Fill in every field correctly before confirming.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      toast.success(`You're subscribed to ${selectedPlan.name}. Welcome aboard!`);
      setSubmitting(false);
      closeModal();
    }, 1000);
  };

  return (
    <>
      <Header
        eyebrow="Membership"
        title="Choose how far you want to go"
        description="Free to browse. Upgrade when you're ready to plan more, save more, and go further off the map."
      />

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-8 border flex flex-col transition-shadow ${
                plan.highlight
                  ? 'bg-canopy text-mist border-canopy shadow-xl md:scale-[1.02]'
                  : 'bg-white/70 text-bark border-bark/10 hover:shadow-lg'
              }`}
            >
              {plan.highlight && (
                <span className="self-start mb-4 text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-clay text-canopy-dark">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-2xl">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlight ? 'text-mist/70' : 'text-bark-light'}`}>
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-mist/60' : 'text-bark-light/70'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={plan.highlight ? 'text-clay-light mt-0.5' : 'text-moss-dark mt-0.5'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedPlan(plan)}
                className={`mt-8 w-full py-3 rounded-full font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-clay text-canopy-dark hover:bg-clay-light'
                    : 'bg-canopy text-mist hover:bg-canopy-light'
                }`}
              >
                {plan.price === 'Free' ? 'Get started' : `Choose ${plan.name}`}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <Subscription />

      {/* Checkout modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100 bg-black/60 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-mist rounded-2xl w-full max-w-md p-8 relative"
            >
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-5 right-5 text-bark-light hover:text-bark"
              >
                <X size={20} />
              </button>

              <span className="font-mono text-xs tracking-[0.2em] uppercase text-moss-dark">
                {selectedPlan.name} plan
              </span>
              <h3 className="mt-2 font-display text-2xl text-bark">
                {selectedPlan.price}
                {selectedPlan.period && <span className="text-base text-bark-light">{selectedPlan.period}</span>}
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                    Name on card
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                    Card number
                  </label>
                  <div className="relative">
                    <CreditCard size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-bark/40" />
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.card}
                      onChange={update('card')}
                      placeholder="1234 5678 9012 3456"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50 font-mono"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                      Expiry
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.expiry}
                      onChange={update('expiry')}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50 font-mono"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.cvv}
                      onChange={update('cvv')}
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50 font-mono"
                    />
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 mt-2 py-3 rounded-full bg-canopy text-mist font-medium hover:bg-canopy-light transition-colors disabled:opacity-60"
                >
                  <Lock size={15} />
                  {submitting ? 'Confirming…' : `Confirm ${selectedPlan.name}`}
                </motion.button>

                <p className="text-center text-xs text-bark-light/60 pt-1">
                  Demo checkout — no real payment is processed.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}