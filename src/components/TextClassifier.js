import React, { useState, useEffect } from 'react';
import * as ml5 from 'ml5';

function TextClassifier() {
  const [classifier, setClassifier] = useState(null);
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    // Carregar o modelo de classificação de texto
    const classifierModel = ml5.soundClassifier('https://storage.googleapis.com/tm-model/YCXK9VCm/model.json', modelLoaded);
    
    function modelLoaded() {
      console.log('Model Loaded!');
      setClassifier(classifierModel);
    }
  }, []);

  const handleClassification = () => {
    if (classifier && inputText) {
      classifier.classify(inputText, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }
        setResult(`Categoria: ${results[0].label}, Confiança: ${results[0].confidence.toFixed(2)}`);
      });
    }
  };

  return (
    <div>
      <h2>Classificador de Texto</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Digite seu texto aqui"
      />
      <button onClick={handleClassification}>Classificar</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default TextClassifier;