'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ResetPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-deepBlue rounded-lg flex items-center justify-center font-bold text-white text-xl mx-auto mb-4">
            ITSS
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Recuperar Contraseña</h1>
          <p className="text-gray-400">Te enviaremos un enlace de recuperación</p>
        </div>

        <div className="card-elevated p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate border-gray-400/30 text-white"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-deepBlue hover:bg-skyBlue">
              Enviar enlace
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            <Link href="/auth/login" className="text-deepBlue hover:text-skyBlue">
              Volver a iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
