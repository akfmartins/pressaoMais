import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // seu arquivo de configuração
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Medicao {
  id: string;
  sistolica: number;
  diastolica: number;
  pulso: number;
  hora: string;
}

const getColor = (s: number, d: number): string => {
  if (s < 120 && d < 80) return "#4CAF50"; // verde
  if (s < 140 && d < 90) return "#FFC107"; // amarelo
  return "#F44336"; // vermelho
};

const Historico: React.FC = () => {
  const [medicoes, setMedicoes] = useState<Medicao[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "medicoes"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const dados = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Medicao[];
      setMedicoes(dados);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "16px" }}>📋 Histórico de Medições</h2>
      {medicoes.length === 0 ? (
        <p>Nenhuma medição registrada ainda.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {medicoes.map((m) => (
            <li
              key={m.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                marginBottom: "16px",
                padding: "16px",
                borderLeft: `8px solid ${getColor(m.sistolica, m.diastolica)}`,
              }}
            >
              <h3 style={{ margin: 0 }}>
                {m.sistolica} / {m.diastolica} mmHg
              </h3>
              <p style={{ margin: "4px 0" }}>Pulso: {m.pulso} bpm</p>
              <p style={{ margin: "4px 0", color: "#666" }}>{m.hora}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Historico;
