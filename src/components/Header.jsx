import { Input } from 'antd'

export default function Header({setItemList, setLoading}) {
  const handleAdd = async (value) => {
   
    if(value.length < 3) return

    setLoading(true)

    const newItem = {
      done: false,
      userId: "me",
      item: value,
    }
    const response = await fetch("https://much-to-firebase-jt.web.app/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newItem),
    })
    const data = await response.json()
    setItemList(data)
    setLoading(false)
  }
  return (
    <header>
      <Input.Search 
        allowClear
        enterButton="add"
        size ="large"
        onSearch={handleAdd}
        placeholder = "Add new todo item"/>
    </header>
  )
}