import Icon from "./Icon"

const MaterialFile = ({material}) => {
  return (
    <div className="flex items-center mt-2">
      <div className="bg-blue-500 rounded-md p-3 mr-2">
        <Icon className="text-white" type="file"/>
      </div>
      <a className="font-medium" href={`http://localhost:5000/${material.materialurl}`}>{material.name}</a>
    </div>
  )
}

export default MaterialFile