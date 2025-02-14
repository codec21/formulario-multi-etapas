import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ProgressBar from './components/ProgressBar';
import styles from './App.module.css';

const App = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <FormProvider {...methods}>
      <div className={styles.app}>
        <div className={styles.formContainer}>
          <ProgressBar currentStep={step} totalSteps={3} />
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            <div className={styles.buttonGroup}>
              {step > 1 && (
                <button type="button" onClick={prevStep} className={`${styles.button} ${styles.buttonPrevious}`}>
                  Anterior
                </button>
              )}
              {step < 3 ? (
                <button type="button" onClick={nextStep} className={`${styles.button} ${styles.buttonNext}`}>
                  Próximo
                </button>
              ) : (
                <button type="submit" className={`${styles.button} ${styles.buttonSubmit}`}>
                  Enviar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default App;