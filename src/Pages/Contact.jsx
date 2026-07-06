import { useState } from 'react';
import toast from 'react-hot-toast';
import { Mail, MapPin, Send } from 'lucide-react';
import Header from '../Components/Header.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes('@') || !form.message.trim()) {
      toast.error('Fill in your name, a valid email, and a message.');
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success('Message sent. We usually reply within two days.');
      setForm({ name: '', email: '', message: '' });
      setSending(false);
    }, 900);
  };

  return (
    <>
      <Header
        eyebrow="Get in touch"
        title="Report a trail, or say hello"
        description="Spotted an outdated detail, a closure, or a place we should scout? Tell us."
      />

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-moss-dark mt-1" />
              <div>
                <div className="font-display text-lg text-bark">Email</div>
                <div className="text-sm text-bark-light">hello@wildpath.example</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-moss-dark mt-1" />
              <div>
                <div className="font-display text-lg text-bark">Based in</div>
                <div className="text-sm text-bark-light">Cascadia Basecamp, remote-first team</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                Name
              </label>
              <input
                value={form.name}
                onChange={update('name')}
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                Email
              </label>
              <input
                value={form.email}
                onChange={update('email')}
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wide text-bark-light mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-bark/10 focus:outline-none focus:ring-2 focus:ring-moss/50 resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-canopy text-mist font-medium hover:bg-canopy-light transition-colors disabled:opacity-60"
            >
              {sending ? 'Sending…' : 'Send message'} <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}