import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, FileText, Users, Calendar, Code, BookOpen, Mail } from 'lucide-react';

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const commands = [
    { id: 'home', label: 'Go to Home', icon: Terminal, path: '/' },
    { id: 'about', label: 'About FOSSEE', icon: FileText, path: '/about' },
    { id: 'events', label: 'View Events', icon: Calendar, path: '/events' },
    { id: 'projects', label: 'Browse Projects', icon: Code, path: '/projects' },
    { id: 'resources', label: 'Learning Resources', icon: BookOpen, path: '/resources' },
    { id: 'team', label: 'Meet the Team', icon: Users, path: '/team' },
    { id: 'contact', label: 'Contact Us', icon: Mail, path: '/contact' },
  ];

  const filteredCommands = commands.filter(command =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            executeCommand(filteredCommands[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  const executeCommand = (command) => {
    navigate(command.path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="command-palette"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center mb-4">
            <Search className="w-5 h-5 text-green mr-2" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-green font-mono text-base outline-none"
            />
          </div>

          <div className="space-y-1 max-h-64 overflow-y-auto">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((command, index) => (
                <motion.button
                  key={command.id}
                  className={`w-full text-left p-2 rounded flex items-center space-x-3 transition-colors ${
                    index === selectedIndex 
                      ? 'bg-green bg-opacity-20 text-green' 
                      : 'text-white hover:bg-gray hover:bg-opacity-20'
                  }`}
                  onClick={() => executeCommand(command)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <command.icon className="w-4 h-4" />
                  <span>{command.label}</span>
                </motion.button>
              ))
            ) : (
              <div className="text-gray text-center py-4">
                No commands found for "{query}"
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-light-gray text-xs text-gray">
            <div className="flex justify-between">
              <span>↑↓ Navigate • Enter Execute • Esc Close</span>
              <span>Ctrl+K to open</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommandPalette; 