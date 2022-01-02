import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import { IUser } from "../lib/types";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

interface IEditUserProps {
  user: IUser;
  setEdit: (edit: boolean) => void;
}

const EditSchoolInfo: React.FC<IEditUserProps> = ({
  user,
  setEdit,
}: IEditUserProps) => {
  const { data, setData, put, processing, errors } = useForm({
    name: user.name,
    email: user.email,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setData(e.target.name as never, e.target.value as never);

  return (
    <div className="bg-white border-none rounded-lg w-full p-6 shadow-sm max-w-screen-md">
      <div className="w-full flex items-center justify-start">
        <h1 className="font-bold text-3xl flex-1">Edit Profile</h1>
      </div>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          put("/dashboard/updateuser/{id}", {
            preserveState: true,
            onSuccess: () => {
              setEdit(false);
            },
          });
        }}
      >
        <div className="flex justify-between flex-wrap">
          <TextInput
            name="name"
            label="Name"
            type="text"
            className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
            value={data.name}
            disabled={processing}
            error={errors.name}
            onChange={handleChange}
          />
          <TextInput
            name="email"
            label="Email"
            type="email"
            className="my-4 w-full sm:w-1/2 sm:odd:pr-2 sm:even:pl-2"
            value={data.email}
            disabled={processing}
            error={errors.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group my-4 flex justify-center">
          <button
            type="submit"
            className="button w-full max-w-sm"
            disabled={processing}
          >
            Save Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSchoolInfo;
