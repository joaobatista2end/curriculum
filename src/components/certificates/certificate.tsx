import { motion } from 'framer-motion'
import RotateAnimation from '../../animations/rotate'
export interface CourseProps {
    name: string;
    startDate?: string;
    endDate?: string;
    courseBanner?: string;
    institution: string;
}

const item = {
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)'},
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)'
    }
  };
  
export function Certificate(props: CourseProps) {
    return (
        <motion.div
            variants={item}
            className="w-[240px] min-h-[260px] bg-gradient-to-br to-lime-100 from-zinc-200 backdrop-blur-2xl rounded-md shadow-lg flex flex-col"
        >
            <div className="py-2 px-2 border-b h-14">
                <h3 className="font-semibold leading-tight">{ props.name }</h3>
            </div>

            <div className="flex-1 relative">
                <div className='bg-gradient-to-bl right-0 from-lime-100 to-lime-400 px-2 py-1 rounded-bl-md text-right absolute z-20'>
                    <h4 className="font-semibold text-sm">{ props.institution }</h4>
                    <p className='text-[10px] font-light'>
                        <strong>{ props.startDate }</strong> até <strong>{ props.endDate}</strong>
                    </p>
                </div>

                <div className="py-4">
                    <motion.img 
                        src={props.courseBanner} 
                        alt="" 
                        className="mx-auto rounded-md"
                    />
                </div>
            </div>

            <div className="border-t p-2 flex gap-2">
                <motion.button
                    className="transition-all hover:shadow-inner hover:bg-lime-400 font-bold text-sm text-zinc-700 bg-lime-300 px-4 py-2 rounded-md">
                    Verificar
                </motion.button>
                <motion.button
                    className="border bg-opacity-75 border-zinc-700 transition-all w-full hover:shadow-inner hover:text-white hover:bg-zinc-700 font-bold text-sm text-zinc-700 bg-white px-4 py-2 rounded-md">
                    Detalhes
                </motion.button>
            </div>
        </motion.div>
    )
}