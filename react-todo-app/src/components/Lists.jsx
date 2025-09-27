import List from "./List";

export default function Lists({toData , setTodoData}){



    return <div>
        {toData.map((data) => (
          <List
            key={data.id}
            title={data.title}
            completed={data.completed}
            id={data.id}
            toData = {toData}
            setTodoData = {setTodoData}
          />
        ))}
    </div>
}






