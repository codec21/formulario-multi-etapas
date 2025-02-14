import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import styles from './Step3.module.css';

const Step3 = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projeto</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Objetivos do Projeto</label>
        <Controller
          name="objetivos-projeto"
          control={control}
          defaultValue=""
          rules={{ required: 'Põe que já é o ultimo campo' }}
          render={({ field }) => (
            <textarea {...field} className={styles.input} placeholder="Descreva os objetivos desse projeto" />
          )}
        />
      </div>
    </div>
  );
};

export default Step3;