import React, { useState, useRef, useEffect } from 'react';
import styles from './RetroTerminal.module.css';

const COMMANDS = {
  help: 'Available commands: help, clear, about',
  about: 'FOSSSE CUSAT Terminal. Free and Open Source Software Society, Cochin University of Science and Technology.',
};

function getPrompt() {
  return 'fossse@cusat $ ';
}

function RetroTerminal({ visible, onClose }) {
  const [history, setHistory] = useState([
    'Welcome to FOSSSE CUSAT Terminal!',
    'For available commands, try "help".',
    '',
    `Last login: ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
    '',
    getPrompt(),
  ]);
  const [input, setInput] = useState('');
  const [size, setSize] = useState({ width: 600, height: 400 });
  const terminalRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (visible && outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history, visible]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleCommand(cmd) {
    if (cmd.trim() === '') return;
    if (cmd === 'clear') {
      setHistory([getPrompt()]);
      return;
    }
    const output = COMMANDS[cmd] || `Command not found: ${cmd}`;
    setHistory((h) => [...h, cmd, output, '', getPrompt()]);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  }

  function handleResize(e) {
    e.preventDefault();
    function onMouseMove(ev) {
      setSize((s) => ({
        width: Math.max(400, ev.clientX - (terminalRef.current?.getBoundingClientRect().left || 0)),
        height: Math.max(200, ev.clientY - (terminalRef.current?.getBoundingClientRect().top || 0)),
      }));
    }
    function onMouseUp() {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  if (!visible) return null;

  return (
    <div
      ref={terminalRef}
      className={styles.terminalWindow}
      style={{ width: size.width, height: size.height }}
    >
      <div className={styles.terminalOutput} ref={outputRef}>
        {history.map((line, i) => (
          <div key={i} className={styles.terminalLine}>{line}</div>
        ))}
      </div>
      <div className={styles.terminalInputBar}>
        <span className={styles.prompt}>{getPrompt()}</span>
        <input
          className={styles.terminalInput}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
      <div className={styles.resizer} onMouseDown={handleResize} />
    </div>
  );
}

export default RetroTerminal; 