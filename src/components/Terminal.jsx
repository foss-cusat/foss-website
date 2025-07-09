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
    if (!xtermRef.current) {
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
      if (xtermRef.current) {
        xtermRef.current.dispose();
        xtermRef.current = null;
      }
    };
  }, []);

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

  return (
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
        }}
        onMouseDown={startDrag}
      >
        FOSS CUSAT Terminal (Drag me)
      </div>
      <div ref={termRef} style={{ height: TERMINAL_HEIGHT, width: '100%' }} />
    </div>
  );
};

export default Terminal; 