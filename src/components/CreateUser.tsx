import { useUser } from "../contexts/UserContext"
import { TUserForm } from "../types";
import { useForm, Controller, } from "react-hook-form";
import { useEffect } from "react"



export const CreateUser = ({ currentId, onCancel }: { currentId?: number, onCancel: () => void }) => {
    const { addUser, getUserById, updateUser } = useUser();
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        getValues
    } = useForm<TUserForm>()

    const onSubmit = (data: TUserForm) => {
        const buffer = { ...data }

        if (currentId) {
            updateUser({ ...buffer, id: currentId })
        } else {
            addUser(buffer)
        }
        handleCancel()
    }

    const handleCancel = () => {
        onCancel()
        reset();
    }

    useEffect(() => {
        if (currentId) {
            const data = getUserById(currentId)
            setValue("firstName", data?.firstName ?? "")
            setValue("lastName", data?.lastName ?? "")
            setValue("userName", data?.userName ?? "")
            setValue("email", data?.email ?? "")
            setValue("role", data?.role ?? "")
        }
    }, [currentId, getUserById])

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="form_title">{currentId ? "Edit" : "Add"} User</h3>
                        <div className="form_modal">
                            <Controller
                                name="firstName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Firstname is required" }}
                                render={({ field }) => <input {...field} placeholder="Firstname" />}
                            />
                            {errors.firstName && (
                                <p style={{ color: "red" }}>{`${errors.firstName.message}`}</p>
                            )}

                            <Controller
                                name="lastName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Lastname is required" }}
                                render={({ field }) => <input {...field} placeholder="Lastname" />}
                            />
                            {errors.lastName && (
                                <p style={{ color: "red" }}>{`${errors.lastName.message}`}</p>
                            )}

                            <Controller
                                name="userName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Username is required" }}
                                render={({ field }) => <input {...field} placeholder="Username" />}
                            />
                            {errors.userName && (
                                <p style={{ color: "red" }}>{`${errors.userName.message}`}</p>
                            )}

                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Invalid email address'
                                    }
                                }}
                                render={({ field }) => <input {...field} placeholder="Email" />}
                            />
                            {errors.email && (
                                <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
                            )}

                            {!currentId &&
                                (
                                    <span style={{ width: "100%", margin: "0", padding: "0" }}>
                                        <Controller
                                            name="password"
                                            control={control}
                                            defaultValue=""
                                            rules={{
                                                required: "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message: "Password must be at least 8 characters long"
                                                }
                                            }}
                                            render={({ field }) => <input {...field} placeholder="Password" />}
                                        />
                                        {errors.password && (<p style={{ color: "red" }}>{errors.password.message}</p>)}

                                        {/* <div className="notification">
                                            <p>Must be at least 8 characters!</p>
                                            <p>Must contain at least 1 number!</p>
                                            <p>Must contain at least 1 Letter Capital Case!</p>
                                            <p>Must contain at least 1 Letter in Small Case!</p>
                                            <p>Must contain at least 1 Special Character!</p>
                                        </div> */}

                                        <Controller
                                            name="confirmPassword"
                                            control={control}
                                            defaultValue=""
                                            rules={{
                                                required: "Please confirm your password",
                                                validate: value => value === getValues("password") ||
                                                    "Passwords do not match"
                                            }}
                                            render={({ field }) => <input {...field}
                                                placeholder="Confirm Password" />}
                                        />
                                        {errors.confirmPassword && (<p>{errors.confirmPassword.message}</p>)}
                                    </span>
                                )
                            }
                            <Controller
                                name="role"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Role is required" }}
                                render={({ field }) =>
                                    <select {...field}>
                                        <option>SELECT</option>
                                        <option value="TECHNICIAN">TECHNICIAN</option>
                                        <option value="HELPER">HELPER</option>
                                    </select>}
                            />
                            {errors.role && (<p>{errors.role.message}</p>)}

                            <div className="form_btn">
                                <button type="button" onClick={handleCancel}>Cancel</button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                >{currentId ? "Change" : "Save"}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
