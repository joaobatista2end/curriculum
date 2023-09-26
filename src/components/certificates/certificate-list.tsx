import { Certificate } from '../certificates/certificate';
import LaravelThumb from '/src/assets/LaravelThumb.jpg'
import MysqlThumb from '/src/assets/MysqlThumb.jpg'
import VueThumb from '/src/assets/VueThumb.jpg'
import ReactThumb from '/src/assets/ReactThumb.jpg'
import NestThumb from '/src/assets/NestThumb.jpg'
import { motion } from "framer-motion";


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  


export function CertificateList() {
    return (
        <section className=" w-full">
            <div className="max-w-screen-xl mx-auto space-y-4 py-8">
                <h3 className='text-2xl font-bold'>Formação</h3>
                <motion.div className='flex justify-between'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <Certificate courseBanner={LaravelThumb} institution='School of Net' startDate='02/12/2021' endDate='03/04/2022' name='Laravel 10 - Gerenciando o banco de dados com Migrations'></Certificate>
                    <Certificate courseBanner={VueThumb} institution='School of Net' startDate='02/12/2021' endDate='03/04/2022' name='Vue.js 3 - Gerenciamento de estado com Pinia'></Certificate>
                    <Certificate courseBanner={ReactThumb} institution='FullCycle' startDate='02/12/2021' endDate='03/04/2022' name='React.js - Gerenciando estados com Redux'></Certificate>
                    <Certificate courseBanner={NestThumb} institution='Rocketseat' startDate='02/12/2021' endDate='03/04/2022' name='Nest.js - Craindo uma API Rest do zero'></Certificate>
                    <Certificate courseBanner={MysqlThumb} institution='Alura' startDate='02/12/2021' endDate='03/04/2022' name="MySQL - Crie Queries avançadas"></Certificate>
                </motion.div>
            </div>
        </section>
    )
}