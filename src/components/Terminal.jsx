import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import 'xterm/css/xterm.css';

// File system structure
const FILE_SYSTEM = {
  home: {
    type: 'directory',
    contents: {
      'projects': { type: 'directory', contents: {} },
      'events': { type: 'directory', contents: {} },
      'README.md': { type: 'file', content: 'Welcome to FOSS CUSAT Terminal!\n\nThis is your home directory. Use "ls" to list contents and "cd <directory>" to navigate.\n\nAvailable directories:\n- projects: Current and past projects\n- events: Upcoming and past events' },
      '.bashrc': { type: 'file', content: '# FOSS CUSAT Terminal Configuration\nexport PATH="/usr/local/bin:/usr/bin:/bin"\nexport PS1="\\[\\033[1;32m\\]foss@cusat:\\[\\033[0m\\]\\w$ "' },
      '.profile': { type: 'file', content: 'Welcome to FOSS CUSAT Terminal!' }
    }
  },
  projects: {
    type: 'directory',
    contents: {
      'website': { type: 'directory', contents: {} },
      'linux-fest': { type: 'directory', contents: {} },
      'workshops': { type: 'directory', contents: {} },
      'contributions': { type: 'directory', contents: {} },
      'hackathon': { type: 'directory', contents: {} },
      'open-source-day': { type: 'directory', contents: {} },
      'README.md': { type: 'file', content: '# FOSS CUSAT Projects\n\nThis directory contains all our active and completed projects.\n\n## Active Projects\n- website/: Club website development\n- linux-fest/: Linux installation festival\n- workshops/: Educational workshops\n- contributions/: Community contributions\n- hackathon/: Annual hackathon project\n- open-source-day/: Open source day event\n\n## Getting Started\nTo contribute to any project, navigate to the respective directory and check the README files.' }
    }
  },
  events: {
    type: 'directory',
    contents: {
      'upcoming': { type: 'directory', contents: {} },
      'past': { type: 'directory', contents: {} },
      'calendar.md': { type: 'file', content: '# FOSS CUSAT Events Calendar\n\n## Upcoming Events\n- Linux Bootcamp (Next Week)\n- Open Source Hackathon (Month End)\n- FOSS Workshop Series (Ongoing)\n\n## Past Events\n- Linux Install Fest 2023\n- Open Source Day 2023\n- Git Workshop Series\n\n## Event Registration\nVisit https://fosscusat.in/events to register for upcoming events.' }
    }
  }
};

const SECTIONS = ['home', 'projects', 'events'];

const PROMPT_BASE = 'foss@cusat';
const TERMINAL_WIDTH = 1000;
const TERMINAL_HEIGHT = 500;

const Terminal = () => {
  const xtermRef = useRef(null);
  const termRef = useRef(null);
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Position on the left side, further below the heading
  const getInitialPosition = () => {
    const x = 20; // Fixed left position
    const y = window.scrollY + 350;
    return { x, y, dragging: false, offsetX: 0, offsetY: 0 };
  };

  const [drag, setDrag] = useState(getInitialPosition());
  const [cwd, setCwd] = useState('home');

  useEffect(() => {
    // Recenter on window resize (optional, only if not dragging)
    const handleResize = () => {
      if (!drag.dragging) setDrag(getInitialPosition());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!xtermRef.current && isOpen) {
      const term = new XTerm({
        theme: {
          background: '#000000',
          foreground: '#ffffff',
          cursor: '#ffffff',
        },
        fontFamily: 'Fira Mono, JetBrains Mono, monospace',
        fontSize: 16,
        cursorBlink: true,
        rows: 20,
      });
      xtermRef.current = term;
      term.open(termRef.current);
      term.writeln('Welcome to the FOSS CUSAT Terminal!');
      term.writeln("Type 'help' to see available commands.\n");
      printPrompt(term, 'home');

      let input = '';
      let currentDir = 'home';
      term.onKey(({ key, domEvent }) => {
        if (domEvent.key === 'Enter') {
          term.write('\r\n');
          handleCommand(input, term, currentDir, (newDir) => {
            currentDir = newDir;
            setCwd(newDir);
          });
          input = '';
          setTimeout(() => printPrompt(term, currentDir), 10);
        } else if (domEvent.key === 'Backspace') {
          if (input.length > 0) {
            input = input.slice(0, -1);
            term.write('\b \b');
          }
        } else if (domEvent.key === 'Tab') {
          // Handle tab completion
          domEvent.preventDefault();
          const completed = handleTabCompletion(input, currentDir);
          if (completed !== input) {
            // Clear current input and replace with completed version
            for (let i = 0; i < input.length; i++) {
              term.write('\b \b');
            }
            input = completed;
            term.write(input);
          }
        } else if (domEvent.key.length === 1) {
          input += key;
          term.write(key);
        }
      });
    }
    // Cleanup
    return () => {
      if (xtermRef.current && !isOpen) {
        xtermRef.current.dispose();
        xtermRef.current = null;
      }
    };
  }, [isOpen]);

  // Drag logic
  useEffect(() => {
    function onMouseMove(e) {
      if (drag.dragging) {
        setDrag((prev) => ({
          ...prev,
          x: e.clientX - prev.offsetX,
          y: e.clientY - prev.offsetY,
        }));
      }
    }
    function onMouseUp() {
      setDrag((prev) => ({ ...prev, dragging: false }));
    }
    if (drag.dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [drag.dragging]);

  function startDrag(e) {
    const rect = containerRef.current.getBoundingClientRect();
    setDrag({
      ...drag,
      dragging: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    });
  }

  function printPrompt(term, dir) {
    term.write(`\x1b[1;32m${PROMPT_BASE}:${dir === 'home' ? '~' : '/' + dir}$ \x1b[0m`);
  }

  function handleCommand(cmd, term, currentDir, setDir) {
    const command = cmd.trim();
    if (!command) return;
    
    const args = command.split(' ');
    const cmdName = args[0].toLowerCase();
    
    switch (cmdName) {
      case 'clear':
        term.clear();
        return;
        
      case 'ls':
        handleLs(term, currentDir, args);
        return;
        
      case 'cd':
        handleCd(term, currentDir, setDir, args);
        return;
        
      case 'cat':
        handleCat(term, currentDir, args);
        return;
        
      case 'pwd':
        term.writeln(currentDir === 'home' ? '/home' : `/${currentDir}`);
        return;
        
      case 'help':
        showHelp(term);
        return;
        
      case 'whoami':
        term.writeln('foss');
        return;
        
      case 'date':
        term.writeln(new Date().toString());
        return;
        
      case 'echo':
        term.writeln(args.slice(1).join(' '));
        return;
        
      default:
        term.writeln(`Command not found: ${cmdName}. Type 'help' for available commands.`);
        return;
    }
  }

  function handleLs(term, currentDir, args) {
    const dir = FILE_SYSTEM[currentDir];
    if (!dir || dir.type !== 'directory') {
      term.writeln(`ls: cannot access '${currentDir}': No such file or directory`);
      return;
    }
    
    const contents = Object.keys(dir.contents);
    if (contents.length === 0) {
      term.writeln('(empty directory)');
      return;
    }
    
    // Format output like real ls
    const items = contents.map(item => {
      const itemData = dir.contents[item];
      const suffix = itemData.type === 'directory' ? '/' : '';
      return item + suffix;
    });
    
    term.writeln(items.join('  '));
  }

  function handleCd(term, currentDir, setDir, args) {
    if (args.length < 2) {
      // cd without arguments goes to home
      setDir('home');
      scrollToSection('home');
      return;
    }
    
    const target = args[1];
    
    if (target === '..' || target === '../') {
      // Go back to home
      setDir('home');
      scrollToSection('home');
      return;
    }
    
    if (target === '.' || target === './') {
      // Stay in current directory
      return;
    }
    
    // Check if target directory exists
    if (FILE_SYSTEM[target] && FILE_SYSTEM[target].type === 'directory') {
      setDir(target);
      scrollToSection(target);
    } else {
      term.writeln(`cd: ${target}: No such file or directory`);
    }
  }

  function handleCat(term, currentDir, args) {
    if (args.length < 2) {
      term.writeln('cat: missing file operand');
      return;
    }
    
    const filename = args[1];
    const dir = FILE_SYSTEM[currentDir];
    
    if (!dir || dir.type !== 'directory') {
      term.writeln(`cat: cannot access '${currentDir}': No such file or directory`);
      return;
    }
    
    const file = dir.contents[filename];
    if (!file || file.type !== 'file') {
      term.writeln(`cat: ${filename}: No such file or directory`);
      return;
    }
    
    term.writeln(file.content);
  }

  function handleTabCompletion(input, currentDir) {
    const words = input.split(' ');
    const lastWord = words[words.length - 1];
    
    if (words.length === 1) {
      // Completing command name
      const commands = ['ls', 'cd', 'cat', 'pwd', 'help', 'whoami', 'date', 'echo', 'clear'];
      const matches = commands.filter(cmd => cmd.startsWith(lastWord));
      
      if (matches.length === 1) {
        // Single match - complete it
        words[words.length - 1] = matches[0];
        return words.join(' ');
      } else if (matches.length > 1) {
        // Multiple matches - show options
        console.log('Multiple matches:', matches);
        return input; // Don't complete, just return current input
      }
    } else if (words.length >= 2) {
      // Completing file/directory name
      const dir = FILE_SYSTEM[currentDir];
      if (dir && dir.type === 'directory') {
        const contents = Object.keys(dir.contents);
        const matches = contents.filter(item => item.startsWith(lastWord));
        
        if (matches.length === 1) {
          // Single match - complete it
          words[words.length - 1] = matches[0];
          return words.join(' ');
        } else if (matches.length > 1) {
          // Multiple matches - show options
          console.log('Multiple matches:', matches);
          return input; // Don't complete, just return current input
        }
      }
    }
    
    return input; // No completion possible
  }

  function showHelp(term) {
    term.writeln('Available commands:');
    term.writeln('  ls                    - List directory contents');
    term.writeln('  cd <directory>        - Change directory');
    term.writeln('  cat <file>            - Display file contents');
    term.writeln('  pwd                   - Print working directory');
    term.writeln('  whoami                - Print effective user ID');
    term.writeln('  date                  - Display current date/time');
    term.writeln('  echo <text>           - Display a line of text');
    term.writeln('  clear                 - Clear the terminal screen');
    term.writeln('  help                  - Show this help message');
    term.writeln('');
    term.writeln('Navigation:');
    term.writeln('  cd ..                 - Go back to home directory');
    term.writeln('  cd <section>          - Navigate to section (about, projects, etc.)');
    term.writeln('');
    term.writeln('Features:');
    term.writeln('  Tab                   - Auto-complete commands and filenames');
  }

  function scrollToSection(section) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const toggleTerminal = () => {
    setIsOpen(!isOpen);
  };

  const closeTerminal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Terminal App Icon */}
      <div
        onClick={toggleTerminal}
        style={{
          position: 'fixed',
          top: '32px',
          right: '32px',
          width: '160px',
          height: '70px',
          background: 'linear-gradient(135deg, #181f2a 60%, #00bcd4 100%)',
          border: '3px solid #00bcd4',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'left',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(0, 188, 212, 0.18), 0 2px 8px rgba(0,0,0,0.25)',
          zIndex: 10000,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #232b3b 60%, #00eaff 100%)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 234, 255, 0.25), 0 4px 16px rgba(0,0,0,0.32)';
          e.currentTarget.style.border = '3px solid #00eaff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #181f2a 60%, #00bcd4 100%)';
          e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 188, 212, 0.18), 0 2px 8px rgba(0,0,0,0.25)';
          e.currentTarget.style.border = '3px solid #00bcd4';
        }}
      >
        <span style={{
          fontWeight: 'bold',
          fontSize: '1.35rem',
          color: '#fff',
          letterSpacing: '1px',
          fontFamily: 'JetBrains Mono, Fira Mono, monospace',
          textShadow: '0 2px 8px #000a, 0 1px 8px #00eaff44',
        }}>
          Terminal
        </span>
        <span style={{
          fontFamily: 'JetBrains Mono, Fira Mono, monospace',
          fontSize: '1.1rem',
          color: '#00eaff',
          marginTop: '2px',
          letterSpacing: '2px',
          textShadow: '0 1px 8px #00eaff44',
        }}>
          &gt;_
        </span>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        /* Force terminal content to align left */
        .xterm {
          text-align: left !important;
        }
        
        .xterm-viewport {
          text-align: left !important;
        }
        
        .xterm-screen {
          text-align: left !important;
        }
        
        .xterm-rows {
          text-align: left !important;
        }
        
        .xterm-row {
          text-align: left !important;
        }
        
        .xterm-cursor {
          text-align: left !important;
        }
      `}</style>

      {/* Terminal Window */}
      {isOpen && (
        <div
          ref={containerRef}
          style={{
            width: '100%',
            maxWidth: TERMINAL_WIDTH,
            position: 'fixed',
            top: drag.y,
            left: drag.x,
            zIndex: 9999,
            background: '#000000',
            borderRadius: 8,
            boxShadow: '0 2px 16px rgba(0,0,0,0.4)',
            userSelect: drag.dragging ? 'none' : 'auto',
            cursor: drag.dragging ? 'move' : 'default',
          }}
          onMouseDown={startDrag}
        >
          <div
            className="terminal-drag-bar"
            style={{
              cursor: 'move',
              background: '#111111',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              fontWeight: 'bold',
              letterSpacing: 1,
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onMouseDown={startDrag}
          >
            <div>
              FOSS CUSAT Terminal
            </div>
            <button
              onClick={closeTerminal}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '0 8px',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              ×
            </button>
          </div>
          <div ref={termRef} style={{ 
            height: TERMINAL_HEIGHT, 
            width: '100%',
            paddingLeft: '10px',
            textAlign: 'left'
          }} />
        </div>
      )}
    </>
  );
};

export default Terminal; 
