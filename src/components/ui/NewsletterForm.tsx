import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Replace with actual Listmonk API endpoint
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email to confirm.');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary-indigo mb-2">
        Stay Updated
      </h3>
      <p className="text-primary-indigo/70 mb-6">
        Get the latest on events, resources, and the movement for intelligence freedom.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading' || status === 'success'}
            className="w-full px-4 py-3 border border-primary-indigo/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-primary-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-magenta transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
        </button>

        {message && (
          <p
            className={`text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <p className="text-xs text-primary-indigo/60 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
