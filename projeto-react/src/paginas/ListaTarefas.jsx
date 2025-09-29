import { useState } from "react";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionaTarefa = () => {
    if (tarefa.trim() === "") return;
    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Registre uma tarefa"
      />
      <button onClick={adicionaTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
