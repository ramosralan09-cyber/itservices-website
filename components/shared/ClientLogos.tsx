'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Policía de Puerto Rico',
    logo: '/images/logos/policia-pr.png',
    width: 180,
    height: 139,
  },
  {
    name: 'CADES',
    logo: '/images/logos/cades.png',
    width: 180,
    height: 94,
  },
  {
    name: 'Infosys',
    logo: '/images/logos/infosys.png',
    width: 480,
    height: 490,
  },
];

interface ClientLogosProps {
  variant?: 'full' | 'mini';
}

export default function ClientLogos({ variant = 'full' }: ClientLogosProps) {
  if (variant === 'mini') {
    return (
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              loading="lazy"
              quality={85}
              className={`w-auto object-contain ${
                client.name === 'Infosys' ? 'h-32' : 'h-16'
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Clientes que confían en nosotros
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Protegiendo instituciones y empresas líderes en Puerto Rico
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <motion.div
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`w-auto object-contain ${
                    client.name === 'Infosys' ? 'h-64' : 'h-32'
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
