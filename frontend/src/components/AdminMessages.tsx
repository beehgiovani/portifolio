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
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/portfolio/contact`);
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Table className="text-primary-gold" />
            <h2 className="gradient-heading" style={{ margin: 0, fontSize: '1.8rem' }}>
              {lang === 'en' ? 'Inbound Messages' : 'Mensagens Recebidas'}
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
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
              <Mail size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
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
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>
            {lang === 'en' ? 'Secured by Spring Boot 3.4 & Authority Middleware' : 'Protegido por Spring Boot 3.4 & Authority Middleware'}
          </p>
        </div>
      </div>

      <style>{`
        .admin-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .admin-container {
          width: 100%;
          max-width: 1100px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          padding: 0 !important;
          border: 1px solid var(--primary-gold-dim);
          overflow: hidden;
        }
        .admin-header {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid var(--border-glass);
        }
        .admin-content {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }
        .admin-table-wrapper {
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .admin-table th {
          text-align: left;
          padding: 1rem;
          color: var(--primary-gold);
          border-bottom: 1px solid var(--border-glass);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .admin-table td {
          padding: 1.2rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
        }
        .td-date { font-family: monospace; color: var(--secondary-cyan); }
        .td-name { font-weight: 700; }
        .td-message { max-width: 400px; opacity: 0.8; }
        .admin-btn-close {
          background: none;
          border: none;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
        }
        .admin-btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: #fff;
          padding: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
        }
        .admin-loading, .admin-empty {
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 215, 0, 0.1);
          border-top-color: var(--primary-gold);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .admin-footer {
          padding: 1rem 2rem;
          background: rgba(0, 0, 0, 0.2);
          text-align: center;
        }
      `}</style>
    </motion.div>
  );
}
