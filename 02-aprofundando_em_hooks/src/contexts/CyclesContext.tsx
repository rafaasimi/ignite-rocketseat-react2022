import { createContext, useEffect, useReducer, useState } from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentyCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());

    // setCycles((state) =>
    // state.map((cycle) => {
    //   if (cycle.id === activeCycleId) {
    //     return { ...cycle, finishedDate: new Date() };
    //   } else {
    //     return cycle;
    //   }
    // })
    // );
    // setActiveCycleId(null);
    document.title = "Ignite Timer";
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    // setCycles((state) => [newCycle, ...state]);
    // setActiveCycleId(id);
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentyCycleAction());

    // setCycles((state) =>
    // state.map((cycle) => {
    //   if (cycle.id === activeCycleId) {
    //     return { ...cycle, interruptedDate: new Date() };
    //   } else {
    //     return cycle;
    //   }
    // })
    // );
    // setActiveCycleId(null);
    document.title = "Ignite Timer";
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
