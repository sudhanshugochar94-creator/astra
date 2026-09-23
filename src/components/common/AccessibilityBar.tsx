import React from 'react';
import { Type, Eye, Volume2, Globe, Sparkles, Moon, Sun } from 'lucide-react';
import { AccessibilitySettings, Language } from '../../types';
import { REGIONAL_LANGUAGES } from '../../data/culturalContent';
import { getTranslation } from '../../utils/translations';
import { soundSynth } from '../../utils/audioSynth';

interface AccessibilityBarProps {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  settings,
  onUpdateSettings,
  currentLanguage,
  onSelectLanguage
}) => {
  const t = getTranslation(currentLanguage);

  const cycleFontSize = () => {
    soundSynth.playSoftClick();
    if (settings.fontSize === 'normal') {
      onUpdateSettings({ fontSize: 'large' });
    } else if (settings.fontSize === 'large') {
      onUpdateSettings({ fontSize: 'extra-large' });
    } else {
      onUpdateSettings({ fontSize: 'normal' });
    }
  };

  const toggleHighContrast = () => {
    soundSynth.playSoftClick();
    onUpdateSettings({ highContrast: !settings.highContrast });
  };

  const toggleDarkMode = () => {
    soundSynth.playSoftClick();
    onUpdateSettings({ darkMode: !settings.darkMode });
  };

  const toggleVoiceSpeed = () => {
    soundSynth.playSoftClick();
    onUpdateSettings({ voiceSpeed: settings.voiceSpeed === 'normal' ? 'slow' : 'normal' });
  };

  return (
    <div
      id="accessibility-toolbar"
      className="bg-[#12263A] text-[#E4E4E4] border-b border-[#697A21]/40 px-4 py-2 text-xs sm:text-sm font-bold flex flex-wrap items-center justify-between gap-3 shadow-sm transition-colors"
      role="region"
      aria-label="Accessibility & Language Quick Controls"
    >
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[#C5D8D1] text-xs font-black uppercase tracking-wider pr-1.5 border-r border-[#697A21]/40">
          <Sparkles className="w-3.5 h-3.5 text-[#697A21]" />
          Elderly Friendly
        </span>

        {/* Text Size Toggle */}
        <button
          id="btn-toggle-font-size"
          onClick={cycleFontSize}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1D3A56] hover:bg-[#2A4B6E] transition-all border border-[#697A21]/50 cursor-pointer focus-accessible whitespace-nowrap shadow-2xs hover:scale-[1.02]"
          title="Adjust Text Size for Readability"
        >
          <Type className="w-3.5 h-3.5 text-[#C5D8D1]" />
          <span>
            {t.textSize}:{' '}
            <strong className="text-[#C5D8D1] capitalize font-black">
              {settings.fontSize === 'extra-large' ? 'XL (26px)' : settings.fontSize === 'large' ? 'Large (22px)' : 'Standard (18px)'}
            </strong>
          </span>
        </button>

        {/* Night Mode / Dark Theme */}
        <button
          id="btn-toggle-dark-mode"
          onClick={toggleDarkMode}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all border cursor-pointer focus-accessible whitespace-nowrap shadow-2xs hover:scale-[1.02] ${
            settings.darkMode
              ? 'bg-[#697A21] text-white font-black border-white'
              : 'bg-[#1D3A56] hover:bg-[#2A4B6E] border-[#697A21]/50'
          }`}
          title="Toggle Night Mode Dark Theme"
        >
          {settings.darkMode ? <Moon className="w-3.5 h-3.5 text-white" /> : <Sun className="w-3.5 h-3.5 text-[#C5D8D1]" />}
          <span>{settings.darkMode ? t.darkMode : t.lightMode}</span>
        </button>

        {/* High Contrast Mode */}
        <button
          id="btn-toggle-contrast"
          onClick={toggleHighContrast}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all border cursor-pointer focus-accessible whitespace-nowrap shadow-2xs hover:scale-[1.02] ${
            settings.highContrast
              ? 'bg-[#697A21] text-white font-black border-white'
              : 'bg-[#1D3A56] hover:bg-[#2A4B6E] border-[#697A21]/50'
          }`}
          title="Toggle High Contrast Theme"
        >
          <Eye className="w-3.5 h-3.5 text-[#C5D8D1]" />
          <span>{t.highContrast}</span>
        </button>

        {/* Voice Pace Speed */}
        <button
          id="btn-toggle-voice-speed"
          onClick={toggleVoiceSpeed}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1D3A56] hover:bg-[#2A4B6E] transition-all border border-[#697A21]/50 cursor-pointer focus-accessible whitespace-nowrap shadow-2xs hover:scale-[1.02]"
          title="Toggle Voice Pace"
        >
          <Volume2 className="w-3.5 h-3.5 text-[#C5D8D1]" />
          <span>
            Voice Pace:{' '}
            <strong className="text-[#C5D8D1] font-black">
              {settings.voiceSpeed === 'slow' ? 'Gentle / Slow' : 'Normal Pace'}
            </strong>
          </span>
        </button>
      </div>

      {/* Language Quick Dropdown */}
      <div className="flex items-center gap-1.5">
        <Globe className="w-4 h-4 text-[#697A21]" />
        <label htmlFor="select-app-language" className="sr-only">
          Select Regional Language
        </label>
        <select
          id="select-app-language"
          value={currentLanguage}
          onChange={(e) => {
            soundSynth.playSoftClick();
            onSelectLanguage(e.target.value as Language);
          }}
          className="bg-[#1D3A56] text-[#E4E4E4] border border-[#697A21] rounded-xl px-3 py-1.5 text-xs sm:text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#697A21] cursor-pointer shadow-xs"
        >
          {REGIONAL_LANGUAGES.map((lang) => (
            <option key={lang.id} value={lang.id} className="bg-[#12263A] text-[#E4E4E4]">
              {lang.nativeScript} ({lang.name})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
