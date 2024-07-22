


import { roleApi } from "../stores/apis/roleApi";
import Button from "../components/Button";
import { useState } from "react";
interface RoleState {
  id?: string;
  name?: string
}

const RolePage: React.FC = () => {
  const [role, setRole] = useState<RoleState>({})

  const { useFetchRoleQuery, useCreateRoleMutation , useDeleteRoleMutation, useUpdateRoleMutation} = roleApi
  const  { data, isLoading, isError } = useFetchRoleQuery()
 
  const [createRole, create ] = useCreateRoleMutation()
  const [deleteRole, results] = useDeleteRoleMutation()
  const [updateRole, update] = useUpdateRoleMutation() 
   
  
  const handleCreateRole  =() => {
    const role: RoleState =  {
      name:'Hello Testing'
    }
    createRole(role)

  } 
  const handleDeleteRole = (item: RoleState): void => {
    setRole(item)
    deleteRole(item)
  }

  const handleUpdateRole = (role: RoleState): void => {
    setRole(role)
    const update : RoleState = {
      name: 'Yellow world',
      id:role.id
    }
    updateRole(update)
  }

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }else if(isError) {
    content = <p>Error</p>;
  } else {
    content =  data?.map((item ) => (
      <li key={item.id} className="flex justify-between items-center mb-1">
        <span>{item.name}</span>
        <div className="flex flex-row gap-2"> 
        <Button  name={item.name} type="button" isLoading={ !!(item.id===role.id &&  update.isLoading) } label="update" className="py-1 px-2 rounded-md bg-green-500 text-white capitalize" onClick={() => handleUpdateRole(item)}/>
        <Button name={item.name} label="delete" isLoading={ !!(item.id===role.id &&  results.isLoading) } type="button" onClick={() => handleDeleteRole(item)} className="py-1 px-2 capitalize rounded-md bg-red-500 text-white"/>
      </div>
      </li>
      ))
  }
    return (
      <div>
        <div className="flex justify-between items-center py-2">
          <h1>Role Page</h1>
          <Button isLoading={create.isLoading} onClick={handleCreateRole}  className="py-1 px-2 bg-green-400 text-white rounded-md">Create</Button>  
          </div>
        <ul>
          {
           
           content
          }
        </ul>
      </div>
    );
  };
  
  
  export default RolePage