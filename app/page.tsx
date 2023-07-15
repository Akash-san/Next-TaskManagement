
import { getAllTask } from '@/api'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

export default async function Home() {
  const tasks=await getAllTask()
  console.log(tasks)
  return (
    <main >
      <div className=' max-w-4xl mx-auto mt-5'>
        <div className='text-center flex flex-col gap-3'>
          <h1 className=' font-bold text-2xl'>
            Task Management
          </h1>
          <AddTask />
        </div>
        <TaskList tasks={tasks} />
      </div>
    </main>
  )
}
