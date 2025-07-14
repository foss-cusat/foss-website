import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import 'xterm/css/xterm.css';

const DATA = {
  about: `FOSS CUSAT is a community of students passionate about open source software, Linux, and programming. Our mission is to promote FOSS philosophy and provide hands-on learning opportunities at CUSAT.`,
  projects: `Projects:\n- Open Source Club Website\n- Linux Install Fest\n- FOSS Workshops\n- Community Contributions`,
  team: `Team:\n- Alice (Lead)\n- Bob (Dev)\n- Carol (Design)\n- Dave (Events)`,
  resources: `Resources:\n- https://fosscusat.in/resources\n- https://fosscusat.in/docs`,
  events: `Upcoming Events:\n- Linux Bootcamp\n- Hackathon\n- Open Source Day`,
  contact: `Contact us at: foss@cusat.ac.in`,
  help: `Available commands: ls, cd <section>, about, projects, team, resources, events, contact, clear, help`,
};

const SECTIONS = ['home', 'about', 'projects', 'team', 'resources', 'events', 'contact'];

const PROMPT_BASE = 'foss@cusat';
const TERMINAL_WIDTH = 1000;
const TERMINAL_HEIGHT = 500;

const Terminal = () => {
  const xtermRef = useRef(null);
  const termRef = useRef(null);
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Center horizontally, further below the heading
  const getInitialPosition = () => {
    const x = Math.max((window.innerWidth - TERMINAL_WIDTH) / 2, 20);
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
          background: '#161b22',
          foreground: '#00ff41',
          cursor: '#00ff41',
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
    if (command === 'clear') {
      term.clear();
      return;
    }
    if (command === 'ls') {
      term.writeln(SECTIONS.join('  '));
      return;
    }
    if (command.startsWith('cd ')) {
      const target = command.slice(3).trim().toLowerCase();
      if (SECTIONS.includes(target)) {
        setDir(target);
        scrollToSection(target);
        term.writeln(`Changed directory to /${target}`);
      } else {
        term.writeln(`No such section: ${target}`);
      }
      return;
    }
    if (DATA[command.toLowerCase()]) {
      term.writeln(DATA[command.toLowerCase()]);
    } else {
      term.writeln(`Command not found: ${command}`);
    }
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
          alignItems: 'center',
          justifyContent: 'center',
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
            background: '#161b22',
            borderRadius: 8,
            boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
            userSelect: drag.dragging ? 'none' : 'auto',
            cursor: drag.dragging ? 'move' : 'default',
          }}
        >
          <div
            className="terminal-drag-bar"
            style={{
              cursor: 'move',
              background: '#222',
              color: '#00ff41',
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
          >
            <div onMouseDown={startDrag}>
              FOSS CUSAT Terminal (Drag me)
            </div>
            <button
              onClick={closeTerminal}
              style={{
                background: 'none',
                border: 'none',
                color: '#ff4444',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '0 8px',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ff4444';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ff4444';
              }}
            >
              ×
            </button>
          </div>
          <div ref={termRef} style={{ height: TERMINAL_HEIGHT, width: '100%' }} />
        </div>
      )}
    </>
  );
};

export default Terminal; 