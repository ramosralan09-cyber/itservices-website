'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Camera, Clock, Zap } from 'lucide-react';
import { trackConversion } from '@/lib/analytics';

export default function StorageCalculator() {
  const whatsappLink = "https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20Sistema%20CCTV%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D";
  const [cameras, setCameras] = useState(8);
  const [resolution, setResolution] = useState('4MP');
  const [fps, setFps] = useState(15);
  const [days, setDays] = useState(30);

  const calculateStorage = () => {
    const bitrates: Record<string, number> = {
      '2MP': 2,
      '4MP': 4,
      '4K': 8,
    };

    const bitrate = bitrates[resolution] || 4;

    const storageGB = (bitrate * 3600 * 24 * days * cameras) / (8 * 1024);
    const storageTB = storageGB / 1024;

    return {
      gb: Math.round(storageGB),
      tb: storageTB.toFixed(2),
      recommended: Math.ceil(storageTB / 2) * 2,
    };
  };

  const result = calculateStorage();

  const getRecommendation = () => {
    if (result.recommended <= 2)
      return {
        drive: '2TB',
        type: 'Western Digital Purple',
        price: '$80-120',
        color: 'from-blue-500 to-violet-500',
      };
    if (result.recommended <= 4)
      return {
        drive: '4TB',
        type: 'Western Digital Purple',
        price: '$120-180',
        color: 'from-purple-500 to-pink-500',
      };
    if (result.recommended <= 8)
      return {
        drive: '6-8TB',
        type: 'WD Purple o Seagate SkyHawk',
        price: '$200-300',
        color: 'from-orange to-red-500',
      };
    return {
      drive: '10TB+',
      type: 'Enterprise Grade o RAID',
      price: '$350+',
      color: 'from-red-500 to-pink-600',
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Calculadora de Almacenamiento
        </h2>
        <p className="text-gray-400 text-lg">
          Estima cuánto espacio necesitas para tu sistema CCTV
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elevated p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Camera className="w-6 h-6 text-skyBlue" />
            <h3 className="text-xl font-bold text-white">Configuración del Sistema</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-3">
                Número de Cámaras
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="64"
                  value={cameras}
                  onChange={(e) => setCameras(Number(e.target.value))}
                  className="flex-1 h-2 bg-slate/50 rounded-lg appearance-none cursor-pointer accent-skyBlue"
                />
                <span className="text-white font-bold text-xl min-w-[3rem] text-right">
                  {cameras}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-3">
                Resolución
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['2MP', '4MP', '4K'].map((res) => (
                  <button
                    key={res}
                    onClick={() => setResolution(res)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      resolution === res
                        ? 'bg-gradient-to-r from-skyBlue to-violet-500 text-white shadow-lg'
                        : 'bg-slate/50 text-gray-400 hover:bg-slate/70'
                    }`}
                  >
                    {res}
                  </button>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {resolution === '2MP' && '1080p - Uso general'}
                {resolution === '4MP' && 'Balance ideal - Recomendado'}
                {resolution === '4K' && '8MP - Máximo detalle'}
              </p>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-3">
                Frames por Segundo (FPS)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="8"
                  max="30"
                  step="1"
                  value={fps}
                  onChange={(e) => setFps(Number(e.target.value))}
                  className="flex-1 h-2 bg-slate/50 rounded-lg appearance-none cursor-pointer accent-skyBlue"
                />
                <span className="text-white font-bold text-xl min-w-[3rem] text-right">
                  {fps}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                15 FPS es estándar. 30 FPS para movimiento rápido.
              </p>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-skyBlue" />
                Días de Retención
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="7"
                  max="90"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="flex-1 h-2 bg-slate/50 rounded-lg appearance-none cursor-pointer accent-skyBlue"
                />
                <span className="text-white font-bold text-xl min-w-[3rem] text-right">
                  {days}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Recomendado: 30 días mínimo</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="card-elevated p-8">
            <div className="flex items-center gap-3 mb-6">
              <HardDrive className="w-6 h-6 text-skyBlue" />
              <h3 className="text-xl font-bold text-white">Almacenamiento Calculado</h3>
            </div>

            <motion.div
              key={result.tb}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-6"
            >
              <div
                className={`text-6xl font-bold bg-gradient-to-r ${recommendation.color} text-transparent bg-clip-text mb-2`}
              >
                {result.tb} TB
              </div>
              <div className="text-gray-400 text-sm">
                ({result.gb} GB aproximadamente)
              </div>
            </motion.div>

            <div className="bg-slate/30 rounded-lg p-4 text-sm text-gray-300">
              📊 Basado en:
              <ul className="mt-2 space-y-1 ml-4">
                <li>• {cameras} cámaras @ {resolution}</li>
                <li>• {fps} FPS con codec H.265</li>
                <li>• {days} días de retención</li>
              </ul>
            </div>
          </div>

          <div className="card-elevated p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-skyBlue" />
              <h3 className="text-xl font-bold text-white">Recomendación</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Disco Recomendado:</span>
                <span className="text-white font-bold text-lg">
                  {recommendation.drive}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Tipo:</span>
                <span className="text-white font-semibold">{recommendation.type}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Rango de Precio:</span>
                <span className="text-green-400 font-bold">{recommendation.price}</span>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                <p className="text-blue-300 text-sm">
                  💡 Tip: Considera agregar 20-30% extra para futuras expansiones
                </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              trackConversion('calculator_used', 0);
              window.open(whatsappLink, '_blank');
            }}
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-skyBlue to-violet-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-skyBlue/50 transition-all duration-300"
          >
            💬 Obtener Cotización Exacta
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-gray-500 text-sm"
      >
        <p>
          Nota: Estos son cálculos estimados con H.265. La cotización personalizada
          incluye dimensionamiento exacto según tu infraestructura y necesidades
          específicas.
        </p>
      </motion.div>
    </div>
  );
}
