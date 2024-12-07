import React, { useState } from "react";
import styles from "./profile.module.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
  });

  const [formErrors, setFormErrors] = useState({
    cpfError: "",
    senhaError: "",
    nomeError: "",
    emailError: "",
  });

  const [cadastroConcluido, setCadastroConcluido] = useState(false);

  // Função para mover o foco para o próximo campo ao apertar Enter
  const handleKeyPress = (e, nextFieldId) => {
    if (e.key === "Enter") {
      const nextField = document.getElementById(nextFieldId);
      if (nextField) nextField.focus();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validação do CPF
    if (name === "cpf") {
      const regex = /^\d{3}\\d{3}\\d{3}\d{2}$/;
      setFormErrors({
        ...formErrors,
        cpfError: regex.test(value) ? "" : "Apenas números",
      });
    }

    // Validação da Senha
    if (name === "senha") {
      const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
      setFormErrors({
        ...formErrors,
        senhaError: regex.test(value) ? "" : "Senha deve ter ao menos uma letra maiúscula e um caractere especial.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.nome) errors.nomeError = "Campo obrigatório";
    if (!formData.email) errors.emailError = "Campo obrigatório";
    if (!formData.cpf) errors.cpfError = "Campo obrigatório";
    if (!formData.senha) errors.senhaError = "Campo obrigatório";

    setFormErrors(errors);

    // Verificar se não há erros
    if (Object.keys(errors).length === 0 && !formErrors.cpfError && !formErrors.senhaError) {
      setCadastroConcluido(true);
    }
  };

  if (cadastroConcluido) {
    return (
      <div className={styles.container}>
        <h1>Cadastro Concluído</h1>
        <p>Seu cadastro foi realizado com sucesso!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Meu Perfil</h1>
      </header>

      <div className={styles.profileBox}>
        <div className={styles.profilePhoto}>
          <img
            src="https://catking.in/wp-content/uploads/2017/02/default-profile-1.png"
            alt="Foto de perfil"
          />
          <ul className={styles.menu}>
            <li>
              <a href="#atualizar">Atualizar cadastro</a>
            </li>
            <li>
              <a href="#alterar-senha">Alterar senha</a>
            </li>
            <li>
              <a href="#deletar" className={styles.delete}>
                Deletar conta
              </a>
            </li>
            <li>
              <a href="#sair" className={styles.logout}>
                Sair
              </a>
            </li>
          </ul>
        </div>

        <section className={styles.profileInfo}>
          <h2>Minhas Informações</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={`${styles.inputGroup} ${formErrors.nomeError ? styles.errorField : ""}`}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyPress(e, "email")}
                placeholder="Seu nome"
              />
              {formErrors.nomeError && <p className={styles.error}>{formErrors.nomeError}</p>}
            </div>

            <div className={`${styles.inputGroup} ${formErrors.emailError ? styles.errorField : ""}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyPress(e, "cpf")}
                placeholder="seuemail@exemplo.com"
              />
              {formErrors.emailError && <p className={styles.error}>{formErrors.emailError}</p>}
            </div>

            <div className={`${styles.inputGroup} ${formErrors.cpfError ? styles.errorField : ""}`}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyPress(e, "senha")}
                placeholder="00000000000"
              />
              {formErrors.cpfError && <p className={styles.error}>{formErrors.cpfError}</p>}
            </div>

            <div className={`${styles.inputGroup} ${formErrors.senhaError ? styles.errorField : ""}`}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e); 
                  }
                }}
                placeholder="Sua senha"
              />
              {formErrors.senhaError && <p className={styles.error}>{formErrors.senhaError}</p>}
            </div>

            <button type="submit" className={styles.buttonConcluir}>
              Concluir
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Profile;
