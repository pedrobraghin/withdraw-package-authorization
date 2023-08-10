import { DataActions, PDFInterface } from "../@types";
import { useData } from "../hooks/useData";

export function Form() {
  const { dispatch } = useData();
  function handleSetState(action: DataActions, payload: Partial<PDFInterface>) {
    dispatch({
      type: action,
      payload: payload,
    });
  }

  return (
    <div className="min-h-screen min-w-full flex flex-col items-center py-10">
      <div className="flex flex-col gap-5">
        <header>
          <h1 className="font-bold text-xl">
            Gerador de autorização do correios
          </h1>
          <span>Autorize outra pessoa a retirar sua encomenda</span>
        </header>
        <div className="flex flex-col gap-4 border-2 rounded-md p-4">
          <fieldset className="border-2 rounded-md p-4">
            <legend className="px-2 font-semibold">
              Informações de quem vai retirar
            </legend>
            <div className="px-2 flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  placeholder="ex.: João Raimundo da Silva"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.PERSON_NAME, {
                      personName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="rg">RG</label>
                <input
                  type="text"
                  id="rg"
                  placeholder="ex.: 1234567"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.PERSON_RG, {
                      personRG: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  placeholder="ex.: 1234567"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.PERSON_CPF, {
                      personCPF: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="border-2 rounded-md p-4">
            <legend className="px-2 font-semibold">
              Informações da encomenda
            </legend>
            <div className="px-2 flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="object-code">Código do objeto/rastreio</label>
                <input
                  type="text"
                  id="object-code"
                  placeholder="ex.: NB470062323BR "
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.OBJECT_CODE, {
                      objectCode: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="emitter">
                  Nome da empresa que postou a encomenda/objeto
                </label>
                <input
                  type="text"
                  id="emitter"
                  placeholder="ex.: Cosméticos Express "
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.ISSUING_COMPANY, {
                      issuingCompany: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="border-2 rounded-md p-4">
            <legend className="px-2 font-semibold">
              Suas informações (a quem a encomenda/objeto está destinado)
            </legend>
            <div className="px-2 flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="owner-name">Nome completo</label>
                <input
                  type="text"
                  id="owner-name"
                  placeholder="ex.: Maria de Jesus"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.OWNER_NAME, {
                      ownerName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="owner-rg">RG</label>
                <input
                  type="text"
                  id="owner-rg"
                  placeholder="ex.: 1234567"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.OWNER_RG, {
                      ownerRG: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="owner-cpf">CPF</label>
                <input
                  type="text"
                  id="owner-cpf"
                  placeholder="ex.: 1234567"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.OWNER_CPF, {
                      ownerCPF: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="location">Cidade e estado</label>
                <input
                  type="text"
                  id="location"
                  placeholder="ex.: São Paulo/SP"
                  className="border outline-none rounded px-2 py-1"
                  onChange={(e) =>
                    handleSetState(DataActions.LOCATION, {
                      location: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
