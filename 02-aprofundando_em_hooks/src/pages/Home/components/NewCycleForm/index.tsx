import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Passear com o cachorro" />
        <option value="Ler meus e-mails" />
        <option value="Ler as notícias de hoje" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={1}
        max={60}
        step={5}
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
