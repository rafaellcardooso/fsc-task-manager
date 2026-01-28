import { createPortal } from "react-dom"

const AddTaskDiaglog = ({ isOpen }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="h-sreen fixed bottom-0 left-0 top-0 flex w-screen items-center justify-center backdrop-blur">
      {/* DIALOG */}
      <div className="rounded-xl p-5 text-center">
        <h2 className="bg-white text-xl font-semibold text-[#35383E] shadow">
          Nova tarefa
          <p className="mt-1 text-sm text-[#9A9C9F]">
            Insira as informações abaixo
          </p>
        </h2>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDiaglog
