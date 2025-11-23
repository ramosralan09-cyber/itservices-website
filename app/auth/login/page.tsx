'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-deepBlue rounded-lg flex items-center justify-center font-bold text-white text-xl mx-auto mb-4">
            ITSS
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Iniciar Sesión</h1>
          <p className="text-gray-400">Accede a tu cuenta</p>
        </div>

        <div className="card-elevated p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-slate border-gray-400/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-slate border-gray-400/30 text-white"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-deepBlue hover:bg-skyBlue">
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <Link
              href="/auth/reset"
              className="text-sm text-gray-400 hover:text-deepBlue transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <div className="text-sm text-gray-400">
              ¿No tienes cuenta?{' '}
              <Link href="/auth/register" className="text-deepBlue hover:text-skyBlue">
                Regístrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
