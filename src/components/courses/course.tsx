export interface CourseProps {
    name: string;
    startDate?: string;
    endDate?: string;
    courseBanner?: string;
    institution: string;
}

export function Course(props: CourseProps) {
    return (
        <div className="w-[260px] min-h-[260px] bg-white rounded-md shadow-lg flex flex-col">
            <div className="py-2 px-2 border-b h-20">
                <h3 className="font-semibold leading-tight">{ props.name }</h3>
            </div>

            <div className="flex-1 text-xs">
                <h4>{ props.institution }</h4>
                <p>
                    <strong>{ props.startDate }</strong> até <strong>{ props.endDate}</strong>
                </p>
            </div>

            <div className="border-t p-2 flex gap-2">
                <button className="transition-all hover:shadow-inner hover:bg-lime-400 font-bold text-sm text-zinc-700 bg-lime-300 px-4 py-2 rounded-md">
                    Verificar
                </button>
                <button className="transition-all w-full hover:shadow-inner hover:text-white hover:bg-zinc-700 font-bold text-sm text-zinc-700 bg-zinc-300 px-4 py-2 rounded-md">
                    Detalhes
                </button>
            </div>
        </div>
    )
}