import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

interface Medicao {
  sistolica: number;
  diastolica: number;
  pulso: number;
  hora: string;
  timestamp: Timestamp;
}

export const enviarMedicao = async (dados: Medicao) => {
  try {
    await addDoc(collection(db, "medicoes"), dados);
    console.log("Medição enviada com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar medição:", error);
  }
};
