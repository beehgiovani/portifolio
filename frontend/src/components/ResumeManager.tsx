import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X, Printer, FileText,
  Edit3, Check, ExternalLink
} from 'lucide-react';
import { resumeData, type ResumeTemplate } from '../data/resumes';
import './ResumeManager.css';

interface ResumeManagerProps {
  onClose: () => void;
}

const renderMultiLine = (text: string) => {
  if (!text) return null;
  return text.split('|').map((part, index) => (
    <div key={index} className="multi-line-item">
      {part.trim()}
    </div>
  ));
};

export function ResumeManager({ onClose }: ResumeManagerProps) {
  const [selectedResume, setSelectedResume] = useState<keyof typeof resumeData>('javascript');
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(JSON.parse(JSON.stringify(resumeData)));

  const currentData = editedData[selectedResume][lang];
  const templateDescriptions: Record<keyof typeof resumeData, string> = {
    javascript: lang === 'en' ? 'Full Stack / Frontend' : 'Full Stack / Frontend',
    java: lang === 'en' ? 'Corporate Backend' : 'Backend Corporativo',
    kotlin: lang === 'en' ? 'Mobile & Modern Backend' : 'Mobile & Backend Moderno',
    python: lang === 'en' ? 'Data / Automation / AI' : 'Dados / Automação / IA'
  };
  const templateNames: Record<keyof typeof resumeData, string> = {
    javascript: 'Full Stack',
    java: 'Java',
    kotlin: 'Kotlin',
    python: 'Python'
  };

  useEffect(() => {
    const originalTitle = document.title;
    const originalBodyOverflow = document.body.style.overflow;

    const fileNames: Record<string, string> = {
      javascript: 'Full Stack Developer',
      java: 'Java Software Engineer',
      kotlin: 'Mobile Developer',
      python: 'Data Engineer'
    };

    const roleName = fileNames[selectedResume] || selectedResume;
    document.title = `Curriculo - Bruno Giovani - ${roleName}`;
    document.body.dataset.selectedResume = String(selectedResume);

    document.body.style.overflow = 'hidden';

    const beforePrint = () => {
      document.body.classList.add('resume-print-mode');
      document.body.dataset.printingResume = String(selectedResume);
      document.title = `Bruno Giovani - ${roleName}`;
    };

    const afterPrint = () => {
      document.body.classList.remove('resume-print-mode');
      delete document.body.dataset.printingResume;
      document.title = `Curriculo - Bruno Giovani - ${roleName}`;
    };

    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);

    return () => {
      document.title = originalTitle;
      document.body.style.overflow = originalBodyOverflow;
      delete document.body.dataset.selectedResume;
      document.body.classList.remove('resume-print-mode');
      delete document.body.dataset.printingResume;
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };
  }, [selectedResume, lang]);

  const handlePrint = () => {
    document.body.classList.add('resume-print-mode');
    document.body.dataset.printingResume = String(selectedResume);
    window.print();
  };

  const handleEdit = (section: string, index: number | null, field: string, value: string) => {
    setEditedData((prev: typeof resumeData) => {
      const newData = JSON.parse(JSON.stringify(prev)) as typeof resumeData;
      const targetResume = newData[selectedResume][lang];
      const sKey = section as keyof ResumeTemplate;

      if (index !== null) {
        const list = targetResume[sKey];
        if (Array.isArray(list)) {
          const item = list[index];
          Object.assign(item, { [field]: value });
        }
      } else {
        Object.assign(targetResume, { [section]: value });
      }
      return newData;
    });
  };

  const handleListEdit = (section: string, index: number, value: string) => {
    setEditedData((prev: typeof resumeData) => {
      const newData = JSON.parse(JSON.stringify(prev)) as typeof resumeData;
      const targetResume = newData[selectedResume][lang];
      const sKey = section as keyof ResumeTemplate;
      const list = targetResume[sKey];
      if (Array.isArray(list)) {
        list[index] = value;
      }
      return newData;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="resume-manager-overlay"
    >
      <div className="resume-manager-container">
        <div className="resume-manager-sidebar">
          <div className="sidebar-header">
            <div className="sidebar-icon-wrap">
              <FileText className="sidebar-icon" />
            </div>
            <div>
              <span className="sidebar-kicker">{lang === 'en' ? 'Career Kit' : 'Kit profissional'}</span>
              <h3>{lang === 'en' ? 'Resume Manager' : 'Gerenciador de currículos'}</h3>
            </div>
          </div>

          <div className="sidebar-section">
            <label>{lang === 'en' ? 'Selected resume' : 'Currículo selecionado'}</label>
            <div className="selected-resume-summary">
              <strong>{templateNames[selectedResume]}</strong>
              <span>{templateDescriptions[selectedResume]}</span>
            </div>
          </div>

          <div className="sidebar-section">
            <label>{lang === 'en' ? 'Templates' : 'Templates'}</label>
            <div className="template-selector">
              {(Object.keys(resumeData) as (keyof typeof resumeData)[]).map((key) => {
                return (
                  <button
                    key={key}
                    className={`template-btn ${selectedResume === key ? 'active' : ''}`}
                    onClick={() => setSelectedResume(key)}
                    type="button"
                  >
                    <span>{templateNames[key]}</span>
                    <small>{templateDescriptions[key]}</small>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sidebar-section">
            <label>{lang === 'en' ? 'Language' : 'Idioma'}</label>
            <div className="lang-toggle-group">
              <button
                onClick={() => setLang('pt')}
                className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
                type="button"
              >
                PT-BR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                type="button"
              >
                EN-US
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <label>{lang === 'en' ? 'Actions' : 'Ações'}</label>
            <div className="action-buttons">
              <button onClick={() => setIsEditing(!isEditing)} className="action-btn edit-btn" type="button">
                {isEditing ? <Check size={18} /> : <Edit3 size={18} />}
                {isEditing ? (lang === 'en' ? 'Save Changes' : 'Salvar Alterações') : (lang === 'en' ? 'Edit Mode' : 'Modo Edição')}
              </button>
              <button onClick={handlePrint} className="action-btn print-btn" type="button">
                <Printer size={18} />
                {lang === 'en' ? 'Print PDF' : 'Gerar PDF'}
              </button>
            </div>
          </div>

          <div className="print-safety-note">
            {lang === 'en'
              ? 'Print is isolated to the selected resume only.'
              : 'A impressão fica isolada apenas no currículo selecionado.'}
          </div>

          <button onClick={onClose} className="close-manager-btn" type="button">
            <X size={20} />
            {lang === 'en' ? 'Close Manager' : 'Fechar Gerenciador'}
          </button>
        </div>

        <div className="resume-viewer">
          <div className="resume-preview-toolbar no-print" aria-hidden="true">
            <div>
              <span>{lang === 'en' ? 'Preview' : 'Pré-visualização'}</span>
              <strong>{templateNames[selectedResume]} · {lang.toUpperCase()}</strong>
            </div>
            <span className="isolation-badge">{lang === 'en' ? 'Print isolated' : 'Impressão isolada'}</span>
          </div>

          <table
            className="print-layout-table"
            data-print-root="selected-resume"
            data-resume-key={selectedResume}
            data-resume-lang={lang}
          >
            <thead><tr><td><div className="print-spacer"></div></td></tr></thead>
            <tbody>
              <tr>
                <td>
                  <div className="resume-paper" id="printable-resume">
                    <header className="resume-header">
                      <h1
                        contentEditable={isEditing}
                        onBlur={(e) => handleEdit('name', null, '', e.currentTarget.innerText)}
                        suppressContentEditableWarning
                      >
                        {currentData.name}
                      </h1>
                      <div
                        className="resume-subtitle"
                        contentEditable={isEditing}
                        onBlur={(e) => handleEdit('subtitle', null, '', e.currentTarget.innerText)}
                        suppressContentEditableWarning
                      >
                        {currentData.subtitle}
                      </div>
                      <div className="resume-contact">
                        <div
                          contentEditable={isEditing}
                          onBlur={(e) => handleEdit('contactInfo', null, '', e.currentTarget.innerText)}
                          suppressContentEditableWarning
                        >
                          {renderMultiLine(currentData.contactInfo)}
                        </div>
                        <div className="resume-links">
                          <a href={currentData.linkedin} target="_blank" rel="noopener noreferrer">{currentData.linkedin.replace('https://', '')}</a>
                          <a href={currentData.github} target="_blank" rel="noopener noreferrer">{currentData.github.replace('https://', '')}</a>
                          <a href="https://brunodevs.com" target="_blank" rel="noopener noreferrer">https://brunodevs.com</a>
                        </div>
                      </div>
                    </header>

                    <section className="resume-section">
                      <h2>{lang === 'en' ? 'Professional Summary' : 'Resumo Profissional'}</h2>
                      <p
                        contentEditable={isEditing}
                        onBlur={(e) => handleEdit('summary', null, '', e.currentTarget.innerText)}
                        suppressContentEditableWarning
                      >
                        {currentData.summary}
                      </p>
                    </section>

                    <section className="resume-section">
                      <h2>{lang === 'en' ? 'Technical Expertise' : 'Expertise Técnica'}</h2>
                      <ul>
                        {currentData.skills.map((skill: string, i: number) => (
                          <li
                            key={i}
                            contentEditable={isEditing}
                            onBlur={(e) => handleListEdit('skills', i, e.currentTarget.innerText)}
                            suppressContentEditableWarning
                            dangerouslySetInnerHTML={{ __html: skill }}
                          />
                        ))}
                      </ul>
                    </section>

                    <section className="resume-section">
                      <h2>{lang === 'en' ? 'Professional Experience' : 'Experiência Profissional'}</h2>
                      {currentData.experience.map((exp: ResumeTemplate['experience'][0], i: number) => (
                        <div key={i} className="experience-item">
                          <div className="role-header" style={{ display: 'flex', alignItems: 'center', gap: '8pt' }}>
                            <h3
                              contentEditable={isEditing}
                              onBlur={(e) => handleEdit('experience', i, 'role', e.currentTarget.innerText)}
                              suppressContentEditableWarning
                            >
                              {exp.role}
                            </h3>
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="role-github-link"
                                aria-label={`${lang === 'en' ? 'Open project link' : 'Abrir link do projeto'}: ${exp.role}`}
                              >
                                <ExternalLink size={14} color="#1e40af" />
                              </a>
                            )}
                          </div>
                          <em
                            className="date-location"
                            contentEditable={isEditing}
                            onBlur={(e) => handleEdit('experience', i, 'date', e.currentTarget.innerText)}
                            suppressContentEditableWarning
                          >
                            {exp.date}
                          </em>
                          <ul>
                            {exp.bullets.map((bullet: string, bi: number) => (
                              <li
                                key={bi}
                                contentEditable={isEditing}
                                onBlur={(e) => {
                                  const newData = { ...editedData };
                                  newData[selectedResume][lang].experience[i].bullets[bi] = e.currentTarget.innerText;
                                  setEditedData(newData);
                                }}
                                suppressContentEditableWarning
                                dangerouslySetInnerHTML={{ __html: bullet }}
                              />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>

                    <section className="resume-section">
                      <h2>{lang === 'en' ? 'Education & Certifications' : 'Formação & Certificações'}</h2>
                      <ul>
                        {currentData.education.map((edu: string, i: number) => (
                          <li
                            key={i}
                            contentEditable={isEditing}
                            onBlur={(e) => handleListEdit('education', i, e.currentTarget.innerText)}
                            suppressContentEditableWarning
                            dangerouslySetInnerHTML={{ __html: edu }}
                          />
                        ))}
                      </ul>
                    </section>

                    <div className="resume-footer-section">
                      <h2 className="footer-title">{lang === 'en' ? 'Compensation & Availability' : 'Pretensões & Disponibilidade'}</h2>

                      <div className="footer-main-grid">
                        {/* Bloco de Salários Expandido */}
                        <div className="grid-item salary-box full-width">
                          <div className="salary-columns">
                            <div className="salary-col">
                              <div className="grid-label">{lang === 'en' ? 'Contract (B2B/PJ):' : 'Pretensão B2B (PJ):'}</div>
                              <div
                                className="grid-value highlight"
                                contentEditable={isEditing}
                                onBlur={(e) => handleEdit('salaryB2B', null, '', e.currentTarget.innerText)}
                                suppressContentEditableWarning
                              >
                                {isEditing ? currentData.salaryB2B : renderMultiLine(currentData.salaryB2B)}
                              </div>
                              <div
                                className="grid-subvalue"
                                contentEditable={isEditing}
                                onBlur={(e) => handleEdit('salaryB2BSub', null, '', e.currentTarget.innerText)}
                                suppressContentEditableWarning
                              >
                                {isEditing ? currentData.salaryB2BSub : renderMultiLine(currentData.salaryB2BSub)}
                              </div>
                            </div>
                            <div className="salary-divider"></div>
                            <div className="salary-col">
                              <div className="grid-label">{lang === 'en' ? 'Full-Time (CLT):' : 'Pretensão CLT:'}</div>
                              <div
                                className="grid-value highlight"
                                contentEditable={isEditing}
                                onBlur={(e) => handleEdit('salaryCLT', null, '', e.currentTarget.innerText)}
                                suppressContentEditableWarning
                              >
                                {isEditing ? currentData.salaryCLT : renderMultiLine(currentData.salaryCLT)}
                              </div>
                              <div
                                className="grid-subvalue"
                                contentEditable={isEditing}
                                onBlur={(e) => handleEdit('salaryCLTSub', null, '', e.currentTarget.innerText)}
                                suppressContentEditableWarning
                              >
                                {isEditing ? currentData.salaryCLTSub : renderMultiLine(currentData.salaryCLTSub)}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bloco de Modelo & Mobilidade */}
                        <div className="grid-item">
                          <div className="grid-label">{lang === 'en' ? 'Model & Mobility:' : 'Modelo & Mobilidade:'}</div>
                          <div
                            className="grid-value"
                            contentEditable={isEditing}
                            onBlur={(e) => handleEdit('workModel', null, '', e.currentTarget.innerText)}
                            suppressContentEditableWarning
                          >
                            {isEditing ? currentData.workModel : renderMultiLine(currentData.workModel)}
                          </div>
                          <div
                            className="grid-value secondary"
                            contentEditable={isEditing}
                            onBlur={(e) => handleEdit('mobility', null, '', e.currentTarget.innerText)}
                            suppressContentEditableWarning
                          >
                            {isEditing ? currentData.mobility : renderMultiLine(currentData.mobility)}
                          </div>
                        </div>

                        {/* Bloco de Idiomas */}
                        <div className="grid-item">
                          <div className="grid-label">{lang === 'en' ? 'Languages:' : 'Idiomas:'}</div>
                          <div className="grid-value">
                            <strong>{lang === 'en' ? 'Native:' : 'Nativo:'}</strong> {currentData.nativeLang}
                          </div>
                          <div className="grid-value secondary">
                            <strong>{lang === 'en' ? 'Technical:' : 'Técnico:'}</strong> {currentData.secondLang}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot><tr><td><div className="print-spacer"></div></td></tr></tfoot>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
