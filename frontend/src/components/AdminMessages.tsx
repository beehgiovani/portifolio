import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, RefreshCcw, Mail, User, Calendar, MessageSquare, Phone } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import './AdminMessages.css';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

interface AdminMessagesProps {
  onClose: () => void;
  adminToken?: string;
}

export function AdminMessages({ onClose, adminToken = '' }: AdminMessagesProps) {
  const { lang } = useI18n();
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async (signal?: AbortSignal) => {
    setLoading(true);
    setError('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/portfolio/contact`, { 
        signal: signal,
        headers: adminToken ? { 'X-Admin-Token': adminToken } : undefined
      });
      
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else if (response.status === 403) {
        setError(lang === 'en' ? 'Admin token is missing or invalid.' : 'Token administrativo ausente ou invalido.');
      } else {
        setError(lang === 'en' ? 'Unable to load messages.' : 'Nao foi possivel carregar as mensagens.');
        console.error('Response not ok:', response.status);
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError(lang === 'en' ? 'Unable to load messages.' : 'Nao foi possivel carregar as mensagens.');
        console.error('Error fetching messages:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    
    // Timer para timeout de 60s (acomodar cold start do Render)
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 120000);

    fetchMessages(controller.signal).finally(() => clearTimeout(timeoutId));

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [adminToken, lang]);

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
              onClick={() => fetchMessages()}
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
              <p>{lang === 'en' ? 'Loading messages...' : 'Carregando mensagens...'}</p>
            </div>
          ) : error ? (
            <div className="admin-empty">
              <Mail size={48} className="admin-empty-icon" />
              <p>{error}</p>
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
                    <th><Phone size={14} /> {lang === 'en' ? 'Phone' : 'Telefone'}</th>
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
                      <td className="td-phone">{msg.phone}</td>
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
            {lang === 'en' ? 'Protected by Spring Boot 3.4 validation and admin token' : 'Protegido por validacao Spring Boot 3.4 e token administrativo'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
