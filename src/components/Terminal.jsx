import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import 'xterm/css/xterm.css';

// File system structure with real data
const FILE_SYSTEM = {
  home: {
    type: 'directory',
    contents: {
      'projects': { type: 'directory', contents: {} },
      'events': { type: 'directory', contents: {} },
      'README.md': { type: 'file', content: 'Welcome to FOSS CUSAT Terminal!\n\nThis is your home directory. Use "ls" to list contents and "cd <directory>" to navigate.\n\nAvailable directories:\n- projects: Featured projects and contributions\n- events: Upcoming and past events\n\nUse "cat README.md" in any directory to view detailed information.' },
      '.bashrc': { type: 'file', content: '# FOSS CUSAT Terminal Configuration\nexport PATH="/usr/local/bin:/usr/bin:/bin"\nexport PS1="\\[\\033[1;32m\\]foss@cusat:\\[\\033[0m\\]\\w$ "' },
      '.profile': { type: 'file', content: 'Welcome to FOSS CUSAT Terminal!' }
    }
  },
  projects: {
    type: 'directory',
    contents: {
      'vega-r1': { 
        type: 'directory', 
        contents: {
          'README.md': { type: 'file', content: '# VEGA-R1 Hardware Project\n\nAdvanced hardware project featuring Dashboard, SeedNRF52840Sense, and ThrustVectorControl components.\n\n## Tech Stack\n- C++\n- Python\n- Embedded Systems\n\n## GitHub\nhttps://github.com/foss-cusat/VEGA-R1\n\n## Date\nMarch 25, 2025\n\n## Status\nActive Development' }
        }
      },
      'fossee-website': { 
        type: 'directory', 
        contents: {
          'README.md': { type: 'file', content: '# FOSSEE Website\n\nModern website for the FOSSEE club built with React and Vite. Features terminal interface and dark theme.\n\n## Tech Stack\n- React\n- Vite\n- CSS3\n- JavaScript\n\n## GitHub\nhttps://github.com/fossee-club/website\n\n## Live Demo\nhttps://fossee-club.org\n\n## Date\nApril 15, 2025\n\n## Status\nActive' }
        }
      },
      'linux-command-trainer': { 
        type: 'directory', 
        contents: {
          'README.md': { type: 'file', content: '# Linux Command Trainer\n\nInteractive web application to learn Linux commands through hands-on exercises and challenges.\n\n## Tech Stack\n- Python\n- Flask\n- JavaScript\n- SQLite\n\n## GitHub\nhttps://github.com/fossee-club/linux-trainer\n\n## Live Demo\nhttps://linux-trainer.fossee.org\n\n## Date\nApril 25, 2025\n\n## Status\nActive' }
        }
      },
      'README.md': { type: 'file', content: '# FOSS CUSAT Featured Projects\n\nThis directory contains our featured projects and contributions.\n\n## Available Projects\n- vega-r1/: Advanced hardware project (C++, Python, Embedded)\n- fossee-website/: Club website (React, Vite, JavaScript)\n- linux-command-trainer/: Educational tool (Python, Flask, SQLite)\n\n## Getting Started\nUse "cd <project-name>" to navigate to a project directory.\nUse "cat README.md" to view project details.\n\n## GitHub Links\nAll projects are available on GitHub for contributions and collaboration.' }
    }
  },
  events: {
    type: 'directory',
    contents: {
      'inauguration-ceremony.md': { type: 'file', content: '# Inauguration Ceremony: Git, GitHub & GitLab Workshop\n\n## Details\n- **Organization**: FOSS CUSAT\n- **Date**: July 15, 2025\n- **Location**: CUSAT Campus, Kochi\n- **Type**: Workshop\n- **Status**: Active\n\n## Description\nComprehensive workshop covering Git version control, GitHub collaboration, and GitLab workflows.\n\n## Registration\nRegister through the website or contact the organizers.' },
      'vega-r1-launch.md': { type: 'file', content: '# VEGA-R1 Project Launch\n\n## Details\n- **Project**: VEGA-R1 Hardware Project\n- **Date**: March 25, 2025\n- **Type**: Project Launch\n- **Status**: Completed\n\n## Description\nOfficial launch of the VEGA-R1 hardware project featuring advanced embedded systems.' },
      'website-launch.md': { type: 'file', content: '# FOSSEE Website Launch\n\n## Details\n- **Project**: FOSSEE Website\n- **Date**: April 15, 2025\n- **Type**: Website Launch\n- **Status**: Completed\n\n## Description\nLaunch of the new FOSSEE club website with modern design and terminal interface.' },
      'linux-trainer-launch.md': { type: 'file', content: '# Linux Command Trainer Launch\n\n## Details\n- **Project**: Linux Command Trainer\n- **Date**: April 25, 2025\n- **Type**: Educational Tool Launch\n- **Status**: Completed\n\n## Description\nRelease of the interactive Linux command learning platform.' },
      'README.md': { type: 'file', content: '# FOSS CUSAT Events\n\nThis directory contains all upcoming and past events.\n\n## Available Events\n- inauguration-ceremony.md: Git, GitHub & GitLab Workshop (Jul 15, 2025)\n- vega-r1-launch.md: VEGA-R1 Project Launch (Mar 25, 2025)\n- website-launch.md: FOSSEE Website Launch (Apr 15, 2025)\n- linux-trainer-launch.md: Linux Command Trainer Launch (Apr 25, 2025)\n\n## Navigation\nUse "cat <event-file>.md" to view event details.\nUse "ls" to see all available events.\n\n## Registration\nFor upcoming events, visit the website or contact organizers.' }
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
  const [isOpen, setIsOpen] = useState(true);

  // Position on the right side, further below the heading
  const getInitialPosition = () => {
    const x = window.innerWidth - TERMINAL_WIDTH - 20; // Fixed right position
    const y = window.scrollY + 450; // Moved further down
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
          height: '56px',
          background: '#000000',
          border: '2px solid #ffffff',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          fontFamily: 'JetBrains Mono, Fira Mono, monospace', // Moved font style to parent
          fontWeight: 'bold',
          fontSize: '18px',
          letterSpacing: '1px',
        }}
      >
        {/* White Text Part */}
        <span style={{ color: '#fff' }}>
          Terminal&nbsp;
        </span>

        {/* Green Text Part */}
        <span style={{ color: '#00FF41' }}>
          {'>_'}
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
