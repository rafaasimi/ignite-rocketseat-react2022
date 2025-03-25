import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separador,
  StartCountdownButton,
  TaskInput,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O intervalo precisa ser de no mínimo 5 minutos.")
    .max(60, "O intervalo precisa ser de no máximo 60 minutos."),
});

export function Home() {
  // Form Controlled
  // const [task, setTask] = useState("");

  // Form Uncontrolled
  // function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
  //   event?.preventDefault();
  //   console.log(event.target.task.value);
  // }

  function handleCreateNewCycle(data: unknown) {
    console.log(data);
  }

  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });
  const task = watch("task");
  const isSubmitDisabled = !task;

  console.log(formState.errors);

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            // onChange={(event) => setTask(event?.target.value)}
            // value={task}
            {...register("task")}
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
            min={5}
            // max={60}
            step={5}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separador>:</Separador>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
