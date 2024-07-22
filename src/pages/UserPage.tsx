import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../stores/hook"
import { fetchUser, addUser, deleteUser } from "../stores/thunks/userThunk"
import { RootState } from "../stores"
import { UserState } from "../stores/slices/userSlice"
import Button from "../components/Button"


const UserPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const [isCreatedLoading, setIsCreatedLoading] = useState<boolean>(false)
    const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false)
    const [isCreatedUserError, setIsCreatedUserError] = useState<string | null>(null)
    const [isDeleteError, setIsDeleteError] = useState<string | null>(null)
    useEffect(() => {
        
        dispatch(fetchUser())
    }, [dispatch])

    const { users } = useAppSelector((state: RootState) => state.user)
    
    const handleAddUser = () => {
     
        setIsCreatedLoading(true)
        dispatch(addUser({ name: 'Felix', age: 30 }))
            .unwrap()
            .catch((error: string) => setIsCreatedUserError(error))
            .finally(() => setIsCreatedLoading(false)
        )
    }

    const handleClickDelete = async (user: RootState) => {
        
            setIsDeleteLoading(true) 
      
            await  dispatch(deleteUser(user))
                    .unwrap()
                    .catch((error: string) => setIsDeleteError(error))
                    .finally(() => setIsDeleteLoading(false)
                )
            // await  dispatch(fetchUser())
    }
    
    const renderUser = users.map((user:UserState) => {
        return <li key={user.id} className="flex justify-between items-center mb-1 cursor-pointer border rounded-md  border-gray-100">
            <p className="py-1 px-2   w-full">{user.name} - {user.age}</p>
            <Button
                type="button"
                isLoading={isDeleteLoading}
                disabled={isDeleteLoading}
                label="Delete"
                onClick={() => handleClickDelete(user)}
                className="py-1 px-2 rounded-md bg-red-400 text-white active:bg-red-2 active:bg-op-30" />
            {isDeleteError && (<div>Delete Error</div>)}
        </li>
    })

    return (
        <div>
            <div className="flex justify-between items-center py-2">
                <h3>User list</h3>
                <button type="button"
                    disabled={isCreatedLoading}
                    onClick={handleAddUser}
                    className="py-1 px-2 border border-gray-100 rounded-md active:bg-green-300 active:bg-op-20">
                    {isCreatedLoading ? 'Loading...' : '+ Add user'}
                </button>
                { isCreatedUserError && 'Error creating user'}
            </div>
            <ul>{renderUser}</ul>
        </div>
    )
}

export default UserPage