import List from "./List";

//이걸로 props를 부모로 부터 받음  이렇게 구조 분해 할당을 사용함으로서 props.toData 이렇게 안쓰고 그냥 toData이렇게 사용가능 
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






