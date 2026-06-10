import { Dialog } from "radix-ui";
import DatePicker from "react-datepicker";
import type { Modal, User } from "../types";
import { toast } from "react-toastify";
import { ValidatedataFull } from "../functions/functions";

const EditModal = ({
  selectedUser,
  setSelectedUser,
  editForm,
  setEditForm,
  setData,
}: Modal) => {
  return (
    <>
      <Dialog.Root
        open={!!selectedUser}
        onOpenChange={(open) => {
          if (!open) setSelectedUser(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-app-primary p-6 rounded-[20px] flex flex-col gap-4 w-[50vw]">
            <Dialog.Title className="text-app-primary bg-app-secondary p-2 rounded-[10px] text-center w-full]">
              Uredi uporabnika
            </Dialog.Title>
            <Dialog.Description className="text-app-secondary ">
              Tukaj lahko spremenite uporabnika. Kliknite shrani ko ste končali
            </Dialog.Description>
            <div className="grid grid-cols-3">
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Ime
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm.Ime ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      Ime: e.target.value,
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Priimek
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm.Priimek ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      Priimek: e.target.value,
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Ulica
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm.Ulica ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      Ulica: e.target.value,
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Poštna številka
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm["Poštna številka"] ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      "Poštna številka": Number(e.target.value),
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Pošta
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm.Pošta ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      Pošta: e.target.value,
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Država
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm.Država ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      Država: e.target.value,
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  Davčna številka
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm["Davčna številka"] ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      "Davčna številka": Number(e.target.value),
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary  p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Ime"
                >
                  E-pošta
                </label>
                <input
                  className="bg-app-secondary/80  p-2 rounded-[10px] text-app-primary w-full"
                  value={editForm["E-pošta"] ?? ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      "E-pošta": e.target.value,
                    }))
                  }
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center flex-col m-2">
                <label
                  className="bg-app-secondary p-2 rounded-[10px] mt-2 text-app-primary w-full text-center"
                  htmlFor="Rojstni dan"
                >
                  Rojstni dan
                </label>
                <DatePicker
                  selected={
                    editForm["Rojstni dan"]
                      ? new Date(editForm["Rojstni dan"])
                      : null
                  }
                  onChange={(date) =>
                    setEditForm((prev) => ({
                      ...prev,
                      "Rojstni dan": date?.toISOString().split("T")[0] ?? "",
                    }))
                  }
                  placeholderText="Izberite datum"
                  isClearable
                  dateFormat="dd.MM.yyyy"
                  className="bg-app-secondary/80 p-2 rounded-[10px] text-app-primary w-full"
                />
              </fieldset>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={async () => {
                  const res = ValidatedataFull(editForm as User);
                  console.log(res);
                  if (!res.success) {
                    toast.error(res.error.issues[0].message);
                    return;
                  }
                  await toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 4000)),
                    {
                      pending: "Podatki se pošiljajo",
                      success: "Podatki so bili uspešno poslani",
                      error: "Nekaj se je zalomilo :(",
                    },
                  );
                  setData((prev) =>
                    prev.map((u) =>
                      u.Ime === selectedUser.Ime ? (editForm as User) : u,
                    ),
                  );

                  setSelectedUser(null);
                }}
                className="bg-app-secondary rounded-[18px] text-app-primary p-5 size-fit mr-5"
              >
                Shrani
              </button>
              <Dialog.Close asChild>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="bg-app-secondary rounded-[18px] text-app-primary p-5 size-fit mr-5"
                >
                  Zapri
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default EditModal;
