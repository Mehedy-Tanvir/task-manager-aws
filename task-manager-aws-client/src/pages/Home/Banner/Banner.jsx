import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#FEFCFB]">
      <div className="relative w-full min-h-screen hero max-w-[1400px] mx-auto">
        <div className="z-10 flex-col hero-content lg:flex-row-reverse">
          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "2",
              delay: "1",
            }}
            src="/banner.jpg"
            className="w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px]"
            alt="Task Manager"
          />
          <div className="">
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1",
              }}
              className="text-[55px] font-volkhov font-bold"
            >
              Manage Your Tasks <br />
              with <span className="text-yellow-500">Ease</span>
            </motion.h1>
            <motion.p
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1.2",
              }}
              className="py-6 max-w-[400px]"
            >
              Stay organized and boost your productivity. Our task manager app
              helps you keep track of your tasks, set deadlines, and prioritize
              your work efficiently.
            </motion.p>
            <Link to="/dashboard/tasksList">
              <motion.button
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "2",
                  delay: "1.4",
                }}
                className="btn border-2 border-yellow-500 text-[18px] font-medium bg-transparent text-yellow-500 hover:text-white hover:bg-yellow-500 shadow-lg"
              >
                Lets Explore
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
