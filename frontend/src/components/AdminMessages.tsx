import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, RefreshCcw, Mail, User, Calendar, MessageSquare } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export function AdminMessages({ onClose }: { onClose: () => void }) {
  const { lang } = useI18n();
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/portfolio/contact`, { 
        signal: controller.signal 
      });
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="admin-overlay"
    >
      <div className="admin-container card-masterpiece">
        <div className="admin-header">
          <div className="admin-header-left">
            <Table className="text-primary-gold" />
            <h2 className="gradient-heading admin-header-title">
              {lang === 'en' ? 'Inbound Messages' : 'Mensagens Recebidas'}
            </h2>
          </div>

          <div className="admin-header-actions">
            <button
              onClick={fetchMessages}
              className="admin-btn-secondary"
              title={lang === 'en' ? 'Refresh Messages' : 'Atualizar Mensagens'}
              aria-label={lang === 'en' ? 'Refresh Messages' : 'Atualizar Mensagens'}
            >
              <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={onClose}
              className="admin-btn-close"
              title={lang === 'en' ? 'Close' : 'Fechar'}
              aria-label={lang === 'en' ? 'Close' : 'Fechar'}
            >
              ×
            </button>
          </div>
        </div>

        <div className="admin-content">
          {loading ? (
            <div className="admin-loading">
              <div className="spinner"></div>
              <p>Fetching Authority Data...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="admin-empty">
              <Mail size={48} className="admin-empty-icon" />
              <p>{lang === 'en' ? 'No messages yet.' : 'Nenhuma mensagem ainda.'}</p>
            </div>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th><Calendar size={14} /> {lang === 'en' ? 'Date' : 'Data'}</th>
                    <th><User size={14} /> {lang === 'en' ? 'Name' : 'Nome'}</th>
                    <th><Mail size={14} /> E-mail</th>
                    <th><MessageSquare size={14} /> {lang === 'en' ? 'Message' : 'Mensagem'}</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <motion.tr
                      key={msg.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <td className="td-date">
                        {new Date(msg.createdAt).toLocaleDateString(lang === 'en' ? 'en-US' : 'pt-BR', {
                          day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="td-name">{msg.name}</td>
                      <td className="td-email">{msg.email}</td>
                      <td className="td-message">{msg.message}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="admin-footer">
          <p className="admin-footer-text">
            {lang === 'en' ? 'Secured by Spring Boot 3.4 & Authority Middleware' : 'Protegido por Spring Boot 3.4 & Authority Middleware'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
