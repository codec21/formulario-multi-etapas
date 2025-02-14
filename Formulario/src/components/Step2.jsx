import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import styles from './Step2.module.css';

const Step2 = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Empresa</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Nome da Empresa</label>
        <Controller
          name="nome-da-empresa"
          control={control}
          defaultValue=""
          rules={{ required: 'Empresa é obrigatória' }}
          render={({ field }) => (
            <input {...field} className={styles.input} placeholder="qual o nome da empresa" />
          )}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Número de Funcionários</label>
        <Controller
          name="numero-de-funcionarios"
          control={control}
          defaultValue=""
          rules={{ required: 'coloca os colaboradores ai' }}
          render={({ field }) => (
            <input {...field} className={styles.input} placeholder="Digite o numero de colaboradores" />
          )}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Sobre seu negócio.. lá ele</label>
        <Controller
          name="sobre-o-seu-negocio"
          control={control}
          defaultValue=""
          rules={{ required: 'insira sobre o negocio fi' }}
          render={({ field }) => (
            <textarea {...field} className={styles.input} placeholder="Fale um pouco sobre os produtos e serviços" />
          )}
        />
      </div>
    </div>
  );
};

export default Step2;