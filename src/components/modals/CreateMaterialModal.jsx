import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react'
import { Context } from '../../main';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import Modal from './Modal'

const CreateMaterialModal = observer(({showModal, setShowModal}) => {
  const {user, course} = useContext(Context)
  const [material, setMaterial] = useState({name: "", file: null})
  const [selectedCourse, setSelectedCourse] = useState(null);
  const submitHandler = () => {
    const formData = new FormData()
    formData.append("name", material.name);
    formData.append("material", material.file)
    course.addCourseMaterial(selectedCourse, formData)
  }
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <select
        className='text-black'
        onChange={(e) => setSelectedCourse(e.target.value)}
        defaultValue={"Выберите курс"}
      >
        {user.user?.Course.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <InputField type="text" value={material.name} onChange={e => setMaterial({...material, name: e.target.value})} placeholder="название"/>
      <input onChange={e => setMaterial({...material, file: e.target.files[0]})} type="file"/>
      <Button onClick={submitHandler} size="sm">Добавить</Button>
    </Modal>  
  )
})

export default CreateMaterialModal