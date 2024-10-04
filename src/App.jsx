import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dashboardImage from './assets/dashboard.jpeg';
import customersImage from './assets/customers.jpeg';
import scheduleImage from './assets/schedule.jpeg';
import { FaMonument, FaClipboardList, FaUserFriends, FaChartLine, FaHeart, FaMobileAlt, FaCheck, FaUserPlus, FaCalendarAlt, FaPencilAlt, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

const FeatureCard = ({ title, description, Icon }) => (
  <motion.div 
    className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center mb-4">
      <div className="bg-indigo-600 p-3 rounded-full mr-4 flex-shrink-0">
        {Icon ? <Icon className="text-white text-xl" /> : <FaCheck className="text-white text-xl" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </motion.div>
);

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [index, setIndex] = useState(0);
  const TEXTS = ['Eliminate', 'Simplify'];

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => (index + 1) % TEXTS.length),
      3000 // Change text every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const features = [
    { title: "Personalized Memorials", description: "Create meaningful digital tributes that reflect each family's wishes.", Icon: FaMonument },
    { title: "Streamlined Planning", description: "Plan funerals with ease using step-by-step guides and automated checklists.", Icon:  FaChartLine },
    { title: "Client Management", description: "Track client history, interactions, and preferences for tailored service.", Icon: FaUserFriends },
    { title: "Document Management", description: "Store and manage important documents related to services.", Icon:FaClipboardList  },
    { title: "Aftercare Support", description: "Stay connected with families post-service, providing continued care and resources.", Icon: FaHeart },
    { title: "Mobile Access", description: "Stay connected with your operations anytime, anywhere with mobile-friendly access.", Icon: FaMobileAlt }
  ];

  const journeySteps = [
    { title: "Initial Onboarding", description: "Families are welcomed with a simple, guided process, helping them navigate through service planning with ease.", icon: FaUserPlus },
    { title: "Service Planning", description: "Use the Service Planning Wizard to map out every detail—from schedules to checklists, ensuring that nothing is overlooked.", icon: FaCalendarAlt },
    { title: "Memorial Creation", description: "Collaborate with families to build personalized digital memorials using easy-to-use templates that can be shared with loved ones.", icon: FaPencilAlt },
    { title: "Guest & Client Management", description: "Track RSVPs, send automated reminders, and store all client details and documents in one place for future reference.", icon: FaUsers },
    { title: "Post-Service Follow-Up", description: "Utilize aftercare features for automated follow-ups, offering grief support resources and ensuring families feel cared for even after the service.", icon: FaHandHoldingHeart }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-2xl font-bold text-indigo-600 font-heading cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GRACE
          </motion.h1>
          <motion.button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-tally-open="3l7r2B"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Join the Waitlist
          </motion.button>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-32">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left md:pr-8">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500">
                  Innovating
                </span>
                <br />
                <span className="text-gray-800 relative">
                  Funeral Service
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-200 transform -skew-x-12"></span>
                </span>
                <br />
                <span className="text-gray-800">Management</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Elevate your funeral home with <span className="font-semibold text-indigo-600">GRACE-CRM</span>. 
                Our innovative solution <span className="bg-indigo-100 px-2 py-1 rounded">streamlines operations</span>, 
                enabling you to focus on delivering <span className="italic">exceptional, compassionate care</span>.
              </motion.p>
              <motion.button 
                className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                data-tally-open="3l7r2B"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Request Early Access
              </motion.button>
            </div>
            <motion.div 
              className="md:w-1/2 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.img 
                src={dashboardImage} 
                alt="GRACE-CRM Dashboard" 
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Key Benefits Section */}
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gray-900">
            <span className="relative inline-block">
              <span className="absolute -top-8 sm:-top-10 md:-top-12 right-0 text-indigo-600 text-2xl sm:text-3xl md:text-4xl font-light">
                Simplify
              </span>
              <span className="relative inline-block">
                <span className="relative z-10">Eliminate</span>
                <span className="absolute left-0 right-0 bottom-1/2 h-1 bg-red-500 transform -rotate-3"></span>
              </span>
            </span>
            <span className="text-indigo-600 ml-2"> Your Daily Struggles</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { 
                title: "Paperwork, Digitized", 
                description: "Transform stacks of forms into seamless digital workflows.", 
                Icon: FaClipboardList 
              },
              { 
                title: "Flawless Planning", 
                description: "Honor every wish with our intuitive service planning tools.", 
                Icon: FaChartLine 
              },
              { 
                title: "Lasting Connections", 
                description: "Turn one-time clients into lifelong relationships.", 
                Icon: FaUserFriends 
              },
              { 
                title: "Digital Memorials", 
                description: "Create beautiful, interactive tributes in minutes.", 
                Icon: FaMonument 
              },
              { 
                title: "Beyond-Service Care", 
                description: "Provide ongoing support, strengthening your reputation.", 
                Icon: FaHeart 
              },
              { 
                title: "Mobile Management", 
                description: "Run your funeral home from anywhere, anytime.", 
                Icon: FaMobileAlt 
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <FeatureCard {...benefit} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Feature Images Section */}
        <AnimatedSection>
          <div className="space-y-16">
            <motion.div 
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2 md:pr-8">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
                  <span className="text-indigo-600">Effortless</span> Customer Management
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700">
                  Organize client information with ease. Deliver personalized service with 
                  <span className="font-semibold text-indigo-600"> comprehensive profiles at your fingertips</span>.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <motion.img 
                  src={customersImage} 
                  alt="GRACE Customer Management" 
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full cursor-pointer" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row-reverse items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
                  <span className="text-indigo-600">Seamless</span> Appointment Scheduling
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700">
                  Manage appointments with precision. 
                  <span className="font-semibold text-indigo-600"> Never miss a beat</span> in your carefully orchestrated symphony of care.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <motion.img 
                  src={scheduleImage} 
                  alt="GRACE Appointment Scheduling" 
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full cursor-pointer" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* User Experience Journey */}
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gray-900">
            Your <span className="text-indigo-600">Journey</span> with GRACE
          </h2>
          <VerticalTimeline animate={false} lineColor="#4F46E5">
            {[
              { 
                title: "Client Profile Creation", 
                description: "Build comprehensive client profiles to manage information efficiently.", 
                actions: "Input personal details, preferences, and service history.",
                icon: FaUserPlus 
              },
              { title: "Intuitive Planning", description: "Map out every detail with our smart Service Planning Wizard.", icon: FaCalendarAlt },
              { title: "Personalized Memorials", description: "Craft unique, shareable digital tributes in minutes.", icon: FaPencilAlt },
              { title: "Effortless Management", description: "Streamline RSVPs, reminders, and client information.", icon: FaUsers },
              { title: "Continuous Care", description: "Provide ongoing support with automated, thoughtful follow-ups.", icon: FaHandHoldingHeart }
            ].map((step, index) => (
              <VerticalTimelineElement
                key={step.title}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', boxShadow: '0 3px 0 #4F46E5' }}
                contentArrowStyle={{ borderRight: '7px solid  #4F46E5' }}
                iconStyle={{ background: '#4F46E5', color: '#fff' }}
                icon={<step.icon />}
              >
                <h3 className="vertical-timeline-element-title text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                {step.actions && (
                  <p className="text-gray-500 text-sm italic">
                    <strong>Actions:</strong> {step.actions}
                  </p>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </AnimatedSection>

        {/* Why Choose GRACE Section */}
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gray-900">
            Why Choose <span className="text-indigo-600">GRACE</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                title: "Industry-Specific Design", 
                description: "Purpose-built software addressing the unique needs of funeral service professionals.", 
                Icon: FaMonument
              },
              { 
                title: "Enhanced Efficiency", 
                description: "Streamline your operations and reduce administrative burden with intelligent automation.", 
                Icon: FaChartLine
              },
              { 
                title: "User-Friendly Interface", 
                description: "Intuitive design ensures smooth adoption and operation, regardless of tech expertise.", 
                Icon: FaUserFriends
              },
              { 
                title: "Flexible Customization", 
                description: "Adapt GRACE to your specific workflows and service offerings with ease.", 
                Icon: FaClipboardList
              }
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <FeatureCard {...reason} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection>
          <motion.div 
            className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12 sm:py-16 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Funeral Home?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join the GRACE revolution and experience the future of compassionate, efficient funeral home management.
            </p>
            <motion.button 
              className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-tally-open="3l7r2B"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
            >
              Get Early Access Now
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;