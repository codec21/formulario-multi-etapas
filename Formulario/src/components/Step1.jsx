import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import styles from './Step1.module.css';

const Step1 = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contato</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Nome:</label>
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          rules={{ required: 'Nome é obrigatório' }}
          render={({ field }) => (
            <input {...field} className={styles.input} placeholder="Digite seu nome" />
          )}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Telefone:</label>
        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          rules={{ required: 'telefone é obrigatório' }}
          render={({ field }) => (
            <input {...field} className={styles.input} placeholder="Digite o seu número do Whatsapp" />
          )}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Email:</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Email é obrigatório', pattern: /^\S+@\S+$/i }}
          render={({ field }) => (
            <input {...field} className={styles.input} placeholder="Digite seu email" />
          )}
        />
      </div>
    </div>
  );
};

export default Step1;