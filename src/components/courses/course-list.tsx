import { Course } from '../courses/course';

export function CourseList() {
    return (
        <section className=" w-full bg-gradient-to-br to-zinc-700 from-zinc-900">
            <div className="max-w-screen-2xl mx-auto space-y-4 py-8">
                <h3 className='text-2xl font-bold text-white'>Cursos realizados</h3>
                <div className='flex gap-4'>
                    <Course institution='School of Net' startDate='02/12/2021' endDate='03/04/2022' name='Laravel 10 - Gerenciando o banco de dados com Migrations'></Course>
                    <Course institution='School of Net' startDate='02/12/2021' endDate='03/04/2022' name='Vue.js 3 - Gerenciamento de estado com Pinia'></Course>
                    <Course institution='FullCycle' startDate='02/12/2021' endDate='03/04/2022' name='React.js - Gerenciando estados com Redux'></Course>
                    <Course institution='Rocketseat' startDate='02/12/2021' endDate='03/04/2022' name='Nest.js - Craindo uma API Rest do zero'></Course>
                    <Course institution='Alura' startDate='02/12/2021' endDate='03/04/2022' name="MySQL - Crie Queries avançadas"></Course>
                </div>
            </div>
        </section>
    )
}