import { createPortal } from "react-dom"

import Button from "./Button.jsx"
import Input from "./Input.jsx"

const AddTaskDiaglog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="h-sreen fixed bottom-0 left-0 top-0 flex w-screen items-center justify-center backdrop-blur">
      {/* DIALOG */}
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383E]">
          Nova tarefa
          <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
            Insira as informações abaixo
          </p>
          <div className="flex w-[#336px] flex-col space-y-4">
            <Input
              id="title"
              label="Título"
              placeholder="Insira o título da tarefa"
            />
            <Input id="time" label="Horário" placeholder="Horario" />
            <Input
              id="description"
              label="Descrição"
              placeholder="Descreva a tarefa"
            />
            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="w-full"
                size="large"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button className="w-full" size="large">
                Salvar
              </Button>
            </div>
          </div>
        </h2>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDiaglog
