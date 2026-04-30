import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function ContactForm() {
  const { lang } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Fail-safe: Reset status after 15s if stuck
    const failSafe = setTimeout(() => {
      setStatus(prev => prev === 'sending' ? 'idle' : prev);
    }, 15000);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    try {
      const response = await fetch(`${apiUrl}/api/portfolio/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      clearTimeout(failSafe);
      if (response.ok) {
        const data = await response.json();
        setResponseMsg(data.message);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      clearTimeout(failSafe);
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(prev => prev === 'error' ? 'idle' : prev), 3000);
    }
  };

  return (
    <section className="contact-form-container">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="contact-form-title"
      >
        {lang === 'en' ? 'Send a Message' : 'Envie uma Mensagem'}
      </motion.h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">{lang === 'en' ? 'Name' : 'Nome'}</label>
          <input
            type="text"
            required
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={lang === 'en' ? 'Your Name' : 'Seu Nome'}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{lang === 'en' ? 'Email' : 'E-mail'}</label>
          <input
            type="email"
            required
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{lang === 'en' ? 'Message' : 'Mensagem'}</label>
          <textarea
            required
            className="form-textarea"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={lang === 'en' ? 'How can I help you?' : 'Como posso te ajudar?'}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="submit-btn"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            lang === 'en' ? 'Sending...' : 'Enviando...'
          ) : (
            <>
              <Send size={18} style={{ marginRight: '8px' }} />
              {lang === 'en' ? 'Send Message' : 'Enviar Mensagem'}
            </>
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="form-success-msg"
          >
            <CheckCircle size={20} style={{ marginBottom: '8px' }} />
            <p>{responseMsg}</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="form-success-msg"
            style={{ color: '#ef4444', borderColor: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' }}
          >
            <p>{lang === 'en' ? 'Error sending message. Please try again.' : 'Erro ao enviar. Tente novamente.'}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
