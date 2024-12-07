import React from "react";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1>Meu Perfil</h1>
      </header>

      <div className={styles.profileBox}>
        {/* Foto de perfil e opções */}
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

        {/* Formulário de informações */}
        <section className={styles.profileInfo}>
          <h2>Minhas Informações</h2>
          <form className={styles.form}>
            <div className={`${styles.inputGroup} ${styles.inline}`}>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
              />
            </div>
            {/* Endereço */}
            <div className={styles.inputGroup}>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Seu endereço"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
              />
            </div>
            {/* Data de nascimento e CPF */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                />
              </div>
          </form>
        </section>
      </div>
    </div>
  );
}; 

export default Profile;
