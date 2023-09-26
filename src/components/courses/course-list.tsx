import { Course } from '../courses/course';
import LaravelThumb from '/src/assets/LaravelThumb.jpg'
import MysqlThumb from '/src/assets/MysqlThumb.jpg'
import VueThumb from '/src/assets/VueThumb.jpg'
import ReactThumb from '/src/assets/ReactThumb.jpg'
import NestThumb from '/src/assets/NestThumb.jpg'
import { motion } from "framer-motion";
import { BadgeCheck, Bug } from 'lucide-react'
import { BugBall } from './bug-ball';

const container = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1, scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
export function CourseList() {

    function generateUniqueNumbers(quantity: number): number[] {
        if (quantity > 81) {
            throw new Error("Você não pode gerar mais de 81 números únicos entre 10 e 90.");
        }
    
        const allNumbers: number[] = Array.from({ length: 81 }, (_, i) => i + 10); // Gera uma lista com números de 10 a 90
        const result: number[] = [];
    
        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * allNumbers.length);
            const chosenNumber = allNumbers[randomIndex];
    
            result.push(chosenNumber);
            allNumbers.splice(randomIndex, 1);  // Remove o número escolhido para não ser selecionado novamente
        }
    
        return result;
    }


    return (
        <section className=" w-full bg-waves bg-cover animate-bg-motion">
            <div className="max-w-screen-xl mx-auto space-y-4 py-8">
                <div>
                  { 
                    generateUniqueNumbers(20).map((value, index) => (
                        <BugBall index={index}></BugBall>
                    ))
                  }
                </div>
                
            
                <h3 className='text-2xl font-bold text-white flex items-center gap-3'>
                    <BadgeCheck className='h-6'/>
                    Certificados Recentes
                </h3>
                <motion.div className='flex justify-between'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <Course courseBanner={LaravelThumb} institution='School of Net' startDate='02/12/2021' endDate='03/04/2022' name='Laravel 10 - Gerenciando o banco de dados com Migrations'></Course>
                    <Course courseBanner={VueThumb} institution='School of Net' startDate='02/12/2021' endDate='03/04/2022' name='Vue.js 3 - Gerenciamento de estado com Pinia'></Course>
                    <Course courseBanner={ReactThumb} institution='FullCycle' startDate='02/12/2021' endDate='03/04/2022' name='React.js - Gerenciando estados com Redux'></Course>
                    <Course courseBanner={NestThumb} institution='Rocketseat' startDate='02/12/2021' endDate='03/04/2022' name='Nest.js - Craindo uma API Rest do zero'></Course>
                    <Course courseBanner={MysqlThumb} institution='Alura' startDate='02/12/2021' endDate='03/04/2022' name="MySQL - Crie Queries avançadas"></Course>
                </motion.div>
            </div>
        </section>
    )
}