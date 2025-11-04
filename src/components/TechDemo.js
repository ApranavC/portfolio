import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TechDemo = () => {
  const [code, setCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showInput, setShowInput] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const navigate = useNavigate();

  const availableCommands = [
    'help',
    'cd experience',
    'cd projects',
    'cd skills',
    'cd contact',
    'cd achievements',
    'cd responsibilities',
    'stats',
    'whoami',
    'ls',
    'pwd',
    'date',
    'echo',
    'clear',
    'about',
    'skills',
    'contact',
    'projects',
    'experience'
  ];

  const codeLines = [
    '🚀 Welcome to Pranav\'s Portfolio Terminal!',
    '',
    '💡 Type "help" for commands or try: experience, projects, skills, contact',
    '✨ Discover what I can build for you!',
    '',
    'const portfolio = {',
    '  name: "Pranav Abegaonkar",',
    '  role: "Product Solution Engineer",',
    '  skills: ["Python", "Node.js", "React"],',
    '  experience: "2+ years",',
    '  passion: "Building scalable solutions"',
    '};',
    '',
    '// Available Commands:',
    'const commands = ["cd experience", "cd projects", "cd skills", "cd contact"];',
    '',
    '// Let\'s build something amazing together!',
    'portfolio.connect();'
  ];

  useEffect(() => {
    const typeCode = () => {
      setIsTyping(true);
      let lineIndex = 0;
      let charIndex = 0;
      let currentCode = '';

      const typeInterval = setInterval(() => {
        if (lineIndex < codeLines.length) {
          const currentLineText = codeLines[lineIndex];
          
          if (charIndex < currentLineText.length) {
            currentCode += currentLineText[charIndex];
            setCode(currentCode);
            charIndex++;
          } else {
            currentCode += '\n';
            setCode(currentCode);
            lineIndex++;
            charIndex = 0;
          }
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setShowInput(true);
            setTerminalOutput([]);
          }, 500);
        }
      }, 20);

      return () => clearInterval(typeInterval);
    };

    const timer = setTimeout(typeCode, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput, userInput]);

  useEffect(() => {
    if (userInput) {
      const matchingCommands = availableCommands.filter(cmd =>
        cmd.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setSuggestions(matchingCommands.slice(0, 5));
      setShowSuggestions(matchingCommands.length > 0 && userInput.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [userInput]);

  const getAutocomplete = (input) => {
    const matching = availableCommands.find(cmd =>
      cmd.toLowerCase().startsWith(input.toLowerCase())
    );
    return matching ? matching.substring(input.length) : '';
  };

  const executeCommand = async (command) => {
    if (!command.trim()) {
      setTerminalOutput([...terminalOutput, { type: 'empty', text: '' }]);
      setIsExecuting(false);
      return;
    }

    const cmd = command.toLowerCase().trim();
    setIsExecuting(true);
    const newOutput = [...terminalOutput, { type: 'command', text: `$ ${command}` }];
    
    // Simulate command execution delay for better UX
    await new Promise(resolve => setTimeout(resolve, 100));

    switch (cmd) {
      case 'help':
        newOutput.push({ type: 'info', text: 'Available commands:' });
        newOutput.push({ type: 'info', text: '  cd <directory>   - Navigate to sections (experience, projects, skills, contact, achievements, responsibilities)' });
        newOutput.push({ type: 'info', text: '  ls              - List available sections' });
        newOutput.push({ type: 'info', text: '  pwd             - Show current location' });
        newOutput.push({ type: 'info', text: '  whoami          - Display user information' });
        newOutput.push({ type: 'info', text: '  stats           - Show portfolio statistics' });
        newOutput.push({ type: 'info', text: '  date            - Show current date' });
        newOutput.push({ type: 'info', text: '  echo <text>     - Echo text' });
        newOutput.push({ type: 'info', text: '  about           - Show about information' });
        newOutput.push({ type: 'info', text: '  clear           - Clear terminal' });
        break;
      
      case 'whoami':
        newOutput.push({ type: 'success', text: '👤 User Information:' });
        newOutput.push({ type: 'info', text: '  Name: Pranav Abegaonkar' });
        newOutput.push({ type: 'info', text: '  Role: Product Solution Engineer' });
        newOutput.push({ type: 'info', text: '  Location: NIT Surat, India' });
        newOutput.push({ type: 'info', text: '  Education: Integrated Master\'s in Physics' });
        break;

      case 'ls':
        newOutput.push({ type: 'info', text: '📁 Available sections:' });
        newOutput.push({ type: 'info', text: '  📂 experience/' });
        newOutput.push({ type: 'info', text: '  📂 projects/' });
        newOutput.push({ type: 'info', text: '  📂 skills/' });
        newOutput.push({ type: 'info', text: '  📂 contact/' });
        newOutput.push({ type: 'info', text: '  📂 achievements/' });
        newOutput.push({ type: 'info', text: '  📂 responsibilities/' });
        break;

      case 'pwd':
        newOutput.push({ type: 'info', text: '/home/pranav/portfolio' });
        break;

      case 'date':
        const now = new Date();
        newOutput.push({ type: 'info', text: now.toLocaleString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) });
        break;

      case 'stats':
        newOutput.push({ type: 'success', text: '📊 Portfolio Statistics:' });
        newOutput.push({ type: 'info', text: '  • 2+ Years Experience' });
        newOutput.push({ type: 'info', text: '  • 10+ Projects Completed' });
        newOutput.push({ type: 'info', text: '  • 15+ Technologies Mastered' });
        newOutput.push({ type: 'info', text: '  • 3 Leadership Roles' });
        newOutput.push({ type: 'info', text: '  • 1 Research Internship' });
        break;

      case 'about':
        newOutput.push({ type: 'success', text: '👨‍💻 About Pranav:' });
        newOutput.push({ type: 'info', text: '  Currently pursuing Integrated Master\'s in Physics at NIT Surat.' });
        newOutput.push({ type: 'info', text: '  Passionate about technology, research, and building scalable solutions.' });
        newOutput.push({ type: 'info', text: '  Experienced in data analysis, full-stack development, and leadership.' });
        break;

      case 'cd experience':
      case 'cd experience/':
        newOutput.push({ type: 'success', text: '🚀 Navigating to Experience...' });
        setTimeout(() => navigate('/experience'), 500);
        break;

      case 'cd projects':
      case 'cd projects/':
        newOutput.push({ type: 'success', text: '💼 Navigating to Projects...' });
        setTimeout(() => navigate('/projects'), 500);
        break;

      case 'cd skills':
      case 'cd skills/':
        newOutput.push({ type: 'success', text: '🛠️ Navigating to Skills...' });
        setTimeout(() => navigate('/skills'), 500);
        break;

      case 'cd contact':
      case 'cd contact/':
        newOutput.push({ type: 'success', text: '📧 Navigating to Contact...' });
        setTimeout(() => navigate('/contact'), 500);
        break;

      case 'cd achievements':
      case 'cd achievements/':
        newOutput.push({ type: 'success', text: '🏆 Navigating to Achievements...' });
        setTimeout(() => navigate('/achievements'), 500);
        break;

      case 'cd responsibilities':
      case 'cd responsibilities/':
        newOutput.push({ type: 'success', text: '👔 Navigating to Responsibilities...' });
        setTimeout(() => navigate('/responsibilities'), 500);
        break;

      case 'experience':
      case 'projects':
      case 'skills':
      case 'contact':
      case 'achievements':
      case 'responsibilities':
        newOutput.push({ type: 'info', text: `💡 Try: cd ${cmd}` });
        break;

      case 'clear':
        setTerminalOutput([]);
        setIsExecuting(false);
        return;

      default:
        if (cmd.startsWith('echo ')) {
          const echoText = command.substring(5);
          newOutput.push({ type: 'info', text: echoText });
        } else {
          newOutput.push({ type: 'error', text: `Command not found: ${command}` });
          newOutput.push({ type: 'info', text: 'Type "help" to see available commands.' });
          
          // Show suggestions for similar commands
          const similar = availableCommands.filter(c =>
            c.toLowerCase().includes(cmd.split(' ')[0].toLowerCase())
          ).slice(0, 3);
          if (similar.length > 0) {
            newOutput.push({ type: 'info', text: `Did you mean: ${similar.join(', ')}?` });
          }
        }
    }
    
    newOutput.push({ type: 'empty', text: '' });
    setTerminalOutput(newOutput);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    setIsExecuting(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userInput.trim()) {
        executeCommand(userInput);
        setUserInput('');
        setShowSuggestions(false);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setUserInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setUserInput('');
        } else {
          setHistoryIndex(newIndex);
          setUserInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const autocomplete = getAutocomplete(userInput);
      if (autocomplete) {
        setUserInput(userInput + autocomplete);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <motion.div
      className="tech-demo-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="tech-demo-header">
        <div className="terminal-controls">
          <motion.div 
            className="control-dot red"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="control-dot yellow"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="control-dot green"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <span className="terminal-title">portfolio.js — zsh</span>
        <div className="terminal-status">
          {isExecuting && (
            <motion.span 
              className="executing-indicator"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚡ Executing...
            </motion.span>
          )}
        </div>
      </div>
      
      <div className="terminal-content" ref={terminalRef}>
        <pre className="code-text">
          <code className="code-display">
            {!showInput && (
              <>
                {code}
                {isTyping && <span className="cursor-blink">|</span>}
              </>
            )}
            
            {showInput && (
              <>
                {/* Command history and output */}
                {terminalOutput.map((line, index) => {
                  if (line && line.type) {
                    const { type, text } = line;
                    switch (type) {
                      case 'command':
                        return <div key={index} className="terminal-output-line"><span className="command-line">{text}</span></div>;
                      case 'success':
                        return <div key={index} className="terminal-output-line"><span className="success-line">{text}</span></div>;
                      case 'error':
                        return <div key={index} className="terminal-output-line"><span className="error-line">{text}</span></div>;
                      case 'empty':
                        return <br key={index} />;
                      default:
                        return <div key={index} className="terminal-output-line"><span className="info-line">{text}</span></div>;
                    }
                  }
                  return null;
                })}
                
                {/* Auto-complete suggestions */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      className="suggestions-box"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {suggestions.map((suggestion, idx) => (
                        <div
                          key={idx}
                          className="suggestion-item"
                          onClick={() => {
                            setUserInput(suggestion);
                            setShowSuggestions(false);
                            inputRef.current?.focus();
                          }}
                        >
                          <span className="suggestion-prefix">{userInput}</span>
                          <span className="suggestion-completion">{suggestion.substring(userInput.length)}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Current input line - inline with prompt */}
                <span className="terminal-input-line">
                  <span className="prompt">
                    <span className="prompt-user">pranav</span>
                    <span className="prompt-at">@</span>
                    <span className="prompt-host">portfolio</span>
                    <span className="prompt-separator">:</span>
                    <span className="prompt-path">~</span>
                    <span className="prompt-symbol">$</span>
                    {' '}
                  </span>
                  <span className="input-wrapper">
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="terminal-input-field"
                      autoFocus
                      spellCheck={false}
                      autoComplete="off"
                      style={{
                        background: 'transparent',
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    />
                    {userInput && (
                      <span className="autocomplete-hint">
                        {getAutocomplete(userInput)}
                      </span>
                    )}
                    <span className="cursor-blink">|</span>
                  </span>
                </span>
              </>
            )}
          </code>
        </pre>
      </div>
    </motion.div>
  );
};

export default TechDemo;
