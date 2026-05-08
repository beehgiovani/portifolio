import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X, Printer, FileText,
  Edit3, Check
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

  useEffect(() => {
    const originalTitle = document.title;
    const date = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');

    const fileNames: Record<string, string> = {
      javascript: 'FullStack_React_Node',
      java: 'Software_Engineer_Java_Spring',
      kotlin: 'Software_Engineer_Kotlin_Mobile',
      python: 'Data_Engineer_AI_Python'
    };

    const roleName = fileNames[selectedResume] || selectedResume;
    document.title = `Curriculo_Bruno_Giovani_${roleName}_${date}`;

    return () => {
      document.title = originalTitle;
    };
  }, [selectedResume, lang]);

  const handlePrint = () => {
    window.print();
  };

  const handleEdit = (section: string, index: number | null, field: string, value: string) => {
    const newData = { ...editedData };
    if (index !== null) {
      newData[selectedResume][lang][section][index][field] = value;
    } else {
      newData[selectedResume][lang][section] = value;
    }
    setEditedData(newData);
  };

  const handleListEdit = (section: string, index: number, value: string) => {
    const newData = { ...editedData };
    newData[selectedResume][lang][section][index] = value;
    setEditedData(newData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="resume-manager-overlay"
    >
      <div className="resume-manager-container">
        {/* Sidebar / Controls */}
        <div className="resume-manager-sidebar">
          <div className="sidebar-header">
            <FileText className="sidebar-icon" />
            <h3>Resume Builder</h3>
          </div>

          <div className="sidebar-section">
            <label>Template</label>
            <div className="template-selector">
              {(Object.keys(resumeData) as Array<keyof typeof resumeData>).map((key) => {
                const descriptions = {
                  javascript: lang === 'en' ? 'Full Stack / Frontend (React/Node)' : 'Full Stack / Frontend (React/Node)',
                  java: lang === 'en' ? 'Corporate Backend (Spring Boot)' : 'Backend Corporativo (Spring Boot)',
                  kotlin: lang === 'en' ? 'Modern Backend / Mobile (Ktor/Compose)' : 'Backend Moderno / Mobile (Ktor/Compose)',
                  python: lang === 'en' ? 'Data / Automation / AI (Scrapers/Data)' : 'Dados / Automação / IA (Scrapers/Dados)'
                };

                return (
                  <button
                    key={key}
                    className={`template-btn ${selectedResume === key ? 'active' : ''}`}
                    onClick={() => setSelectedResume(key)}
                  >
                    <span className="btn-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="btn-description">{descriptions[key]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sidebar-section">
            <label>Language</label>
            <div className="lang-toggle">
              <button
                onClick={() => setLang('pt')}
                className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              >
                PT-BR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              >
                EN-US
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <label>Actions</label>
            <div className="action-buttons">
              <button onClick={() => setIsEditing(!isEditing)} className="action-btn edit">
                {isEditing ? <Check size={18} /> : <Edit3 size={18} />}
                {isEditing ? 'Finish' : 'Edit Mode'}
              </button>
              <button onClick={handlePrint} className="action-btn print">
                <Printer size={18} />
                Print PDF
              </button>
            </div>
          </div>

          <button onClick={onClose} className="sidebar-close-btn">
            <X size={20} />
            Close Manager
          </button>
        </div>

        {/* Preview Area */}
        <div className="resume-preview-area">
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
                  <a href="https://brunodevs.com" target="_blank" rel="noopener noreferrer">brunodevs.com</a>
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
                  <h3
                    contentEditable={isEditing}
                    onBlur={(e) => handleEdit('experience', i, 'role', e.currentTarget.innerText)}
                    suppressContentEditableWarning
                  >
                    {exp.role}
                  </h3>
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

            <div className="resume-footer-grid">
              <div className="grid-item">
                <div className="grid-label">{lang === 'en' ? 'Contract Salary (B2B):' : 'Pretensão Salarial PJ (B2B):'}</div>
                <div
                  className="grid-value"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('salaryB2B', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.salaryB2B)}
                </div>
                <div
                  className="grid-subvalue"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('salaryB2BSub', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.salaryB2BSub)}
                </div>

                <div className="grid-label">{lang === 'en' ? 'Full-Time Salary (CLT):' : 'Pretensão Salarial CLT:'}</div>
                <div
                  className="grid-value"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('salaryCLT', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.salaryCLT)}
                </div>
                <div
                  className="grid-subvalue"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('salaryCLTSub', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.salaryCLTSub)}
                </div>
              </div>

              <div className="grid-item">
                <div className="grid-label">{lang === 'en' ? 'Work Model:' : 'Modelo de Trabalho:'}</div>
                <div
                  className="grid-value"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('workModel', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.workModel)}
                </div>
                <div className="resume-spacer"></div>

                <div className="grid-label">{lang === 'en' ? 'Mobility:' : 'Mobilidade:'}</div>
                <div
                  className="grid-value"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('mobility', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.mobility)}
                </div>
              </div>

              <div className="grid-item">
                <div className="grid-label">{lang === 'en' ? 'Native Language:' : 'Idioma Nativo:'}</div>
                <div
                  className="grid-value"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('nativeLang', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.nativeLang)}
                </div>
                <div className="resume-spacer"></div>

                <div className="grid-label">{lang === 'en' ? 'Second Language:' : 'Segundo Idioma:'}</div>
                <div
                  className="grid-value"
                  contentEditable={isEditing}
                  onBlur={(e) => handleEdit('secondLang', null, '', e.currentTarget.innerText)}
                  suppressContentEditableWarning
                >
                  {renderMultiLine(currentData.secondLang)}
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </motion.div >
  );
}
