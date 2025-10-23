import React, { useState } from 'react';
import '../styles/login-page.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Simulação de login
    alert(`Login realizado com: ${email}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Entrar na Plataforma</h1>
            <p className="login-subtitle">Digite suas credenciais para acessar sua conta</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">Lembrar de mim</span>
              </label>
              
              <a href="#forgot" className="forgot-link">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>

          <div className="login-footer">
            <p className="signup-text">
              Não tem uma conta?{' '}
              <a href="#signup" className="signup-link">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;