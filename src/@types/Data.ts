export interface PDFInterface {
  personName: string;
  personRG: string;
  personCPF: string;
  objectCode: string;
  issuingCompany: string;
  ownerName: string;
  ownerRG: string;
  ownerCPF: string;
  location: string;
}

export enum DataActions {
  ISSUING_COMPANY = "issuingCompany",
  LOCATION = "location",
  OBJECT_CODE = "objectCode",
  OWNER_NAME = "ownerName",
  OWNER_CPF = "ownerCPF",
  OWNER_RG = "ownerRG",
  PERSON_NAME = "personName",
  PERSON_CPF = "personCPF",
  PERSON_RG = "personRG",
}

export interface DataAction {
  payload: Partial<PDFInterface>;
  type: DataActions;
}

export interface DataContextProps {
  state: PDFInterface;
  dispatch: React.Dispatch<DataAction>;
}
