import { ReactNode, createContext, useReducer } from "react";
import {
  DataAction,
  DataActions,
  DataContextProps,
  PDFInterface,
} from "../@types";

const initialState: PDFInterface = {
  issuingCompany: "",
  location: "",
  objectCode: "",
  ownerCPF: "",
  ownerName: "",
  ownerRG: "",
  personCPF: "",
  personName: "",
  personRG: "",
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

interface DataProviderProps {
  children: ReactNode;
}

function reducer(state: PDFInterface, action: DataAction): PDFInterface {
  switch (action.type) {
    case DataActions.ISSUING_COMPANY: {
      return {
        ...state,
        issuingCompany: action.payload.issuingCompany ?? state.issuingCompany,
      };
    }

    case DataActions.LOCATION: {
      return { ...state, location: action.payload.location ?? state.location };
    }

    case DataActions.OBJECT_CODE: {
      return {
        ...state,
        objectCode: action.payload.objectCode ?? state.objectCode,
      };
    }

    case DataActions.OWNER_CPF: {
      return {
        ...state,
        ownerCPF: action.payload.ownerCPF ?? state.ownerCPF,
      };
    }

    case DataActions.OWNER_NAME: {
      return {
        ...state,
        ownerName: action.payload.ownerName ?? state.ownerName,
      };
    }

    case DataActions.OWNER_RG: {
      return { ...state, ownerRG: action.payload.ownerRG ?? state.ownerRG };
    }

    case DataActions.PERSON_CPF: {
      return {
        ...state,
        personCPF: action.payload.personCPF ?? state.personCPF,
      };
    }

    case DataActions.PERSON_NAME: {
      return {
        ...state,
        personName: action.payload.personName ?? state.ownerName,
      };
    }

    case DataActions.PERSON_RG: {
      return { ...state, personRG: action.payload.personRG ?? state.personRG };
    }

    default:
      return state;
  }
}

export function DataProvider({ children }: DataProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
